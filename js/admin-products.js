/**
 * BACKSPACE.CO — Admin Product Manager (Stage 4A)
 * File: js/admin-products.js
 *
 * Implements:
 * - Product catalog management with category views (Beds, Mattresses, Protectors, Pillows)
 * - Dashboard metrics (active and hidden products per category)
 * - Hash navigation (#dashboard, #beds, #mattresses, #protectors, #pillows)
 * - Add/Edit product modal with next free code auto-suggest and duplicate check
 * - Safe data preservation: merges edits into existing details jsonb without data loss
 * - Image upload to Supabase Storage bucket 'product-images' (JPG, PNG, WebP up to 3 MB)
 * - Row Level Security error handling, loading states, and textContent XSS protection
 */

(function(window) {
    'use strict';

    const CATEGORIES = ['Beds', 'Mattresses', 'Protectors', 'Pillows'];
    const STANDARD_SIZES = ['Single', 'Double', 'Queen', 'King', 'Custom Size'];
    const MAX_FILE_SIZE = 3 * 1024 * 1024; // 3 MB
    const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

    const CODE_PREFIXES = {
        'Beds': 'BSP-BED-',
        'Mattresses': 'BSP-MAT-',
        'Protectors': 'BSP-PRO-',
        'Pillows': 'BSP-PIL-'
    };

    // State
    let products = [];
    let currentCategory = 'dashboard';
    let searchQuery = '';
    let statusFilter = 'all'; // 'all' | 'active' | 'hidden'
    let editingProduct = null;
    let stagedFiles = [];      // Array of File objects to upload on save
    let activeImages = [];     // Array of strings (URLs or local paths)
    let primaryImageUrl = '';
    let isSlugManuallyEdited = false;

    // Supabase client resolver
    function getClient() {
        if (window.supabaseClient) return window.supabaseClient;
        if (window.AdminAuth && window.AdminAuth.getClient()) return window.AdminAuth.getClient();
        if (window.supabase && typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
            window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            return window.supabaseClient;
        }
        return null;
    }

    // Helper: Normalize image URL for display in admin
    function normalizeImageUrl(url) {
        if (!url) return '';
        const trimmed = String(url).trim();
        if (trimmed.startsWith('./public/')) {
            return '/' + trimmed.substring(2);
        }
        if (trimmed.startsWith('public/')) {
            return '/' + trimmed;
        }
        return trimmed;
    }

    // Helper: Slug generator
    function slugify(text) {
        return (text || '')
            .toString()
            .toLowerCase()
            .trim()
            .replace(/[\s\W-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    // Helper: Toast notification
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `admin-toast toast-${type}`;

        const icon = document.createElement('i');
        if (type === 'success') {
            icon.className = 'fa-solid fa-circle-check text-emerald-400 text-base';
        } else if (type === 'error') {
            icon.className = 'fa-solid fa-circle-exclamation text-red-400 text-base';
        } else {
            icon.className = 'fa-solid fa-circle-info text-[#B85C38] text-base';
        }

        const msgSpan = document.createElement('span');
        msgSpan.className = 'flex-1';
        msgSpan.textContent = message;

        toast.appendChild(icon);
        toast.appendChild(msgSpan);
        container.appendChild(toast);

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        // Auto remove
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) toast.parentNode.removeChild(toast);
            }, 300);
        }, 4000);
    }

    // Helper: Auto-suggest next free code
    function suggestNextCode(category) {
        const prefix = CODE_PREFIXES[category] || 'BSP-PRD-';
        let highestNum = 0;
        const regex = new RegExp('^' + prefix.replace('-', '\\-') + '(\\d+)$', 'i');

        products.forEach(p => {
            const code = (p.code || '').trim();
            const match = code.match(regex);
            if (match) {
                const num = parseInt(match[1], 10);
                if (!isNaN(num) && num > highestNum) {
                    highestNum = num;
                }
            }
        });

        let nextNum = highestNum + 1;
        let candidate = prefix + String(nextNum).padStart(3, '0');

        // Ensure candidate is completely unused
        while (products.some(p => (p.code || '').toUpperCase() === candidate.toUpperCase())) {
            nextNum++;
            candidate = prefix + String(nextNum).padStart(3, '0');
        }

        return candidate;
    }

    // Fetch products from Supabase
    async function loadProducts() {
        const client = getClient();
        if (!client) {
            showToast('Supabase client not initialized.', 'error');
            return;
        }

        const loadingOverlay = document.getElementById('products-loading-state');
        if (loadingOverlay) loadingOverlay.classList.remove('hidden');

        try {
            const { data, error } = await client
                .from('products')
                .select('*')
                .order('sort_order', { ascending: true });

            if (error) {
                console.error('Failed to load products:', error);
                showToast('Failed to load products: ' + (error.message || error), 'error');
                return;
            }

            products = data || [];
            renderCurrentView();
        } catch (err) {
            console.error('Unexpected error loading products:', err);
            showToast('Error loading products. Check your network connection.', 'error');
        } finally {
            if (loadingOverlay) loadingOverlay.classList.add('hidden');
        }
    }

    // Hash Navigation Handler
    function handleHashChange() {
        const rawHash = (window.location.hash || '').toLowerCase().replace('#', '').trim();
        const validViews = ['dashboard', 'beds', 'mattresses', 'protectors', 'pillows'];

        if (validViews.includes(rawHash)) {
            currentCategory = rawHash;
        } else {
            currentCategory = 'dashboard';
        }

        // Update active class on sidebar links
        document.querySelectorAll('.sidebar-nav-link').forEach(link => {
            const href = link.getAttribute('href') || '';
            const linkHash = href.replace('#', '').toLowerCase().trim();
            if (linkHash === currentCategory || (currentCategory === 'dashboard' && linkHash === '')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Close mobile drawer if open
        const sidebar = document.getElementById('admin-sidebar');
        const overlay = document.getElementById('sidebar-mobile-overlay');
        if (sidebar && overlay) {
            sidebar.classList.remove('open');
            overlay.classList.add('hidden');
        }

        searchQuery = '';
        const searchInput = document.getElementById('category-search-input');
        if (searchInput) searchInput.value = '';

        renderCurrentView();
    }

    // Render Views
    function renderCurrentView() {
        const dashboardSection = document.getElementById('view-dashboard');
        const categorySection = document.getElementById('view-category');

        if (!dashboardSection || !categorySection) return;

        if (currentCategory === 'dashboard') {
            dashboardSection.classList.remove('hidden');
            categorySection.classList.add('hidden');
            renderDashboard();
        } else {
            dashboardSection.classList.add('hidden');
            categorySection.classList.remove('hidden');
            renderCategoryView();
        }
    }

    // Render Dashboard
    function renderDashboard() {
        // Compute metrics per category
        const metrics = {
            'Beds': { active: 0, hidden: 0, total: 0 },
            'Mattresses': { active: 0, hidden: 0, total: 0 },
            'Protectors': { active: 0, hidden: 0, total: 0 },
            'Pillows': { active: 0, hidden: 0, total: 0 }
        };

        let totalActive = 0;
        let totalHidden = 0;

        products.forEach(p => {
            const cat = p.category;
            const isActive = p.is_active !== false;

            if (metrics[cat]) {
                metrics[cat].total++;
                if (isActive) {
                    metrics[cat].active++;
                    totalActive++;
                } else {
                    metrics[cat].hidden++;
                    totalHidden++;
                }
            }
        });

        // Update summary counters
        const totalProductsEl = document.getElementById('stat-total-products');
        const totalActiveEl = document.getElementById('stat-total-active');
        const totalHiddenEl = document.getElementById('stat-total-hidden');

        if (totalProductsEl) totalProductsEl.textContent = String(products.length);
        if (totalActiveEl) totalActiveEl.textContent = String(totalActive);
        if (totalHiddenEl) totalHiddenEl.textContent = String(totalHidden);

        // Update category specific cards
        CATEGORIES.forEach(cat => {
            const lower = cat.toLowerCase();
            const activeEl = document.getElementById(`stat-${lower}-active`);
            const hiddenEl = document.getElementById(`stat-${lower}-hidden`);
            const totalEl = document.getElementById(`stat-${lower}-total`);

            if (activeEl) activeEl.textContent = String(metrics[cat].active);
            if (hiddenEl) hiddenEl.textContent = String(metrics[cat].hidden);
            if (totalEl) totalEl.textContent = String(metrics[cat].total);
        });

        // Render recent products preview in dashboard
        const recentTableBody = document.getElementById('dashboard-recent-products');
        if (recentTableBody) {
            recentTableBody.innerHTML = '';
            const recent = products.slice(-5).reverse();

            if (recent.length === 0) {
                const tr = document.createElement('tr');
                const td = document.createElement('td');
                td.colSpan = 5;
                td.className = 'py-6 text-center text-xs text-[#77716B]';
                td.textContent = 'No products found in database.';
                tr.appendChild(td);
                recentTableBody.appendChild(tr);
            } else {
                recent.forEach(p => {
                    recentTableBody.appendChild(createProductRow(p, true));
                });
            }
        }
    }

    // Render Category Table View
    function renderCategoryView() {
        const catName = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
        const titleEl = document.getElementById('category-view-title');
        const countBadge = document.getElementById('category-product-count');
        const addBtnText = document.getElementById('add-product-btn-label');

        if (titleEl) titleEl.textContent = `${catName} Collection`;
        if (addBtnText) addBtnText.textContent = `Add ${catName.replace(/s$/, '')}`;

        // Filter products for this category
        const catProducts = products.filter(p => {
            const pCat = (p.category || '').toLowerCase();
            return pCat === currentCategory.toLowerCase();
        });

        // Apply search query and status filter
        const filtered = catProducts.filter(p => {
            const matchesStatus = (statusFilter === 'all') ||
                (statusFilter === 'active' && p.is_active !== false) ||
                (statusFilter === 'hidden' && p.is_active === false);

            if (!matchesStatus) return false;

            if (!searchQuery) return true;
            const q = searchQuery.toLowerCase().trim();
            const name = (p.name || '').toLowerCase();
            const code = (p.code || '').toLowerCase();
            const material = (p.material || '').toLowerCase();

            return name.includes(q) || code.includes(q) || material.includes(q);
        });

        if (countBadge) {
            countBadge.textContent = `${filtered.length} of ${catProducts.length} Products`;
        }

        const tbody = document.getElementById('category-products-table-body');
        const emptyState = document.getElementById('category-empty-state');

        if (!tbody) return;
        tbody.innerHTML = '';

        if (filtered.length === 0) {
            if (emptyState) emptyState.classList.remove('hidden');
        } else {
            if (emptyState) emptyState.classList.add('hidden');
            filtered.forEach(p => {
                tbody.appendChild(createProductRow(p, false));
            });
        }
    }

    // Helper: Create safe table row using textContent
    function createProductRow(product, isDashboardMini = false) {
        const tr = document.createElement('tr');
        tr.className = 'border-b border-[#E6DFD6]/60 hover:bg-[#F4F0E8]/50 transition-colors';

        // 1. Thumbnail
        const tdImg = document.createElement('td');
        tdImg.className = 'py-3.5 px-4 whitespace-nowrap';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'w-12 h-12 rounded-xl bg-[#EBE5DB] border border-[#E6DFD6] overflow-hidden flex items-center justify-center flex-shrink-0';

        const rawImg = product.image_url || (product.images && product.images[0]) || '';
        if (rawImg) {
            const img = document.createElement('img');
            img.src = normalizeImageUrl(rawImg);
            img.alt = product.name || 'Product';
            img.className = 'w-full h-full object-cover';
            img.onerror = function() {
                this.onerror = null;
                imgContainer.innerHTML = '<i class="fa-solid fa-image text-gray-400 text-sm"></i>';
            };
            imgContainer.appendChild(img);
        } else {
            imgContainer.innerHTML = '<i class="fa-solid fa-image text-gray-400 text-sm"></i>';
        }
        tdImg.appendChild(imgContainer);
        tr.appendChild(tdImg);

        // 2. Name & Details
        const tdName = document.createElement('td');
        tdName.className = 'py-3.5 px-4';

        const nameDiv = document.createElement('div');
        nameDiv.className = 'font-semibold text-sm text-[#292522] line-clamp-1';
        nameDiv.textContent = product.name || 'Untitled Product';
        tdName.appendChild(nameDiv);

        if (!isDashboardMini) {
            const slugDiv = document.createElement('div');
            slugDiv.className = 'text-[11px] text-[#77716B] font-mono mt-0.5 line-clamp-1';
            slugDiv.textContent = product.slug ? `/${product.slug}` : '-';
            tdName.appendChild(slugDiv);
        }
        tr.appendChild(tdName);

        // 3. Code
        const tdCode = document.createElement('td');
        tdCode.className = 'py-3.5 px-4 whitespace-nowrap font-mono text-xs';

        const codeBadge = document.createElement('span');
        codeBadge.className = 'inline-block bg-[#F1EBE3] text-[#292522] px-2.5 py-1 rounded-md border border-[#E6DFD6] font-semibold';
        codeBadge.textContent = product.code || '-';
        tdCode.appendChild(codeBadge);
        tr.appendChild(tdCode);

        // 4. Material
        if (!isDashboardMini) {
            const tdMaterial = document.createElement('td');
            tdMaterial.className = 'py-3.5 px-4 text-xs text-[#77716B] max-w-[200px] truncate';
            tdMaterial.textContent = product.material || 'Standard';
            tr.appendChild(tdMaterial);

            // Price column
            const tdPrice = document.createElement('td');
            tdPrice.className = 'py-3.5 px-4 whitespace-nowrap text-xs font-semibold text-[#292522]';
            if (product.price !== null && product.price !== undefined && !isNaN(product.price)) {
                tdPrice.textContent = '₹' + Number(product.price).toLocaleString('en-IN');
            } else {
                tdPrice.textContent = '-';
            }
            tr.appendChild(tdPrice);
        }

        // 5. Status
        const tdStatus = document.createElement('td');
        tdStatus.className = 'py-3.5 px-4 whitespace-nowrap';

        const statusBadge = document.createElement('span');
        const isActive = product.is_active !== false;
        if (isActive) {
            statusBadge.className = 'inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200';
            statusBadge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>Active';
        } else {
            statusBadge.className = 'inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200';
            statusBadge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>Hidden';
        }
        tdStatus.appendChild(statusBadge);
        tr.appendChild(tdStatus);

        // 6. Actions (Edit, Hide/Show, Delete)
        if (!isDashboardMini) {
            const tdActions = document.createElement('td');
            tdActions.className = 'py-3.5 px-4 whitespace-nowrap text-right';

            const actionContainer = document.createElement('div');
            actionContainer.className = 'inline-flex items-center space-x-1.5';

            // Edit button
            const editBtn = document.createElement('button');
            editBtn.type = 'button';
            editBtn.className = 'p-2 rounded-lg text-[#77716B] hover:text-[#B85C38] hover:bg-[#EBE5DB]/60 transition-colors cursor-pointer';
            editBtn.title = 'Edit Product';
            editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square text-sm"></i>';
            editBtn.addEventListener('click', () => openEditModal(product));
            actionContainer.appendChild(editBtn);

            // Toggle Visibility (Hide / Show) button
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'p-2 rounded-lg text-[#77716B] hover:text-[#292522] hover:bg-[#EBE5DB]/60 transition-colors cursor-pointer';
            toggleBtn.title = isActive ? 'Hide Product' : 'Show Product';
            toggleBtn.innerHTML = isActive
                ? '<i class="fa-solid fa-eye-slash text-sm"></i>'
                : '<i class="fa-solid fa-eye text-sm text-emerald-600"></i>';
            toggleBtn.addEventListener('click', () => handleToggleStatus(product, toggleBtn));
            actionContainer.appendChild(toggleBtn);

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.className = 'p-2 rounded-lg text-red-500 hover:text-white hover:bg-red-600 transition-colors cursor-pointer';
            deleteBtn.title = 'Delete Product';
            deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can text-sm"></i>';
            deleteBtn.addEventListener('click', () => openDeleteConfirm(product));
            actionContainer.appendChild(deleteBtn);

            tdActions.appendChild(actionContainer);
            tr.appendChild(tdActions);
        }

        return tr;
    }

    // Handle Toggle is_active
    async function handleToggleStatus(product, btnEl) {
        const client = getClient();
        if (!client) {
            showToast('Supabase client not initialized.', 'error');
            return;
        }

        const newStatus = !(product.is_active !== false);
        const originalContent = btnEl.innerHTML;
        btnEl.disabled = true;
        btnEl.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin text-sm"></i>';

        try {
            const { error } = await client
                .from('products')
                .update({
                    is_active: newStatus,
                    updated_at: new Date().toISOString()
                })
                .eq('id', product.id);

            if (error) {
                console.error('Toggle status error:', error);
                showToast('Failed to update status: ' + (error.message || error), 'error');
                btnEl.innerHTML = originalContent;
                btnEl.disabled = false;
                return;
            }

            product.is_active = newStatus;
            showToast(`Product '${product.name}' is now ${newStatus ? 'active' : 'hidden'}.`, 'success');
            renderCurrentView();
        } catch (err) {
            console.error('Unexpected error toggling status:', err);
            showToast('Error updating status.', 'error');
            btnEl.innerHTML = originalContent;
            btnEl.disabled = false;
        }
    }

    // Open Delete Confirmation Dialog
    function openDeleteConfirm(product) {
        const modal = document.getElementById('delete-modal');
        const text = document.getElementById('delete-modal-text');
        const confirmBtn = document.getElementById('confirm-delete-btn');

        if (!modal || !confirmBtn) return;

        if (text) {
            text.textContent = `Are you sure you want to permanently delete "${product.name}" (${product.code})? This action will remove the product row from the database and cannot be undone.`;
        }

        modal.classList.remove('hidden');

        // Clean up previous event listeners by cloning
        const newConfirmBtn = confirmBtn.cloneNode(true);
        confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);

        newConfirmBtn.addEventListener('click', async () => {
            newConfirmBtn.disabled = true;
            newConfirmBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i>Deleting...';

            const client = getClient();
            if (!client) {
                showToast('Supabase client not initialized.', 'error');
                closeDeleteConfirm();
                return;
            }

            try {
                const { error } = await client
                    .from('products')
                    .delete()
                    .eq('id', product.id);

                if (error) {
                    console.error('Delete error:', error);
                    showToast('Failed to delete product: ' + (error.message || error), 'error');
                } else {
                    products = products.filter(p => p.id !== product.id);
                    showToast(`Product '${product.name}' deleted permanently.`, 'success');
                    renderCurrentView();
                }
            } catch (err) {
                console.error('Unexpected delete error:', err);
                showToast('Failed to delete product.', 'error');
            } finally {
                closeDeleteConfirm();
            }
        });
    }

    function closeDeleteConfirm() {
        const modal = document.getElementById('delete-modal');
        if (modal) modal.classList.add('hidden');
    }

    // Modal Form: Add / Edit
    function openAddModal() {
        editingProduct = null;
        stagedFiles = [];
        activeImages = [];
        primaryImageUrl = '';
        isSlugManuallyEdited = false;

        const defaultCategory = (currentCategory && currentCategory !== 'dashboard')
            ? (currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1))
            : 'Beds';

        const modal = document.getElementById('product-modal');
        const title = document.getElementById('product-modal-title');
        const form = document.getElementById('product-form');

        if (!modal || !form) return;
        form.reset();

        if (title) title.textContent = `Add New ${defaultCategory.replace(/s$/, '')}`;

        // Populate Category
        const catSelect = document.getElementById('form-category');
        if (catSelect) catSelect.value = defaultCategory;

        // Auto-suggest code
        const codeInput = document.getElementById('form-code');
        if (codeInput) codeInput.value = suggestNextCode(defaultCategory);

        // Customization on by default
        const custCheckbox = document.getElementById('form-customization');
        if (custCheckbox) custCheckbox.checked = true;

        // Default all standard sizes checked
        STANDARD_SIZES.forEach(sz => {
            const cb = document.getElementById(`size-${sz.replace(/\s+/g, '-').toLowerCase()}`);
            if (cb) cb.checked = true;
        });

        renderImagePreviews();
        modal.classList.remove('hidden');
    }

    function openEditModal(product) {
        editingProduct = product;
        stagedFiles = [];
        activeImages = [];
        primaryImageUrl = product.image_url || '';
        isSlugManuallyEdited = true;

        const modal = document.getElementById('product-modal');
        const title = document.getElementById('product-modal-title');
        const form = document.getElementById('product-form');

        if (!modal || !form) return;
        form.reset();

        if (title) title.textContent = `Edit Product: ${product.name || product.code}`;

        // Category
        const catSelect = document.getElementById('form-category');
        if (catSelect) catSelect.value = product.category || 'Beds';

        // Name
        const nameInput = document.getElementById('form-name');
        if (nameInput) nameInput.value = product.name || '';

        // Code
        const codeInput = document.getElementById('form-code');
        if (codeInput) codeInput.value = product.code || '';

        // Slug
        const slugInput = document.getElementById('form-slug');
        if (slugInput) slugInput.value = product.slug || '';

        // Material
        const materialInput = document.getElementById('form-material');
        if (materialInput) materialInput.value = product.material || '';

        // Description
        const descInput = document.getElementById('form-description');
        if (descInput) descInput.value = product.description || '';

        // Customization
        const custCheckbox = document.getElementById('form-customization');
        if (custCheckbox) custCheckbox.checked = product.customization !== false;

        // Price fields
        const priceInput = document.getElementById('form-price');
        if (priceInput) priceInput.value = (product.price !== null && product.price !== undefined) ? product.price : '';

        const origPriceInput = document.getElementById('form-original-price');
        if (origPriceInput) origPriceInput.value = (product.original_price !== null && product.original_price !== undefined) ? product.original_price : '';

        // Sizes checkboxes
        let currentSizes = [];
        if (Array.isArray(product.sizes)) {
            currentSizes = product.sizes.map(s => (typeof s === 'object' && s !== null) ? s.name : s);
        } else if (product.details && Array.isArray(product.details.sizes)) {
            currentSizes = product.details.sizes.map(s => (typeof s === 'object' && s !== null) ? s.name : s);
        }

        STANDARD_SIZES.forEach(sz => {
            const cb = document.getElementById(`size-${sz.replace(/\s+/g, '-').toLowerCase()}`);
            if (cb) {
                cb.checked = currentSizes.includes(sz);
            }
        });

        // Existing Images
        if (Array.isArray(product.images) && product.images.length > 0) {
            activeImages = [...product.images];
        } else if (product.image_url) {
            activeImages = [product.image_url];
        } else if (product.image) {
            activeImages = [product.image];
        }

        if (!primaryImageUrl && activeImages.length > 0) {
            primaryImageUrl = activeImages[0];
        }

        renderImagePreviews();
        modal.classList.remove('hidden');
    }

    function closeModal() {
        const modal = document.getElementById('product-modal');
        if (modal) modal.classList.add('hidden');
        editingProduct = null;
        stagedFiles = [];
        activeImages = [];
        primaryImageUrl = '';
    }

    // Render Image Previews in Modal
    function renderImagePreviews() {
        const previewContainer = document.getElementById('image-previews-grid');
        if (!previewContainer) return;
        previewContainer.innerHTML = '';

        const totalItems = activeImages.length + stagedFiles.length;
        if (totalItems === 0) {
            previewContainer.innerHTML = '<p class="text-xs text-[#77716B] italic col-span-full">No images attached yet. Drop files above or select files to upload.</p>';
            return;
        }

        // Render existing images
        activeImages.forEach((url, idx) => {
            const card = document.createElement('div');
            card.className = 'relative group aspect-square rounded-xl bg-[#EBE5DB] border-2 overflow-hidden transition-all ' +
                (url === primaryImageUrl ? 'border-[#B85C38] ring-2 ring-[#B85C38]/20' : 'border-[#E6DFD6]');

            const img = document.createElement('img');
            img.src = normalizeImageUrl(url);
            img.alt = 'Preview';
            img.className = 'w-full h-full object-cover';
            img.onerror = function() {
                this.onerror = null;
                card.innerHTML = '<div class="w-full h-full flex items-center justify-center text-xs text-gray-400"><i class="fa-solid fa-image"></i></div>';
            };
            card.appendChild(img);

            // Primary badge or set primary button
            if (url === primaryImageUrl) {
                const badge = document.createElement('span');
                badge.className = 'absolute top-1.5 left-1.5 bg-[#B85C38] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow';
                badge.textContent = 'Main';
                card.appendChild(badge);
            } else {
                const setPrimaryBtn = document.createElement('button');
                setPrimaryBtn.type = 'button';
                setPrimaryBtn.className = 'absolute top-1.5 left-1.5 bg-black/60 hover:bg-[#B85C38] text-white text-[9px] font-medium px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity';
                setPrimaryBtn.textContent = 'Set Main';
                setPrimaryBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    primaryImageUrl = url;
                    renderImagePreviews();
                });
                card.appendChild(setPrimaryBtn);
            }

            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow cursor-pointer';
            removeBtn.title = 'Remove Image';
            removeBtn.innerHTML = '<i class="fa-solid fa-xmark text-[10px]"></i>';
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                activeImages.splice(idx, 1);
                if (primaryImageUrl === url) {
                    primaryImageUrl = activeImages[0] || (stagedFiles[0] ? 'staged-0' : '');
                }
                renderImagePreviews();
            });
            card.appendChild(removeBtn);

            previewContainer.appendChild(card);
        });

        // Render staged new files
        stagedFiles.forEach((file, idx) => {
            const card = document.createElement('div');
            const stagedKey = `staged-${idx}`;
            card.className = 'relative group aspect-square rounded-xl bg-[#EBE5DB] border-2 overflow-hidden transition-all ' +
                (primaryImageUrl === stagedKey ? 'border-[#B85C38] ring-2 ring-[#B85C38]/20' : 'border-[#E6DFD6]');

            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = file.name;
            img.className = 'w-full h-full object-cover';
            card.appendChild(img);

            // Upload pending badge
            const pendingBadge = document.createElement('span');
            pendingBadge.className = 'absolute bottom-1.5 left-1.5 bg-[#292522]/80 backdrop-blur-sm text-white text-[9px] font-mono px-1.5 py-0.5 rounded truncate max-w-[80%]';
            pendingBadge.textContent = 'New Upload';
            card.appendChild(pendingBadge);

            // Set main button
            if (primaryImageUrl === stagedKey) {
                const badge = document.createElement('span');
                badge.className = 'absolute top-1.5 left-1.5 bg-[#B85C38] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow';
                badge.textContent = 'Main';
                card.appendChild(badge);
            } else {
                const setPrimaryBtn = document.createElement('button');
                setPrimaryBtn.type = 'button';
                setPrimaryBtn.className = 'absolute top-1.5 left-1.5 bg-black/60 hover:bg-[#B85C38] text-white text-[9px] font-medium px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity';
                setPrimaryBtn.textContent = 'Set Main';
                setPrimaryBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    primaryImageUrl = stagedKey;
                    renderImagePreviews();
                });
                card.appendChild(setPrimaryBtn);
            }

            // Remove button
            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow cursor-pointer';
            removeBtn.title = 'Remove Image';
            removeBtn.innerHTML = '<i class="fa-solid fa-xmark text-[10px]"></i>';
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                stagedFiles.splice(idx, 1);
                if (primaryImageUrl === stagedKey) {
                    primaryImageUrl = activeImages[0] || (stagedFiles[0] ? 'staged-0' : '');
                }
                renderImagePreviews();
            });
            card.appendChild(removeBtn);

            previewContainer.appendChild(card);
        });
    }

    // Handle File Selection & Validation
    function handleFilesAdded(fileList) {
        if (!fileList || fileList.length === 0) return;

        let hasInvalidType = false;
        let hasTooLarge = false;

        Array.from(fileList).forEach(file => {
            if (!ALLOWED_MIME_TYPES.includes(file.type)) {
                hasInvalidType = true;
                return;
            }
            if (file.size > MAX_FILE_SIZE) {
                hasTooLarge = true;
                return;
            }
            stagedFiles.push(file);
        });

        if (hasInvalidType) {
            showToast('Only JPG, PNG and WebP images are allowed.', 'error');
        }
        if (hasTooLarge) {
            showToast('Files larger than 3 MB are not permitted.', 'error');
        }

        if (!primaryImageUrl && stagedFiles.length > 0 && activeImages.length === 0) {
            primaryImageUrl = 'staged-0';
        }

        renderImagePreviews();
    }

    // Save Product (Insert or Update with merge into details)
    async function handleProductFormSubmit(e) {
        e.preventDefault();

        const client = getClient();
        if (!client) {
            showToast('Supabase client not initialized.', 'error');
            return;
        }

        const nameInput = document.getElementById('form-name');
        const codeInput = document.getElementById('form-code');
        const slugInput = document.getElementById('form-slug');
        const categorySelect = document.getElementById('form-category');
        const materialInput = document.getElementById('form-material');
        const descInput = document.getElementById('form-description');
        const custCheckbox = document.getElementById('form-customization');
        const priceInput = document.getElementById('form-price');
        const origPriceInput = document.getElementById('form-original-price');
        const submitBtn = document.getElementById('save-product-btn');

        // Validation
        const name = (nameInput?.value || '').trim();
        const code = (codeInput?.value || '').trim().toUpperCase();
        let slug = (slugInput?.value || '').trim().toLowerCase();
        const category = categorySelect?.value;
        const material = (materialInput?.value || '').trim();
        const description = (descInput?.value || '').trim();
        const customization = Boolean(custCheckbox?.checked);

        if (!name) {
            showToast('Product name is required.', 'error');
            nameInput?.focus();
            return;
        }
        if (!code) {
            showToast('Product code is required.', 'error');
            codeInput?.focus();
            return;
        }
        if (!slug) {
            slug = slugify(name);
        }
        if (!category || !CATEGORIES.includes(category)) {
            showToast('Please select a valid category.', 'error');
            categorySelect?.focus();
            return;
        }

        // Duplicate code validation
        const duplicate = products.find(p =>
            (p.code || '').toUpperCase() === code &&
            (!editingProduct || p.id !== editingProduct.id)
        );
        if (duplicate) {
            showToast(`Product code "${code}" already exists for "${duplicate.name}". Please use a unique code.`, 'error');
            codeInput?.focus();
            return;
        }

        // Selected Sizes
        const selectedSizes = [];
        STANDARD_SIZES.forEach(sz => {
            const cb = document.getElementById(`size-${sz.replace(/\s+/g, '-').toLowerCase()}`);
            if (cb && cb.checked) {
                selectedSizes.push(sz);
            }
        });

        // Numeric price parsing
        let price = null;
        if (priceInput?.value !== '' && priceInput?.value !== undefined) {
            const num = parseFloat(priceInput.value);
            if (isNaN(num) || num < 0) {
                showToast('Selling price must be a valid non-negative number.', 'error');
                priceInput?.focus();
                return;
            }
            price = num;
        }

        let originalPrice = null;
        if (origPriceInput?.value !== '' && origPriceInput?.value !== undefined) {
            const num = parseFloat(origPriceInput.value);
            if (isNaN(num) || num < 0) {
                showToast('Original / MRP price must be a valid non-negative number.', 'error');
                origPriceInput?.focus();
                return;
            }
            originalPrice = num;
        }

        // Loading state
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i>Saving...';

        try {
            // Upload newly staged images to Supabase Storage 'product-images'
            const uploadedUrls = [];
            for (let i = 0; i < stagedFiles.length; i++) {
                const file = stagedFiles[i];
                const cleanExt = (file.name.split('.').pop() || 'jpg').toLowerCase();
                const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
                const filePath = `${category.toLowerCase()}/${code.toLowerCase()}-${Date.now()}-${i}.${cleanExt}`;

                const { data: uploadData, error: uploadError } = await client.storage
                    .from('product-images')
                    .upload(filePath, file, {
                        cacheControl: '3600',
                        upsert: false
                    });

                if (uploadError) {
                    console.error('Storage upload error:', uploadError);
                    showToast(`Image upload failed: ${uploadError.message || uploadError}. Run supabase/storage.sql to set up bucket permissions.`, 'error');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    return;
                }

                const { data: urlData } = client.storage
                    .from('product-images')
                    .getPublicUrl(filePath);

                if (urlData && urlData.publicUrl) {
                    uploadedUrls.push(urlData.publicUrl);
                    if (primaryImageUrl === `staged-${i}`) {
                        primaryImageUrl = urlData.publicUrl;
                    }
                }
            }

            // Consolidate final images array
            const finalImages = [...activeImages, ...uploadedUrls];
            let finalPrimaryImage = primaryImageUrl;
            if (!finalPrimaryImage || finalPrimaryImage.startsWith('staged-')) {
                finalPrimaryImage = finalImages[0] || '';
            }

            if (editingProduct) {
                // UPDATE: Merge into existing details jsonb
                const existingDetails = (editingProduct.details && typeof editingProduct.details === 'object')
                    ? editingProduct.details
                    : {};

                const mergedDetails = {
                    ...existingDetails,
                    name: name,
                    code: code,
                    slug: slug,
                    category: category,
                    mainCategory: category,
                    description: description,
                    desc: description,
                    material: material,
                    sizes: selectedSizes,
                    customization: customization,
                    image: finalPrimaryImage,
                    image_url: finalPrimaryImage,
                    images: finalImages,
                    price: price,
                    originalPrice: originalPrice
                };

                const updatePayload = {
                    code: code,
                    slug: slug,
                    category: category,
                    name: name,
                    description: description,
                    material: material,
                    sizes: selectedSizes,
                    image_url: finalPrimaryImage,
                    images: finalImages,
                    customization: customization,
                    price: price,
                    original_price: originalPrice,
                    details: mergedDetails,
                    updated_at: new Date().toISOString()
                };

                const { data: updatedRow, error: updateError } = await client
                    .from('products')
                    .update(updatePayload)
                    .eq('id', editingProduct.id)
                    .select()
                    .single();

                if (updateError) {
                    console.error('Update error:', updateError);
                    showToast('Failed to update product: ' + (updateError.message || updateError), 'error');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    return;
                }

                // Update local state
                const idx = products.findIndex(p => p.id === editingProduct.id);
                if (idx !== -1) {
                    products[idx] = updatedRow || { ...editingProduct, ...updatePayload };
                }
                showToast(`Product "${name}" updated successfully.`, 'success');
            } else {
                // INSERT: New product with sort_order = highest existing + 1
                const maxSortOrder = products.reduce((max, p) => Math.max(max, p.sort_order || 0), 0);
                const newSortOrder = maxSortOrder + 1;

                const initialDetails = {
                    name: name,
                    code: code,
                    slug: slug,
                    category: category,
                    mainCategory: category,
                    description: description,
                    desc: description,
                    material: material,
                    sizes: selectedSizes,
                    customization: customization,
                    image: finalPrimaryImage,
                    image_url: finalPrimaryImage,
                    images: finalImages,
                    price: price,
                    originalPrice: originalPrice
                };

                const insertPayload = {
                    code: code,
                    slug: slug,
                    category: category,
                    name: name,
                    description: description,
                    material: material,
                    sizes: selectedSizes,
                    image_url: finalPrimaryImage,
                    images: finalImages,
                    customization: customization,
                    sort_order: newSortOrder,
                    is_active: true,
                    price: price,
                    original_price: originalPrice,
                    details: initialDetails
                };

                const { data: insertedRow, error: insertError } = await client
                    .from('products')
                    .insert(insertPayload)
                    .select()
                    .single();

                if (insertError) {
                    console.error('Insert error:', insertError);
                    showToast('Failed to create product: ' + (insertError.message || insertError), 'error');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    return;
                }

                if (insertedRow) {
                    products.push(insertedRow);
                }
                showToast(`Product "${name}" created with code ${code}.`, 'success');
            }

            closeModal();
            renderCurrentView();
        } catch (err) {
            console.error('Save unexpected error:', err);
            showToast('An unexpected error occurred while saving product.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }

    // Initialize Event Listeners
    function initEvents() {
        window.addEventListener('hashchange', handleHashChange);

        // Sidebar mobile toggles
        const mobileMenuBtn = document.getElementById('admin-mobile-menu-btn');
        const sidebar = document.getElementById('admin-sidebar');
        const overlay = document.getElementById('sidebar-mobile-overlay');

        if (mobileMenuBtn && sidebar && overlay) {
            mobileMenuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('hidden');
            });
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('open');
                overlay.classList.add('hidden');
            });
        }

        // Add Product button triggers
        const addBtn = document.getElementById('add-product-btn');
        if (addBtn) addBtn.addEventListener('click', openAddModal);

        const dashboardAddBtn = document.getElementById('dashboard-add-product-btn');
        if (dashboardAddBtn) dashboardAddBtn.addEventListener('click', openAddModal);

        // Modal close buttons
        const modalCloseBtn = document.getElementById('product-modal-close');
        const modalCancelBtn = document.getElementById('product-modal-cancel');
        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);

        const deleteCancelBtn = document.getElementById('cancel-delete-btn');
        if (deleteCancelBtn) deleteCancelBtn.addEventListener('click', closeDeleteConfirm);

        // Form submit
        const productForm = document.getElementById('product-form');
        if (productForm) productForm.addEventListener('submit', handleProductFormSubmit);

        // Category change in Add form: re-suggest code
        const catSelect = document.getElementById('form-category');
        if (catSelect) {
            catSelect.addEventListener('change', () => {
                if (!editingProduct) {
                    const codeInput = document.getElementById('form-code');
                    if (codeInput) codeInput.value = suggestNextCode(catSelect.value);
                }
            });
        }

        // Name input in Add form: auto-populate slug
        const nameInput = document.getElementById('form-name');
        const slugInput = document.getElementById('form-slug');
        if (nameInput && slugInput) {
            nameInput.addEventListener('input', () => {
                if (!isSlugManuallyEdited || !slugInput.value) {
                    slugInput.value = slugify(nameInput.value);
                }
            });
            slugInput.addEventListener('input', () => {
                isSlugManuallyEdited = true;
            });
        }

        // Search input
        const searchInput = document.getElementById('category-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderCategoryView();
            });
        }

        // Status filter select
        const statusSelect = document.getElementById('category-status-filter');
        if (statusSelect) {
            statusSelect.addEventListener('change', (e) => {
                statusFilter = e.target.value;
                renderCategoryView();
            });
        }

        // Image dropzone & file input
        const dropzone = document.getElementById('image-dropzone');
        const fileInput = document.getElementById('image-file-input');

        if (dropzone && fileInput) {
            dropzone.addEventListener('click', () => fileInput.click());

            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropzone.classList.add('dragover');
            });
            dropzone.addEventListener('dragleave', () => {
                dropzone.classList.remove('dragover');
            });
            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropzone.classList.remove('dragover');
                handleFilesAdded(e.dataTransfer.files);
            });

            fileInput.addEventListener('change', (e) => {
                handleFilesAdded(e.target.files);
                fileInput.value = '';
            });
        }
    }

    // Public API
    window.AdminProducts = {
        init() {
            initEvents();
            handleHashChange();
            loadProducts();
        },
        loadProducts,
        openAddModal,
        openEditModal,
        suggestNextCode
    };

})(window);
