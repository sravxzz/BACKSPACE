const defaultProducts = [
    // --- MATTRESSES (Existing) ---
    {
        id: 1, name: 'Smart Ortho Bed / Comfort Foam', tagline: 'Everyday Comfort', description: 'High-density foam mattress.', category: 'Mattresses', subcategory: 'Ortho Range', material: 'High-Density Foam', firmness: 'Medium Firm', warranty: '5 Years', image: './public/images/products/p01_ortho_support.jpg', images: ['./public/images/products/p01_ortho_support.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['6 inch'], prices: { 'Single': { price: 8999, mrp: 12999 }, 'Double': { price: 10999, mrp: 14999 }, 'Queen': { price: 11999, mrp: 16999 }, 'King': { price: 13999, mrp: 19999 } }, discount: '30% OFF', offer: 'NEW', stock: 20, sku: 'BS-CF-001', featured: true, cooling: 'Standard', support: 'Contouring', reviews: [{ id: 1, name: 'Rahul S.', rating: 5, text: '(Demo Review) Excellent comfort.' }]
    },
    {
        id: 2, name: 'Smart Ortho Pro / Premium Latex', tagline: 'Natural Luxury', description: 'Ultimate luxury with natural latex.', category: 'Mattresses', subcategory: 'Luxury Range', material: 'Natural Latex', firmness: 'Medium Firm', warranty: '7 Years', image: './public/images/products/p02_ortho_comfort.jpg', images: ['./public/images/products/p02_ortho_comfort.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Queen', 'King'], thicknesses: ['6 inch'], prices: { 'Single': { price: 14999, mrp: 19999 }, 'Queen': { price: 21999, mrp: 28999 }, 'King': { price: 24999, mrp: 32999 } }, discount: '25% OFF', offer: 'BEST SELLER', stock: 10, sku: 'BS-PL-002', featured: true, cooling: 'High', support: 'Responsive', reviews: []
    },
    {
        id: 3, name: 'Smart Ortho Pro Shotek', tagline: 'Spinal Alignment', description: 'Firm support for back pain relief.', category: 'Mattresses', subcategory: 'Ortho Range', material: 'Support Foam', firmness: 'Firm', warranty: '5 Years', image: './public/images/products/p03_ortho_hybrid.jpg', images: ['./public/images/products/p03_ortho_hybrid.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['6 inch'], prices: { 'Single': { price: 11999, mrp: 15999 } }, discount: '25% OFF', offer: 'COOLEST', stock: 15, sku: 'BS-OS-003', featured: true, cooling: 'Standard', support: 'Firm Orthopedic', reviews: []
    },
    {
        id: 4, name: 'Smart Ortho Royal / Cloud Foam', tagline: 'Zero Gravity', description: 'Plush memory foam.', category: 'Mattresses', subcategory: 'Ultra Luxury Range', material: 'Memory Foam', firmness: 'Medium Soft', warranty: '5 Years', images: ['./public/images/mattresses/cloud-memory-foam/main.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['6 inch'], prices: { 'Single': { price: 12999, mrp: 17999 } }, discount: '27% OFF', offer: 'TOP RATED', stock: 25, sku: 'BS-CM-004', featured: true, cooling: 'Medium', support: 'Plush Contouring', reviews: []
    },
    
    // --- ELITE SOFA ---
    {
        id: 101, name: 'BROCKWELL SOFA', tagline: 'Modern Elegance', description: 'Premium 3-seater sofa with luxurious fabric and comfort foam seating.', category: 'Elite Sofa', subcategory: '3 Seater', material: 'Premium Fabric + Foam', firmness: 'Medium', warranty: '3 Years', images: ['./public/images/assets/texture.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['3 Seater', '2 Seater'], thicknesses: ['Standard'], prices: { '3 Seater': { price: 24999, mrp: 32999 }, '2 Seater': { price: 18999, mrp: 24999 } }, discount: '24% OFF', offer: 'NEW', stock: 5, sku: 'BS-SF-001', featured: true, cooling: 'N/A', support: 'Lounge', reviews: []
    },
    {
        id: 102, name: 'SETTLE SOFA', tagline: 'Cozy Living', description: 'Minimalist sofa designed for modern Indian homes.', category: 'Elite Sofa', subcategory: 'L-Shape', material: 'Velvet + Foam', firmness: 'Medium Soft', warranty: '3 Years', images: ['./public/images/assets/hero.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['L-Shape'], thicknesses: ['Standard'], prices: { 'L-Shape': { price: 34999, mrp: 45999 } }, discount: '23% OFF', offer: 'PREMIUM', stock: 3, sku: 'BS-SF-002', featured: false, cooling: 'N/A', support: 'Lounge', reviews: []
    },
    
    // --- RECLINER SOFA ---
    {
        id: 200, name: 'MILANO RECLINER', tagline: 'Ultimate Relaxation', description: 'Motorized recliner sofa with premium leatherette.', category: 'Recliner Sofa', subcategory: 'Motorized', material: 'Leatherette', firmness: 'Medium Soft', warranty: '5 Years', images: ['./public/images/assets/texture.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['1 Seater', '2 Seater'], thicknesses: ['Standard'], prices: { '1 Seater': { price: 19999, mrp: 25999 }, '2 Seater': { price: 38999, mrp: 49999 } }, discount: '23% OFF', offer: 'BEST SELLER', stock: 10, sku: 'BS-RS-001', featured: true, cooling: 'N/A', support: 'Ergonomic', reviews: []
    },

    // --- BEDS COLLECTION (Row 1: 001-003, Row 2: 004-006, Row 3: 007-009) ---
    {
        id: 201, name: 'Upholstered Platform Bed', tagline: 'Scandinavian Serenity', description: 'Minimalist upholstered platform bed featuring clean lines, premium woven fabric, and reinforced acoustic slatted base.', category: 'Beds', subcategory: 'Platform Beds', material: 'Woven Fabric + Timber', firmness: 'Premium Fabric', warranty: '10 Years', image: './public/images/beds/upholstered_platform_bed.jpg', images: ['./public/images/beds/upholstered_platform_bed.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Queen', 'King'], thicknesses: ['12 inch', '14 inch'], prices: { 'Single': { price: 24990, mrp: 34990 }, 'Queen': { price: 29990, mrp: 39990 }, 'King': { price: 35990, mrp: 45990 } }, discount: '25% OFF', offer: 'BEST SELLER', stock: 18, sku: 'BKPBD001', featured: true, reviews: []
    },
    {
        id: 202, name: 'Floor Divan Storage Bed', tagline: 'Seamless Organization', description: 'Functional floor divan bed equipped with spacious pull-out storage drawers and seamless upholstered surround.', category: 'Beds', subcategory: 'Storage Beds', material: 'Linen + Solid Wood', firmness: 'Storage Divan', warranty: '10 Years', image: './public/images/beds/floor_divan_storage_bed.jpg', images: ['./public/images/beds/floor_divan_storage_bed.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Single': { price: 28990, mrp: 37990 }, 'Queen': { price: 34990, mrp: 44990 }, 'King': { price: 39990, mrp: 51990 } }, discount: '22% OFF', offer: 'POPULAR', stock: 15, sku: 'BKPBD002', featured: true, reviews: []
    },
    {
        id: 203, name: 'Horizontal Channel Headboard Bed', tagline: 'Architectural Comfort', description: 'Statement bed frame showcasing an opulent horizontal channel-tufted headboard in tailored architectural grey fabric.', category: 'Beds', subcategory: 'Headboard Beds', material: 'Architectural Grey Fabric', firmness: 'Cushioned Headboard', warranty: '10 Years', image: './public/images/beds/horizontal_channel_headboard_bed.jpg', images: ['./public/images/beds/horizontal_channel_headboard_bed.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch', '16 inch'], prices: { 'Queen': { price: 32990, mrp: 42990 }, 'King': { price: 38990, mrp: 48990 } }, discount: '23% OFF', offer: 'FEATURED', stock: 12, sku: 'BKPBD003', featured: true, reviews: []
    },
    {
        id: 205, name: 'Diamond Tufted Headboard Bed', tagline: 'Plush Luxury', description: 'Luxurious handcrafted diamond button-tufted headboard bed frame.', category: 'Beds', subcategory: 'Tufted Beds', material: 'Linen Weave + Hardwood', firmness: 'Plush Tufted', warranty: '10 Years', image: './public/images/beds/bed-004.jpg', images: ['./public/images/beds/bed-004.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Single': { price: 29990, mrp: 39990 }, 'Queen': { price: 36990, mrp: 48990 }, 'King': { price: 42990, mrp: 54990 } }, discount: '24% OFF', offer: 'NEW', stock: 15, sku: 'BKPBD004', featured: true, reviews: []
    },
    {
        id: 206, name: 'Chesterfield Rolled Headboard Bed', tagline: 'British Elegance', description: 'Magnificent Chesterfield-style bed frame with iconic scroll rolled headboard.', category: 'Beds', subcategory: 'Chesterfield Beds', material: 'Tailored Linen + Steel', firmness: 'Rolled Chesterfield', warranty: '10 Years', image: './public/images/beds/bed-005.jpg', images: ['./public/images/beds/bed-005.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['16 inch'], prices: { 'Queen': { price: 39990, mrp: 52990 }, 'King': { price: 45990, mrp: 59990 } }, discount: '25% OFF', offer: 'PREMIUM', stock: 12, sku: 'BKPBD005', featured: true, reviews: []
    },
    {
        id: 207, name: 'Polished Wood Frame Bed', tagline: 'Organic Timber', description: 'Classic polished natural hardwood bed frame with warm organic wood grains.', category: 'Beds', subcategory: 'Wooden Beds', material: 'Seasoned Sheesham Wood', firmness: 'Natural Wood', warranty: '10 Years', image: './public/images/beds/bed-006.jpg', images: ['./public/images/beds/bed-006.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['12 inch'], prices: { 'Single': { price: 21990, mrp: 29990 }, 'Queen': { price: 27990, mrp: 36990 }, 'King': { price: 32990, mrp: 42990 } }, discount: '24% OFF', offer: 'BEST SELLER', stock: 20, sku: 'BKPBD006', featured: true, reviews: []
    },
    {
        id: 208, name: 'Hydraulic Storage Bed', tagline: 'Max Storage', description: 'Effortless gas-lift hydraulic storage bed frame offering massive under-mattress storage capacity.', category: 'Beds', subcategory: 'Storage Beds', material: 'Textured Linen + Steel Frame', firmness: 'Hydraulic Lift', warranty: '10 Years', image: './public/images/beds/bed-007.jpg', images: ['./public/images/beds/bed-007.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Queen': { price: 35990, mrp: 46990 }, 'King': { price: 41990, mrp: 53990 } }, discount: '23% OFF', offer: 'BEST SELLER', stock: 10, sku: 'BKPBD007', featured: true, reviews: []
    },
    {
        id: 209, name: 'Front Drawer Storage Bed', tagline: 'Easy Access', description: 'Premium upholstered platform bed with dual integrated front pull-out storage drawers on smooth silent glides.', category: 'Beds', subcategory: 'Storage Beds', material: 'Linen Weave + Hardwood', firmness: 'Drawer Storage', warranty: '10 Years', image: './public/images/beds/bed-008.jpg', images: ['./public/images/beds/bed-008.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Queen': { price: 32990, mrp: 42990 }, 'King': { price: 38990, mrp: 49990 } }, discount: '23% OFF', offer: 'NEW', stock: 14, sku: 'BKPBD008', featured: true, reviews: []
    },
    {
        id: 210, name: 'Upholstered Wingback Bed', tagline: 'Grand Hotel Style', description: 'Grand hotel-style upholstered bed featuring architectural sheltering wingback headboard and luxurious cream fabric.', category: 'Beds', subcategory: 'Wingback Beds', material: 'Tailored Linen + Solid Frame', firmness: 'Sheltering Wingback', warranty: '10 Years', image: './public/images/beds/bed-009.jpg', images: ['./public/images/beds/bed-009.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['16 inch'], prices: { 'Queen': { price: 38990, mrp: 49990 }, 'King': { price: 44990, mrp: 57990 } }, discount: '22% OFF', offer: 'PREMIUM', stock: 8, sku: 'BKPBD009', featured: true, reviews: []
    },

    // --- PILLOWS ---
    {
        id: 301, name: 'Cooling Memory Foam Pillow', tagline: 'Neck Support', description: 'Contoured memory foam pillow with cooling gel layer.', category: 'Pillows', subcategory: 'Memory Foam', material: 'Memory Foam + Gel', firmness: 'Medium', warranty: '1 Year', images: ['./public/images/assets/hero.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Standard'], thicknesses: ['5 inch'], prices: { 'Standard': { price: 1499, mrp: 2499 } }, discount: '40% OFF', offer: 'TOP RATED', stock: 50, sku: 'BS-PL-001', featured: true, cooling: 'High', support: 'Neck Alignment', reviews: []
    },
    
    // --- BEDDING ---
    {
        id: 401, name: 'SUNRAYS THERMO FITTED SHEETS', tagline: 'Premium Cotton', description: 'Breathable, ultra-soft fitted sheets for all mattress sizes.', category: 'Bedding', subcategory: 'Fitted Sheets', material: '100% Cotton', firmness: 'N/A', warranty: 'N/A', images: ['./public/images/assets/texture.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['Fits up to 10 inch'], prices: { 'Single': { price: 999, mrp: 1499 }, 'Queen': { price: 1499, mrp: 2199 }, 'King': { price: 1799, mrp: 2499 } }, discount: '30% OFF', offer: 'BEST SELLER', stock: 100, sku: 'BS-BD-001', featured: true, cooling: 'High', support: 'N/A', reviews: []
    }
];

function appData() {
    return {
        // Core State
        currentPage: 'home',
        currentProductData: null, // 'home', 'shop', 'product', 'compare', 'finder', 'guide', 'bulk', 'about', 'admin', 'profile', 'orders', 'track', 'wishlist'
        currentCategoryFilter: 'Mattresses', // Which category to show on the shop page
        
        cartOpen: false,
        mobileMenuOpen: false,
        hamburgerOpen: false,
        searchOpen: false,
        callbackOpen: false,
        isScrolled: false,
        searchQuery: '',
        activeMegaMenu: null,
        
        // Data
        products: [],
        allProducts: [],
        cart: [],
        wishlist: [],
        compareList: [],
        
        // Shop Page State
        selectedFirmness: 'All',
        selectedSizeFilter: 'All',
        sortBy: 'featured',
        
        // Product Details State
        selectedProduct: null,
        selectedSize: '',
        selectedThickness: '',
        quantity: 1,
        activeImageIndex: 0,
        priceDisplay: 0,
        mrpDisplay: 0,
        
        // Finder State
        finderStep: 1,
        finderAnswers: { size: '', firmness: '', material: '', budget: 0 },
        finderResults: [],
        
        // Forms
        callbackForm: { phone: '', pincode: '' },
        trackForm: { orderId: '', phone: '' },
        
        // Notifications
        toast: { show: false, message: '' },
        
        storeDetails: {
            address: 'Details Coming Soon',
            phone: '6300946652',
            hours: '10 AM - 8 PM',
            city: 'Khammam'
        },
        
        init() {
            if (typeof window !== 'undefined' && window.BACKSPACE_CATALOGUE && window.BACKSPACE_CATALOGUE.length > 0) {
                this.allProducts = window.BACKSPACE_CATALOGUE;
                this.products = window.BACKSPACE_CATALOGUE;
            } else {
                this.products = [...defaultProducts];
                this.allProducts = [...defaultProducts];
            }
            this.products.forEach(p => {
                if (!p.image && p.images) {
                    p.image = Array.isArray(p.images) ? p.images[0] : (p.images.main || '');
                }
            });
            localStorage.setItem('backspaceProducts', JSON.stringify(this.products));
            
            const storedCart = localStorage.getItem('backspaceCart');
            if(storedCart) this.cart = JSON.parse(storedCart);
            
            const storedCompare = localStorage.getItem('backspaceCompare');
            if(storedCompare) this.compareList = JSON.parse(storedCompare);

            const storedWishlist = localStorage.getItem('backspaceWishlist');
            if(storedWishlist) this.wishlist = JSON.parse(storedWishlist);
            
            window.addEventListener('scroll', () => {
                this.isScrolled = window.scrollY > 20;
                this.checkScrollAnimations();
            });
            setTimeout(() => this.checkScrollAnimations(), 100);
        },

        checkScrollAnimations() {
            const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) el.classList.add('revealed');
            });
        },

        goToPage(page, category = null) {
            this.currentPage = page;
            if(category) this.currentCategoryFilter = category;
            this.mobileMenuOpen = false;
            this.hamburgerOpen = false;
            this.searchOpen = false;
            this.activeMegaMenu = null;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => this.checkScrollAnimations(), 100);
        },

        openProduct(product) {
            this.selectedProduct = product;
            this.selectedSize = product.sizes[0] || '';
            this.selectedThickness = product.thicknesses[0] || '';
            this.quantity = 1;
            this.activeImageIndex = 0;
            this.updatePriceDisplay();
            this.goToPage('product');
        },

        get filteredProducts() {
            let result = this.products.filter(p => {
                const matchesSearch = p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                                      p.description.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesCat = this.currentCategoryFilter === 'All' || p.category === this.currentCategoryFilter || p.subcategory === this.currentCategoryFilter;
                const matchesFirm = this.selectedFirmness === 'All' || p.firmness.includes(this.selectedFirmness);
                const matchesSize = this.selectedSizeFilter === 'All' || p.sizes.includes(this.selectedSizeFilter);
                return matchesSearch && matchesCat && matchesFirm && matchesSize;
            });
            
            if(this.sortBy === 'low') result.sort((a,b) => a.prices[a.sizes[0]].price - b.prices[b.sizes[0]].price);
            else if (this.sortBy === 'high') result.sort((a,b) => b.prices[b.sizes[0]].price - a.prices[a.sizes[0]].price);
            else if (this.sortBy === 'newest') result.sort((a,b) => b.id - a.id);
            else result.sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            return result;
        },

        get relatedProducts() {
            if(!this.selectedProduct) return [];
            return this.products.filter(p => p.category === this.selectedProduct.category && p.id !== this.selectedProduct.id).slice(0, 4);
        },

        calculatePrices() {
            if (!this.selectedProduct) return { price: 0, mrp: 0 };
            const sizeData = this.selectedProduct.prices[this.selectedSize];
            if (sizeData) {
                let base = sizeData.price;
                let mrp = sizeData.mrp;
                if (this.selectedProduct.thicknesses.length > 1 && this.selectedThickness !== this.selectedProduct.thicknesses[0]) {
                    base += 2000; mrp += 2500;
                }
                return { price: base, mrp: mrp };
            }
            return { price: 9999, mrp: 12999 };
        },

        updatePriceDisplay() {
            const prices = this.calculatePrices();
            const priceEl = document.getElementById('price-display');
            if(priceEl) {
                priceEl.classList.add('opacity-0', '-translate-y-2');
                setTimeout(() => {
                    this.priceDisplay = prices.price;
                    this.mrpDisplay = prices.mrp;
                    priceEl.classList.remove('opacity-0', '-translate-y-2');
                }, 200);
            } else {
                this.priceDisplay = prices.price;
                this.mrpDisplay = prices.mrp;
            }
        },

        changeSize(size) { this.selectedSize = size; this.updatePriceDisplay(); },
        changeThickness(thick) { this.selectedThickness = thick; this.updatePriceDisplay(); },
        formatPrice(price) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price); },

        showToast(message) {
            this.toast.message = message;
            this.toast.show = true;
            setTimeout(() => { this.toast.show = false; }, 3000);
        },

        // --- CART ---
        addToCart() {
            if (this.selectedProduct.stock <= 0) return this.showToast('Out of Stock');
            const { price } = this.calculatePrices();
            const existing = this.cart.find(i => i.productId === this.selectedProduct.id && i.size === this.selectedSize && i.thickness === this.selectedThickness);
            if (existing) existing.quantity += this.quantity;
            else {
                this.cart.push({
                    id: Date.now(), productId: this.selectedProduct.id, name: this.selectedProduct.name,
                    size: this.selectedSize, thickness: this.selectedThickness, price: price, quantity: this.quantity, image: this.selectedProduct.images[0]
                });
            }
            this.saveCart();
            this.showToast('✓ Added to Cart');
        },
        removeFromCart(id) { this.cart = this.cart.filter(i => i.id !== id); this.saveCart(); },
        updateCartQuantity(id, delta) {
            const item = this.cart.find(i => i.id === id);
            if (item) { item.quantity += delta; if (item.quantity <= 0) this.removeFromCart(id); else this.saveCart(); }
        },
        saveCart() { localStorage.setItem('backspaceCart', JSON.stringify(this.cart)); },
        get cartTotal() { return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0); },

        // --- WISHLIST ---
        toggleWishlist(product) {
            const idx = this.wishlist.findIndex(p => p.id === product.id);
            if(idx > -1) { this.wishlist.splice(idx, 1); this.showToast('Removed from Wishlist'); }
            else { this.wishlist.push(product); this.showToast('✓ Added to Wishlist'); }
            localStorage.setItem('backspaceWishlist', JSON.stringify(this.wishlist));
        },
        isInWishlist(id) { return this.wishlist.some(p => p.id === id); },

        // --- COMPARE ---
        toggleCompare(product) {
            const idx = this.compareList.findIndex(p => p.id === product.id);
            if(idx > -1) { this.compareList.splice(idx, 1); this.showToast('Removed from comparison'); }
            else {
                if(this.compareList.length >= 4) return this.showToast('You can compare up to 4 mattresses');
                this.compareList.push(product); this.showToast('Added to comparison');
            }
            localStorage.setItem('backspaceCompare', JSON.stringify(this.compareList));
        },
        isInCompare(id) { return this.compareList.some(p => p.id === id); },

        // --- EXTERNAL COMMS ---
        callSupport() { window.location.href = "tel:6300946652"; },
        waSupport() { window.open(`https://wa.me/916300946652?text=${encodeURIComponent('Hello Backspace Go, I would like to know more about your products.')}`, '_blank'); },
        
        checkoutWhatsApp() {
            if(this.cart.length === 0) return;
            let text = `Hello Backspace Go,\n\nI would like to place an order:\n\n`;
            this.cart.forEach((item, i) => { text += `${i+1}. ${item.name}\n   Size: ${item.size}\n   Thickness: ${item.thickness}\n   Quantity: ${item.quantity}\n   Price: ₹${item.price} each\n\n`; });
            text += `Total: ₹${this.cartTotal}\n\nPlease confirm availability and ordering details.`;
            window.open(`https://wa.me/916300946652?text=${encodeURIComponent(text)}`, '_blank');
        },
        buyNow() {
            if (this.selectedProduct.stock <= 0) return this.showToast('Out of Stock');
            const { price } = this.calculatePrices();
            let text = `Hello Backspace Go,\n\nI would like to place an order for:\n\nProduct: ${this.selectedProduct.name}\nSize: ${this.selectedSize}\nThickness: ${this.selectedThickness}\nQuantity: ${this.quantity}\nPrice: ₹${price}\n\nPlease confirm availability.`;
            window.open(`https://wa.me/916300946652?text=${encodeURIComponent(text)}`, '_blank');
        },
        submitBulkOrder() {
            window.open(`https://wa.me/916300946652?text=${encodeURIComponent('Hello Backspace Go,\n\nI have a Bulk Order inquiry.\n\nName: \nOrganization: \nLocation: \nQuantity: \nProduct Category: \nRequirements: \n\nPlease let me know the best pricing.')}`, '_blank');
        },

        // --- FORMS ---
        submitCallback() {
            if(!this.callbackForm.phone) return this.showToast('Please enter your phone number.');
            this.callbackOpen = false;
            this.showToast('✓ Callback requested! We will call you soon.');
            this.callbackForm = { phone: '', pincode: '' };
        },
        
        // --- FINDER ---
        runFinder() {
            this.finderResults = this.products.filter(p => p.category === 'Mattresses');
            this.finderStep = 5;
        },
        resetFinder() {
            this.finderStep = 1;
            this.finderAnswers = { size: '', firmness: '', material: '', budget: 0 };
            this.finderResults = [];
        }
    }
}
