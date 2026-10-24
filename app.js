
function isBedProduct(p) {
    if (!p) return false;
    return p.category === 'Beds' || p.mainCategory === 'Beds' || (p.code && (p.code.startsWith('BSP-BED') || p.code.startsWith('BKPBD')));
}
window.isBedProduct = isBedProduct;

function isProtectorProduct(p) {
    if (!p) return false;
    return p.category === 'Protectors' || p.mainCategory === 'Protectors' || (p.code && (p.code.startsWith('BSP-PRO') || p.code.startsWith('BKPPR')));
}
window.isProtectorProduct = isProtectorProduct;

function isPillowProduct(p) {
    if (!p) return false;
    return p.category === 'PILLOWS' || p.category === 'Pillows' || p.mainCategory === 'Pillows' || (p.code && (p.code.startsWith('BSP-PIL') || p.code.startsWith('BKPPL'))) || (p.name && p.name.toLowerCase().includes('pillow'));
}
window.isPillowProduct = isPillowProduct;

function isMattressProduct(p) {
    if (!p) return false;
    if (isBedProduct(p) || isProtectorProduct(p) || isPillowProduct(p)) return false;
    return p.category === 'Mattresses' || p.mainCategory === 'Mattresses' || (p.code && (p.code.startsWith('BSP-MAT') || p.code.startsWith('BKPMT'))) || (p.id >= 1 && p.id <= 15);
}
window.isMattressProduct = isMattressProduct;

const defaultProducts = [
    // --- MATTRESSES (3 Signature Products) ---
    {
        id: 1,
        code: 'BSP-MAT-001', oldCode: 'BKPMT001',
        collection: 'Premium Mattress',
        material: 'BodyIQ Memory Foam',
        footer: 'Customization available',
        name: 'BACKSPACE Original – 3 Layered BodyIQ Orthopedic Memory Foam Mattress',
        tagline: 'BodyIQ Orthopedic Comfort',
        description: 'Original 3-layered orthopedic memory foam mattress with adaptive BodyIQ contouring for healthy spinal alignment and pressure point relief.',
        category: 'Mattresses',
        subcategory: 'Memory Foam',
        material: 'BodyIQ Memory Foam',
        firmness: 'Medium Firm',
        warranty: '10 Years Warranty + 100 Night Trial',
        badge: 'New Launch',
        discount: '51% OFF',
        price: 5638,
        originalPrice: 11599,
        mrp: 11599,
        feature1: 'Memory Foam',
        feature2: 'Orthopedic Support + High comfort',
        feature1Icon: 'fa-solid fa-cloud',
        feature2Icon: 'fa-solid fa-shield-heart',
        image: './public/images/mattresses/cloud-memory-foam/main.jpg',
        images: ['./public/images/mattresses/cloud-memory-foam/main.jpg', './public/images/mattresses/cloud-memory-foam/detail.jpg', './public/images/mattresses/cloud-memory-foam/thickness.jpg', './public/images/mattresses/cloud-memory-foam/angle.jpg'],
        sizes: ['Single', 'Double', 'Queen', 'King'],
        thicknesses: ['6 inch', '8 inch', '10 inch'],
        prices: {
            'Single': { price: 5638, mrp: 11599 },
            'Double': { price: 8199, mrp: 16732 },
            'Queen': { price: 9299, mrp: 18977 },
            'King': { price: 10499, mrp: 21426 }
        },
        offer: 'NEW LAUNCH',
        stock: 25,
        sku: 'BS-MAT-001',
        featured: true,
        cooling: 'High',
        support: 'Orthopedic Contouring',
        reviews: []
    },
    {
        id: 2,
        code: 'BSP-MAT-002', oldCode: 'BKPMT002',
        collection: 'Premium Mattress',
        footer: 'Customization available',
        name: 'BACKSPACE Sense – BodyIQ Orthopedic Memory Foam Mattress with Cooling Tech',
        tagline: 'Cooling Orthopedic Alignment',
        description: 'Sense orthopedic memory foam mattress featuring active cooling technology and BodyIQ dynamic pressure-relieving contours.',
        category: 'Mattresses',
        subcategory: 'Cooling Gel',
        material: 'BodyIQ Memory Foam',
        firmness: 'Medium Firm',
        warranty: '10 Years Warranty + 100 Night Trial',
        badge: 'New Launch',
        discount: '55% OFF',
        price: 6429,
        originalPrice: 14299,
        mrp: 14299,
        feature1: 'Memory Foam with Cooling Tech',
        feature2: 'Ortho Support + Spine alignment',
        feature1Icon: 'fa-solid fa-snowflake',
        feature2Icon: 'fa-solid fa-bone',
        image: './public/images/mattresses/cool-gel/main.jpg',
        images: ['./public/images/mattresses/cool-gel/main.jpg', './public/images/mattresses/cool-gel/detail.jpg', './public/images/mattresses/cool-gel/thickness.jpg', './public/images/mattresses/cool-gel/angle.jpg'],
        sizes: ['Single', 'Double', 'Queen', 'King'],
        thicknesses: ['6 inch', '8 inch', '10 inch'],
        prices: {
            'Single': { price: 6429, mrp: 14299 },
            'Double': { price: 9449, mrp: 20999 },
            'Queen': { price: 10799, mrp: 23999 },
            'King': { price: 12149, mrp: 26999 }
        },
        offer: 'NEW LAUNCH',
        stock: 20,
        sku: 'BS-MAT-002',
        featured: true,
        cooling: 'High',
        support: 'Ortho Spine Alignment',
        reviews: []
    },
    {
        id: 3,
        code: 'BSP-MAT-003', oldCode: 'BKPMT003',
        collection: 'Premium Mattress',
        footer: 'Customization available',
        name: 'BACKSPACE Flip – Dual Sided Foam Mattress with Firm & Soft Sides – Grey',
        tagline: 'Dual-Sided Reversible Comfort',
        description: 'Dual-sided flippable mattress with high-density support foam, allowing you to choose between firm orthopedic support or soft cushioning.',
        category: 'Mattresses',
        subcategory: 'Orthopedic',
        material: 'Foam',
        firmness: 'Dual Sided (Firm / Soft)',
        warranty: '5 Years Warranty',
        badge: 'New Launch',
        discount: '37% OFF',
        price: 4091,
        originalPrice: 6499,
        mrp: 6499,
        feature1: 'High-density support foam',
        feature2: 'Firm support or soft comfort in one',
        feature1Icon: 'fa-solid fa-cubes-stacked',
        feature2Icon: 'fa-solid fa-repeat',
        image: './public/images/mattresses/comfort-foam/main.jpg',
        images: ['./public/images/mattresses/comfort-foam/main.jpg', './public/images/mattresses/comfort-foam/detail.jpg', './public/images/mattresses/comfort-foam/thickness.jpg', './public/images/mattresses/comfort-foam/angle.jpg'],
        sizes: ['Single', 'Double', 'Queen', 'King'],
        thicknesses: ['5 inch', '6 inch', '8 inch'],
        prices: {
            'Single': { price: 4091, mrp: 6499 },
            'Double': { price: 5984, mrp: 9499 },
            'Queen': { price: 6929, mrp: 10999 },
            'King': { price: 7874, mrp: 12499 }
        },
        offer: 'NEW LAUNCH',
        stock: 30,
        sku: 'BS-MAT-003',
        featured: true,
        cooling: 'Standard',
        support: 'Dual Sided Support',
        reviews: []
    },
{
    "id": 4,
    "slug": "laxe",
    "code": "BSP-MAT-004", "oldCode": "BKPMT004",
        "collection": "Premium Mattress",
    "name": "Laxe",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Foam",
    "material": "Foam",
    "desc": "Balanced foam mattress for everyday comfort",
    "shortDescription": "Balanced foam mattress for everyday comfort",
    "description": "Balanced foam mattress for everyday comfort",
    "image": "./public/images/mattresses/mattress-04.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-04.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 5,
    "slug": "boing",
    "code": "BSP-MAT-005", "oldCode": "BKPMT005",
        "collection": "Premium Mattress",
    "name": "Boing",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Pocket Springs",
    "material": "Pocket Springs",
    "desc": "Bouncy pocket spring mattress with responsive support",
    "shortDescription": "Bouncy pocket spring mattress with responsive support",
    "description": "Bouncy pocket spring mattress with responsive support",
    "image": "./public/images/mattresses/mattress-05.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-05.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 6,
    "slug": "sense-ortho-ultra",
    "code": "BSP-MAT-006", "oldCode": "BKPMT006",
        "collection": "Premium Mattress",
    "name": "Sense Ortho Ultra",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "BodyIQ Memory Foam",
    "material": "BodyIQ Memory Foam",
    "desc": "Orthopedic memory foam with enhanced spine support",
    "shortDescription": "Orthopedic memory foam with enhanced spine support",
    "description": "Orthopedic memory foam with enhanced spine support",
    "image": "./public/images/mattresses/mattress-06.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-06.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 7,
    "slug": "laxe-nature-ultra",
    "code": "BSP-MAT-007", "oldCode": "BKPMT007",
        "collection": "Premium Mattress",
    "name": "Laxe Nature Ultra",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Natural Latex",
    "material": "Natural Latex",
    "desc": "Natural latex comfort with a breathable feel",
    "shortDescription": "Natural latex comfort with a breathable feel",
    "description": "Natural latex comfort with a breathable feel",
    "image": "./public/images/mattresses/mattress-07.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-07.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 8,
    "slug": "technic",
    "code": "BSP-MAT-008", "oldCode": "BKPMT008",
        "collection": "Premium Mattress",
    "name": "Technic",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "6D Hexagon Grid Foam",
    "material": "6D Hexagon Grid Foam",
    "desc": "Grid foam structure for airflow and even support",
    "shortDescription": "Grid foam structure for airflow and even support",
    "description": "Grid foam structure for airflow and even support",
    "image": "./public/images/mattresses/mattress-08.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-08.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 9,
    "slug": "technic-hybrid",
    "code": "BSP-MAT-009", "oldCode": "BKPMT009",
        "collection": "Premium Mattress",
    "name": "Technic Hybrid",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Pocket Springs + Foam",
    "material": "Pocket Springs + Foam",
    "desc": "Hybrid of pocket springs and comfort foam",
    "shortDescription": "Hybrid of pocket springs and comfort foam",
    "description": "Hybrid of pocket springs and comfort foam",
    "image": "./public/images/mattresses/mattress-09.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-09.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 10,
    "slug": "napster-mini",
    "code": "BSP-MAT-010", "oldCode": "BKPMT010",
        "collection": "Premium Mattress",
    "name": "Napster Mini",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Foam",
    "material": "Foam",
    "desc": "Compact foam mattress for smaller spaces",
    "shortDescription": "Compact foam mattress for smaller spaces",
    "description": "Compact foam mattress for smaller spaces",
    "image": "./public/images/mattresses/mattress-10.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-10.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 11,
    "slug": "luna-euro-top",
    "code": "BSP-MAT-011", "oldCode": "BKPMT011",
        "collection": "Luxurious Mattress",
    "name": "Luna Euro Top",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Pocket Springs",
    "material": "Pocket Springs",
    "desc": "Luxurious pocket spring mattress with a plush euro top",
    "shortDescription": "Luxurious pocket spring mattress with a plush euro top",
    "description": "Luxurious pocket spring mattress with a plush euro top",
    "image": "./public/images/mattresses/mattress-11.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-11.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 12,
    "slug": "luna",
    "code": "BSP-MAT-012", "oldCode": "BKPMT012",
        "collection": "Luxurious Mattress",
    "name": "Luna",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Pocket Springs",
    "material": "Pocket Springs",
    "desc": "Luxurious pocket spring mattress for premium comfort",
    "shortDescription": "Luxurious pocket spring mattress for premium comfort",
    "description": "Luxurious pocket spring mattress for premium comfort",
    "image": "./public/images/mattresses/mattress-12.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-12.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 13,
    "slug": "coco",
    "code": "BSP-MAT-013", "oldCode": "BKPMT013",
        "collection": "Luxurious Mattress",
    "name": "Coco",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Rubberised Coir",
    "material": "Rubberised Coir",
    "desc": "Firm coir mattress for strong back support",
    "shortDescription": "Firm coir mattress for strong back support",
    "description": "Firm coir mattress for strong back support",
    "image": "./public/images/mattresses/mattress-13.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-13.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 14,
    "slug": "nature-pro",
    "code": "BSP-MAT-014", "oldCode": "BKPMT014",
        "collection": "Luxurious Mattress",
    "name": "Nature Pro",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Natural Latex",
    "material": "Natural Latex",
    "desc": "Natural latex mattress with a supportive, cool feel",
    "shortDescription": "Natural latex mattress with a supportive, cool feel",
    "description": "Natural latex mattress with a supportive, cool feel",
    "image": "./public/images/mattresses/mattress-14.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-14.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
{
    "id": 15,
    "slug": "prime",
    "code": "BSP-MAT-015", "oldCode": "BKPMT015",
        "collection": "Luxurious Mattress",
    "name": "Prime",
    "category": "Mattresses",
    "mainCategory": "Mattresses",
    "subCategory": "Foam (CertipurUS certified)",
    "material": "Foam (CertipurUS certified)",
    "desc": "Certified foam mattress with reliable comfort",
    "shortDescription": "Certified foam mattress with reliable comfort",
    "description": "Certified foam mattress with reliable comfort",
    "image": "./public/images/mattresses/mattress-15.jpg",
    "images": {
        "main": "./public/images/mattresses/mattress-15.jpg"
    },
    "sizes": [
        "Single",
        "Double",
        "Queen",
        "King"
    ],
    "height": 6,
    "heights": [
        6,
        8,
        10
    ],
    "customization": true,
    "footer": "Customization available",
    "price": null,
    "originalPrice": null,
    "mrp": null,
    "prices": null,
    "discount": null,
    "rating": null,
    "reviews": null
},
    
    // --- ELITE SOFA ---
    {
        id: 101, name: 'BACKSPACE BROCKWELL SOFA', tagline: 'Modern Elegance', description: 'Premium 3-seater sofa with luxurious fabric and comfort foam seating.', category: 'Elite Sofa', subcategory: '3 Seater', material: 'Premium Fabric + Foam', firmness: 'Medium', warranty: '3 Years', images: ['./public/images/assets/texture.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['3 Seater', '2 Seater'], thicknesses: ['Standard'], prices: { '3 Seater': { price: 24999, mrp: 32999 }, '2 Seater': { price: 18999, mrp: 24999 } }, discount: '24% OFF', offer: 'NEW', stock: 5, sku: 'BS-SF-001', featured: true, cooling: 'N/A', support: 'Lounge', reviews: []
    },
    {
        id: 102, name: 'BACKSPACE SETTLE SOFA', tagline: 'Cozy Living', description: 'Minimalist sofa designed for modern Indian homes.', category: 'Elite Sofa', subcategory: 'L-Shape', material: 'Velvet + Foam', firmness: 'Medium Soft', warranty: '3 Years', images: ['./public/images/assets/hero.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['L-Shape'], thicknesses: ['Standard'], prices: { 'L-Shape': { price: 34999, mrp: 45999 } }, discount: '23% OFF', offer: 'PREMIUM', stock: 3, sku: 'BS-SF-002', featured: false, cooling: 'N/A', support: 'Lounge', reviews: []
    },
    
    // --- RECLINER SOFA ---
    {
        id: 200, name: 'BACKSPACE MILANO RECLINER', tagline: 'Ultimate Relaxation', description: 'Motorized recliner sofa with premium leatherette.', category: 'Recliner Sofa', subcategory: 'Motorized', material: 'Leatherette', firmness: 'Medium Soft', warranty: '5 Years', images: ['./public/images/assets/texture.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['1 Seater', '2 Seater'], thicknesses: ['Standard'], prices: { '1 Seater': { price: 19999, mrp: 25999 }, '2 Seater': { price: 38999, mrp: 49999 } }, discount: '23% OFF', offer: 'BEST SELLER', stock: 10, sku: 'BS-RS-001', featured: true, cooling: 'N/A', support: 'Ergonomic', reviews: []
    },

    // --- BEDS COLLECTION (Row 1: 001-003, Row 2: 004-006, Row 3: 007-009) ---
    {
        id: 201, name: 'BACKSPACE Upholstered Platform Bed', tagline: 'Scandinavian Serenity', description: 'Minimalist upholstered platform bed featuring clean lines, premium woven fabric, and reinforced acoustic slatted base.', category: 'Beds', subcategory: 'Platform Beds', material: 'Woven Fabric + Timber', firmness: 'Premium Fabric', warranty: '10 Years', image: './public/images/beds/upholstered_platform_bed.jpg', images: ['./public/images/beds/upholstered_platform_bed.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Queen', 'King'], thicknesses: ['12 inch', '14 inch'], prices: { 'Single': { price: 24990, mrp: 34990 }, 'Queen': { price: 29990, mrp: 39990 }, 'King': { price: 35990, mrp: 45990 } }, discount: '25% OFF', offer: 'BEST SELLER', stock: 18, sku: 'BSP-BED-001', oldSku: 'BKPBD001', featured: true, reviews: []
    },
    {
        id: 202, name: 'BACKSPACE Floor Divan Storage Bed', tagline: 'Seamless Organization', description: 'Functional floor divan bed equipped with spacious pull-out storage drawers and seamless upholstered surround.', category: 'Beds', subcategory: 'Storage Beds', material: 'Linen + Solid Wood', firmness: 'Storage Divan', warranty: '10 Years', image: './public/images/beds/floor_divan_storage_bed.jpg', images: ['./public/images/beds/floor_divan_storage_bed.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Single': { price: 28990, mrp: 37990 }, 'Queen': { price: 34990, mrp: 44990 }, 'King': { price: 39990, mrp: 51990 } }, discount: '22% OFF', offer: 'POPULAR', stock: 15, sku: 'BSP-BED-002', oldSku: 'BKPBD002', featured: true, reviews: []
    },
    {
        id: 203, name: 'BACKSPACE Horizontal Channel Headboard Bed', tagline: 'Architectural Comfort', description: 'Statement bed frame showcasing an opulent horizontal channel-tufted headboard in tailored architectural grey fabric.', category: 'Beds', subcategory: 'Headboard Beds', material: 'Architectural Grey Fabric', firmness: 'Cushioned Headboard', warranty: '10 Years', image: './public/images/beds/horizontal_channel_headboard_bed.jpg', images: ['./public/images/beds/horizontal_channel_headboard_bed.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch', '16 inch'], prices: { 'Queen': { price: 32990, mrp: 42990 }, 'King': { price: 38990, mrp: 48990 } }, discount: '23% OFF', offer: 'FEATURED', stock: 12, sku: 'BSP-BED-003', oldSku: 'BKPBD003', featured: true, reviews: []
    },
    {
        id: 205, name: 'BACKSPACE Diamond Tufted Headboard Bed', tagline: 'Plush Luxury', description: 'Luxurious handcrafted diamond button-tufted headboard bed frame.', category: 'Beds', subcategory: 'Tufted Beds', material: 'Linen Weave + Hardwood', firmness: 'Plush Tufted', warranty: '10 Years', image: './public/images/beds/bed-004.jpg', images: ['./public/images/beds/bed-004.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Single': { price: 29990, mrp: 39990 }, 'Queen': { price: 36990, mrp: 48990 }, 'King': { price: 42990, mrp: 54990 } }, discount: '24% OFF', offer: 'NEW', stock: 15, sku: 'BSP-BED-004', oldSku: 'BKPBD004', featured: true, reviews: []
    },
    {
        id: 206, name: 'BACKSPACE Chesterfield Rolled Headboard Bed', tagline: 'British Elegance', description: 'Magnificent Chesterfield-style bed frame with iconic scroll rolled headboard.', category: 'Beds', subcategory: 'Chesterfield Beds', material: 'Tailored Linen + Steel', firmness: 'Rolled Chesterfield', warranty: '10 Years', image: './public/images/beds/bed-005.jpg', images: ['./public/images/beds/bed-005.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['16 inch'], prices: { 'Queen': { price: 39990, mrp: 52990 }, 'King': { price: 45990, mrp: 59990 } }, discount: '25% OFF', offer: 'PREMIUM', stock: 12, sku: 'BSP-BED-005', oldSku: 'BKPBD005', featured: true, reviews: []
    },
    {
        id: 207, name: 'BACKSPACE Polished Wood Frame Bed', tagline: 'Organic Timber', description: 'Classic polished natural hardwood bed frame with warm organic wood grains.', category: 'Beds', subcategory: 'Wooden Beds', material: 'Seasoned Sheesham Wood', firmness: 'Natural Wood', warranty: '10 Years', image: './public/images/beds/bed-006.jpg', images: ['./public/images/beds/bed-006.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['12 inch'], prices: { 'Single': { price: 21990, mrp: 29990 }, 'Queen': { price: 27990, mrp: 36990 }, 'King': { price: 32990, mrp: 42990 } }, discount: '24% OFF', offer: 'BEST SELLER', stock: 20, sku: 'BSP-BED-006', oldSku: 'BKPBD006', featured: true, reviews: []
    },
    {
        id: 208, name: 'BACKSPACE Hydraulic Storage Bed', tagline: 'Max Storage', description: 'Effortless gas-lift hydraulic storage bed frame offering massive under-mattress storage capacity.', category: 'Beds', subcategory: 'Storage Beds', material: 'Textured Linen + Steel Frame', firmness: 'Hydraulic Lift', warranty: '10 Years', image: './public/images/beds/bed-007.jpg', images: ['./public/images/beds/bed-007.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Queen': { price: 35990, mrp: 46990 }, 'King': { price: 41990, mrp: 53990 } }, discount: '23% OFF', offer: 'BEST SELLER', stock: 10, sku: 'BSP-BED-007', oldSku: 'BKPBD007', featured: true, reviews: []
    },
    {
        id: 209, name: 'BACKSPACE Front Drawer Storage Bed', tagline: 'Easy Access', description: 'Premium upholstered platform bed with dual integrated front pull-out storage drawers on smooth silent glides.', category: 'Beds', subcategory: 'Storage Beds', material: 'Linen Weave + Hardwood', firmness: 'Drawer Storage', warranty: '10 Years', image: './public/images/beds/bed-008.jpg', images: ['./public/images/beds/bed-008.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Queen': { price: 32990, mrp: 42990 }, 'King': { price: 38990, mrp: 49990 } }, discount: '23% OFF', offer: 'NEW', stock: 14, sku: 'BSP-BED-008', oldSku: 'BKPBD008', featured: true, reviews: []
    },
    {
        id: 210, name: 'BACKSPACE Upholstered Wingback Bed', tagline: 'Grand Hotel Style', description: 'Grand hotel-style upholstered bed featuring architectural sheltering wingback headboard and luxurious cream fabric.', category: 'Beds', subcategory: 'Wingback Beds', material: 'Tailored Linen + Solid Frame', firmness: 'Sheltering Wingback', warranty: '10 Years', image: './public/images/beds/bed-009.jpg', images: ['./public/images/beds/bed-009.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['16 inch'], prices: { 'Queen': { price: 38990, mrp: 49990 }, 'King': { price: 44990, mrp: 57990 } }, discount: '22% OFF', offer: 'PREMIUM', stock: 8, sku: 'BSP-BED-009', oldSku: 'BKPBD009', featured: true, reviews: []
    },
    {
        id: 211, name: 'BACKSPACE Scallop Shell Headboard Bed', tagline: 'Sculptural Elegance', description: 'Artistic blush-pink upholstered bed featuring a distinctive fluted scallop shell headboard, cream bedding, and a warm neutral bedroom setting.', category: 'Beds', subcategory: 'Fluted Beds', material: 'Blush Velvet + Hardwood', firmness: 'Fluted Velvet', warranty: '10 Years', image: './public/images/beds/bed-010.jpg', images: ['./public/images/beds/bed-010.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch'], prices: { 'Queen': { price: 36990, mrp: 47990 }, 'King': { price: 42990, mrp: 54990 } }, discount: '23% OFF', offer: 'NEW', stock: 10, sku: 'BSP-BED-010', oldSku: 'BKPBD010', featured: true, reviews: []
    },
    {
        id: 212, name: 'BACKSPACE Low Floating Platform Bed', tagline: 'Minimalist Zen', description: 'Contemporary low-profile grey upholstered platform bed with a minimalist headboard, neutral bedding, and a floating-style base.', category: 'Beds', subcategory: 'Platform Beds', material: 'Grey Weave + Timber Box', firmness: 'Floating Platform', warranty: '10 Years', image: './public/images/beds/bed-011.jpg', images: ['./public/images/beds/bed-011.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Double', 'Queen', 'King'], thicknesses: ['12 inch'], prices: { 'Double': { price: 27990, mrp: 36990 }, 'Queen': { price: 31990, mrp: 41990 }, 'King': { price: 37990, mrp: 48990 } }, discount: '24% OFF', offer: 'BEST SELLER', stock: 12, sku: 'BSP-BED-011', oldSku: 'BKPBD011', featured: true, reviews: []
    },
    {
        id: 213, name: 'BACKSPACE Rectangular Panel Headboard Bed', tagline: 'Geometric Luxury', description: 'Beige upholstered bed featuring a tall, geometrically divided rectangular-panel headboard and neutral bedding.', category: 'Beds', subcategory: 'Panel Beds', material: 'Sand Linen + Steel Beam', firmness: 'Geometric Panel', warranty: '10 Years', image: './public/images/beds/bed-012.jpg', images: ['./public/images/beds/bed-012.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch', '16 inch'], prices: { 'Queen': { price: 34990, mrp: 45990 }, 'King': { price: 41990, mrp: 52990 } }, discount: '24% OFF', offer: 'POPULAR', stock: 15, sku: 'BSP-BED-012', oldSku: 'BKPBD012', featured: true, reviews: []
    },
    {
        id: 214, name: 'BACKSPACE Rounded Upholstered Bed', tagline: 'Curved Silhouette', description: 'Cream/ivory upholstered bed with softly rounded headboard and frame, layered neutral bedding, and warm ambient bedroom styling.', category: 'Beds', subcategory: 'Curved Beds', material: 'Ivory Bouclé + Hardwood', firmness: 'Rounded Silhouette', warranty: '10 Years', image: './public/images/beds/bed-013.jpg', images: ['./public/images/beds/bed-013.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch', '16 inch'], prices: { 'Queen': { price: 35990, mrp: 46990 }, 'King': { price: 42990, mrp: 53990 } }, discount: '23% OFF', offer: 'NEW', stock: 12, sku: 'BSP-BED-013', oldSku: 'BKPBD013', featured: true, reviews: []
    },
    {
        id: 215, name: 'BACKSPACE Two-Tone Upholstered Bed', tagline: 'Modern Contrast', description: 'Modern two-tone upholstered bed featuring a cream headboard with vertical channel stitching and a contrasting dark charcoal base.', category: 'Beds', subcategory: 'Channel Beds', material: 'Cream Velvet + Charcoal Base', firmness: 'Two-Tone Contrast', warranty: '10 Years', image: './public/images/beds/bed-014.jpg', images: ['./public/images/beds/bed-014.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch', '16 inch'], prices: { 'Queen': { price: 37990, mrp: 48990 }, 'King': { price: 44990, mrp: 56990 } }, discount: '22% OFF', offer: 'POPULAR', stock: 10, sku: 'BSP-BED-014', oldSku: 'BKPBD014', featured: true, reviews: []
    },
    {
        id: 216, name: 'BACKSPACE Integrated Side Table Bed', tagline: 'All-in-One Suite', description: 'Cream upholstered bed with an extended tall rectangular panel headboard and seamless integrated wooden bedside floating tables.', category: 'Beds', subcategory: 'Integrated Beds', material: 'Sand Linen + Oak Floating Tables', firmness: 'Integrated Tables', warranty: '10 Years', image: './public/images/beds/bed-015.jpg', images: ['./public/images/beds/bed-015.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch', '16 inch'], prices: { 'Queen': { price: 42990, mrp: 54990 }, 'King': { price: 49990, mrp: 62990 } }, discount: '22% OFF', offer: 'PREMIUM', stock: 8, sku: 'BSP-BED-015', oldSku: 'BKPBD015', featured: true, reviews: []
    },
    {
        id: 217, name: 'BACKSPACE Four Poster Canopy Bed', tagline: 'Architectural Grandeur', description: 'A premium dark polished hardwood four-poster canopy frame with an elegant light cream upholstered headboard and neutral bedding.', category: 'Beds', subcategory: 'Canopy Beds', material: 'Dark Hardwood + Cream Linen', firmness: 'Canopy Hardwood', warranty: '10 Years', image: './public/images/beds/bed-016.jpg', images: ['./public/images/beds/bed-016.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Queen', 'King'], thicknesses: ['14 inch', '16 inch'], prices: { 'Queen': { price: 48990, mrp: 62990 }, 'King': { price: 56990, mrp: 71990 } }, discount: '22% OFF', offer: 'PREMIUM', stock: 6, sku: 'BSP-BED-016', oldSku: 'BKPBD016', featured: true, reviews: []
    },
    {
        id: 218, name: 'BACKSPACE Compact Single Upholstered Bed', tagline: 'Space-Saving Refinement', description: 'A compact single-size bed with a cream upholstered frame, tall vertically panelled headboard, and neutral bedding designed for smaller bedrooms.', category: 'Beds', subcategory: 'Single Beds', material: 'Cream Linen + Timber Core', firmness: 'Compact Platform', warranty: '10 Years', image: './public/images/beds/bed-017.jpg', images: ['./public/images/beds/bed-017.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Super Single'], thicknesses: ['12 inch', '14 inch'], prices: { 'Single': { price: 24990, mrp: 32990 }, 'Super Single': { price: 28990, mrp: 37990 } }, discount: '24% OFF', offer: 'NEW', stock: 15, sku: 'BSP-BED-017', oldSku: 'BKPBD017', featured: true, reviews: []
    },
    {
        id: 219, name: 'BACKSPACE Upholstered Daybed With Bolsters', tagline: 'Versatile Day-to-Night Lounging', description: 'A premium cream upholstered daybed featuring dual rounded cylindrical bolster arm cushions, low upholstered base, and contemporary styling.', category: 'Beds', subcategory: 'Daybeds', material: 'Textured Bouclé + Hardwood', firmness: 'Bolster Daybed', warranty: '10 Years', image: './public/images/beds/bed-018.jpg', images: ['./public/images/beds/bed-018.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double'], thicknesses: ['12 inch', '14 inch'], prices: { 'Single': { price: 31990, mrp: 41990 }, 'Double': { price: 36990, mrp: 47990 } }, discount: '24% OFF', offer: 'POPULAR', stock: 11, sku: 'BSP-BED-018', oldSku: 'BKPBD018', featured: true, reviews: []
    },

    // --- PILLOWS ---
    {
        id: 301, name: 'BACKSPACE Cooling Memory Foam Pillow', tagline: 'Neck Support', description: 'Contoured memory foam pillow with cooling gel layer.', category: 'Pillows', subcategory: 'Memory Foam', material: 'Memory Foam + Gel', firmness: 'Medium', warranty: '1 Year', images: ['./public/images/assets/hero.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Standard'], thicknesses: ['5 inch'], prices: { 'Standard': { price: 1499, mrp: 2499 } }, discount: '40% OFF', offer: 'TOP RATED', stock: 50, sku: 'BS-PL-001', featured: true, cooling: 'High', support: 'Neck Alignment', reviews: []
    },
    
    // --- BEDDING ---
    {
        id: 401, name: 'BACKSPACE SUNRAYS THERMO FITTED SHEETS', tagline: 'Premium Cotton', description: 'Breathable, ultra-soft fitted sheets for all mattress sizes.', category: 'Bedding', subcategory: 'Fitted Sheets', material: '100% Cotton', firmness: 'N/A', warranty: 'N/A', images: ['./public/images/assets/texture.jpg'], video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', sizes: ['Single', 'Double', 'Queen', 'King'], thicknesses: ['Fits up to 10 inch'], prices: { 'Single': { price: 999, mrp: 1499 }, 'Queen': { price: 1499, mrp: 2199 }, 'King': { price: 1799, mrp: 2499 } }, discount: '30% OFF', offer: 'BEST SELLER', stock: 100, sku: 'BS-BD-001', featured: true, cooling: 'High', support: 'N/A', reviews: []
    }
];

function appData() {
    return {
        // Bed Product Check Helper
        isBedProduct(p) { return isBedProduct(p); },
        isProtectorProduct(p) { return isProtectorProduct(p); },
        isPillowProduct(p) { return isPillowProduct(p); },
        isMattressProduct(p) { return isMattressProduct(p); },

        isNavItemActive(item) {
            const page = this.currentPage;
            const cat = this.currentCategoryFilter;
            const prod = this.currentProductData;
            
            if (page === 'productDetail' && prod) {
                if (item === 'beds') return isBedProduct(prod);
                if (item === 'mattresses') return isMattressProduct(prod);
                if (item === 'protectors') return isProtectorProduct(prod);
                if (item === 'pillows') return isPillowProduct(prod);
                return false;
            }
            
            if (item === 'beds') {
                return page === 'beds' || (page === 'shop' && (cat === 'Beds' || cat === 'Smart Beds'));
            }
            
            if (page === 'shop') {
                if (item === 'mattresses') {
                    const mattressFilters = ['Mattresses', 'Latex', 'Spring', 'Orthopedic', 'Single Bed', 'Comfort Foam'];
                    return mattressFilters.includes(cat);
                }
                if (item === 'memory_foam') return cat === 'Memory Foam';
                if (item === 'protectors') return cat === 'Protectors';
                if (item === 'pillows') return cat === 'Pillows' || cat === 'PILLOWS';
                if (item === 'all') return cat === 'All';
                return false;
            }
            
            if (item === 'support') {
                return page === 'support';
            }
            
            return false;
        },
        
        // Core State
        currentPage: 'home',
        currentProductData: null, // 'home', 'shop', 'product', 'compare', 'finder', 'guide', 'bulk', 'about', 'admin', 'profile', 'orders', 'track', 'wishlist'
        currentCategoryFilter: 'Mattresses', // Which category to show on the shop page
        selectedBedGroup: 'all',
        
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
            window.currentCategoryFilter = this.currentCategoryFilter;
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

            // Hash routing listener
            const syncFromHash = () => {
                const h = window.location.hash || '';
                if (h.startsWith('#bed-')) {
                    const code = h.replace('#bed-', '').trim();
                    const allBeds = window.BED_COLLECTION_CARDS || [];
                    const found = allBeds.find(b => ((b.code || '').toUpperCase() === code.toUpperCase()) || ((b.oldCode || '').toUpperCase() === code.toUpperCase()));
                    if (found) {
                        this.currentProductData = found;
                        this.currentPage = 'productDetail';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                } else if (h.startsWith('#mattress-') || h.startsWith('#protector-') || h.startsWith('#pillow-')) {
                    const parts = h.split('-');
                    const code = parts.slice(1).join('-').trim();
                    const allProducts = (window.BACKSPACE_CATALOGUE || []).concat(this.products || []);
                    const found = allProducts.find(p => (p.code || '').toUpperCase() === code.toUpperCase() || ((p.oldCode || '').toUpperCase() === code.toUpperCase()) || String(p.id) === code);
                    if (found) {
                        this.currentProductData = found;
                        this.currentPage = 'productDetail';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                } else if (h === '#beds') {
                    this.currentPage = 'beds';
                    this.currentCategoryFilter = 'Beds';
                    this.selectedBedGroup = 'all';
                    window.dispatchEvent(new CustomEvent('select-bed-group', { detail: { group: 'all' } }));
                    window.dispatchEvent(new CustomEvent('select-bed-classified', { detail: { type: 'all' } }));
                    window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
                } else if (h === '#mattresses') {
                    this.currentPage = 'shop';
                    this.currentCategoryFilter = 'Mattresses';
                    window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
                } else if (h === '#protectors') {
                    this.currentPage = 'shop';
                    this.currentCategoryFilter = 'Protectors';
                    window.dispatchEvent(new CustomEvent('select-protector-filter', { detail: { type: 'all' } }));
                    window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
                } else if (h === '#pillows') {
                    this.currentPage = 'shop';
                    this.currentCategoryFilter = 'Pillows';
                    window.dispatchEvent(new CustomEvent('select-pillow-filter', { detail: { size: null } }));
                    window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
                } else if (h === '#support') {
                    this.currentPage = 'support';
                    window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
                } else if (h === '#shop') {
                    this.currentPage = 'shop';
                    this.currentCategoryFilter = 'All';
                    window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
                } else if (h === '#admin' || h === '#admin-login') {
                    window.location.href = 'admin.html';
                    return;
                } else if (h === '#home' || h === '') {
                    this.currentPage = 'home';
                    window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
                }
            };
            window.addEventListener('hashchange', syncFromHash);
            window.addEventListener('popstate', syncFromHash);
            syncFromHash();
            setTimeout(syncFromHash, 150);
        },

        checkScrollAnimations() {
            const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) el.classList.add('revealed');
            });
        },

        selectBedCategory(type, value) {
            this.currentPage = 'beds';
            this.currentCategoryFilter = 'Beds';
            this.mobileMenuOpen = false;
            this.hamburgerOpen = false;
            this.searchOpen = false;
            this.openDropdown = null;
            this.activeMegaMenu = null;
            window.dispatchEvent(new CustomEvent('select-bed-classified', { detail: { type, value } }));
            window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
            if (window.location.hash !== '#beds') {
                window.history.pushState(null, '', '#beds');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        openBedByCode(code) {
            const allBeds = window.BED_COLLECTION_CARDS || [];
            const found = allBeds.find(b => (b.code || '').toUpperCase() === (code || '').toUpperCase());
            if (found) {
                window.currentBedProductData = found;
                this.currentProductData = found;
                this.currentPage = 'productDetail';
                if (window.location.hash !== '#bed-' + found.code) {
                    window.history.pushState(null, '', '#bed-' + found.code);
                }
            } else {
                this.goToPage('beds');
            }
            this.openDropdown = null;
            this.hamburgerOpen = false;
            this.mobileMenuOpen = false;
            window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        goToPage(page, category = null) {
            if (page === 'admin' || page === 'admin-login') {
                window.location.href = 'admin.html';
                return;
            }
            if (page === 'beds' || category === 'Beds' || category === 'Smart Beds') {
                this.currentPage = 'beds';
                this.currentCategoryFilter = 'Beds';
                this.mobileMenuOpen = false;
                if (category && typeof category === 'object' && category.type) {
                    window.dispatchEvent(new CustomEvent('select-bed-classified', { detail: category }));
                } else if (category && typeof category === 'string' && category.toLowerCase() !== 'beds' && category.toLowerCase() !== 'all') {
                    window.dispatchEvent(new CustomEvent('select-bed-classified', { detail: { type: 'category', value: category } }));
                } else {
                    window.dispatchEvent(new CustomEvent('select-bed-classified', { detail: { type: 'all' } }));
                }
                if (window.location.hash !== '#beds') {
                    window.history.pushState(null, '', '#beds');
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (page === 'productDetail') {
                this.currentPage = 'productDetail';
                if (this.currentProductData && isBedProduct(this.currentProductData)) {
                    if (window.location.hash !== '#bed-' + this.currentProductData.code) {
                        window.history.pushState(null, '', '#bed-' + this.currentProductData.code);
                    }
                } else if (this.currentProductData && isProtectorProduct(this.currentProductData)) {
                    const c = this.currentProductData.code || this.currentProductData.id;
                    if (window.location.hash !== '#protector-' + c) {
                        window.history.pushState(null, '', '#protector-' + c);
                    }
                } else if (this.currentProductData && isPillowProduct(this.currentProductData)) {
                    const c = this.currentProductData.code || this.currentProductData.id;
                    if (window.location.hash !== '#pillow-' + c) {
                        window.history.pushState(null, '', '#pillow-' + c);
                    }
                } else if (this.currentProductData) {
                    const c = this.currentProductData.code || this.currentProductData.id;
                    if (window.location.hash !== '#mattress-' + c) {
                        window.history.pushState(null, '', '#mattress-' + c);
                    }
                }
            } else {
                this.currentPage = page;
                if (category) {
                    this.currentCategoryFilter = category;
                    window.currentCategoryFilter = category;
                }
                if (page === 'home') {
                    if (window.location.hash && window.location.hash !== '#home') {
                        window.history.pushState(null, '', window.location.pathname);
                    }
                } else if (page === 'shop') {
                    let targetHash = '#shop';
                    if (category === 'Mattresses') targetHash = '#mattresses';
                    else if (category === 'Protectors') targetHash = '#protectors';
                    else if (category === 'Pillows' || category === 'PILLOWS') targetHash = '#pillows';
                    if (window.location.hash !== targetHash) {
                        window.history.pushState(null, '', targetHash);
                    }
                } else if (page === 'support') {
                    if (window.location.hash !== '#support') {
                        window.history.pushState(null, '', '#support');
                    }
                } else {
                    if (window.location.hash && window.location.hash.startsWith('#bed')) {
                        window.history.pushState(null, '', '#' + page);
                    }
                }
            }
            this.mobileMenuOpen = false;
            this.hamburgerOpen = false;
            this.searchOpen = false;
            this.activeMegaMenu = null;
            window.dispatchEvent(new CustomEvent('close-all-dropdowns'));
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
                const sq = this.searchQuery.toLowerCase();
                const matchesSearch = p.name.toLowerCase().includes(sq) || 
                                      p.description.toLowerCase().includes(sq) ||
                                      (p.code && p.code.toLowerCase().includes(sq)) ||
                                      (p.oldCode && p.oldCode.toLowerCase().includes(sq));
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
            let text = `Hello BACKSPACE.CO,\n\nI would like to place an order:\n\n`;
            this.cart.forEach((item, i) => {
                text += `${i+1}. ${item.name}` + (item.code ? ` (${item.code})` : '') + `\n`;
                if (item.size) text += `   Size: ${item.size}` + (item.dimensions ? ` (${item.dimensions})` : '') + `\n`;
                if (item.material) text += `   Material: ${item.material}\n`;
                if (item.color) text += `   Color: ${item.color}\n`;
                if (item.storage && item.storage !== 'None' && item.storage !== 'none') text += `   Storage: ${item.storage}\n`;
                if (item.thickness) text += `   Thickness: ${item.thickness}\n`;
                text += `   Quantity: ${item.quantity}\n   Price: ₹${item.price.toLocaleString('en-IN')} each\n\n`;
            });
            text += `Total Order Value: ₹${this.cartTotal.toLocaleString('en-IN')}\n\nPlease confirm availability, delivery timeline, and payment instructions.`;
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
