
function isBedProduct(p) {
    if (!p) return false;
    return p.category === 'Beds' || p.mainCategory === 'Beds' || (p.code && p.code.startsWith('BKPBD'));
}
window.isBedProduct = isBedProduct;

window.BED_COLLECTION_CARDS = [
    {
        "id": 201,
        "code": "BKPBD001",
        "name": "BACKSPACE Upholstered Platform Bed",
        "slug": "upholstered-platform-bed",
        "category": "Beds",
        "tagline": "Minimalist Scandinavian Serenity",
        "footer": "Customization available",
        "price": 28990,
        "originalPrice": 36990,
        "discount": "22% OFF",
        "rating": 4.9,
        "reviews": 38,
        "description": "A contemporary upholstered platform bed featuring a clean silhouette, a softly padded headboard, and a neutral, versatile design. Built with an internal kiln-dried hardwood framework and acoustic timber slats that ensure silent, breathable support.",
        "positioning": "Ideal for modern minimalist and Scandinavian master bedrooms seeking understated luxury and calming tactile textures.",
        "image": "./public/images/beds/bed-001.jpg",
        "images": {
            "main": "./public/images/beds/bed-001.jpg",
            "headboard": "./public/images/beds/bed-001-headboard.jpg",
            "frame": "./public/images/beds/bed-001-frame.jpg",
            "detail": "./public/images/beds/bed-001-detail.jpg",
            "storage": "./public/images/beds/bed-001-storage.jpg",
            "lifestyle": "./public/images/beds/bed-001-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": -4000
            },
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Tailored to your master bedroom specifications",
                "diff": 3000
            }
        ],
        "materials": [
            "Textured Linen",
            "Plush Velvet",
            "Organic Boucle"
        ],
        "colors": [
            {
                "name": "Warm Beige",
                "hex": "#E7DEC8"
            },
            {
                "name": "Sand Cream",
                "hex": "#F3EDE2"
            },
            {
                "name": "Slate Grey",
                "hex": "#8B8D8E"
            },
            {
                "name": "Charcoal",
                "hex": "#3C3B3A"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Minimal Platform)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Built-in Underbed Drawers",
                "diff": 3500
            },
            {
                "id": "hydraulic",
                "name": "German Gas-Lift Hydraulic Storage",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Softly padded ergonomic headboard with clean tailored seams",
            "Solid kiln-dried hardwood frame engineered for lifetime durability",
            "Acoustic noise-free solid wood slat foundation system",
            "Breathable, stain-resistant premium upholstery fabrics",
            "Low-profile platform silhouette suitable for contemporary interiors"
        ],
        "specifications": {
            "bedType": "Upholstered Platform Bed",
            "frameConstruction": "Kiln-Dried Seasoned Hardwood & Reinforced Pine",
            "upholstery": "Premium Textured Linen / Soft Velvet (Stain Resistant)",
            "headboardHeight": "48 inches (122 cm)",
            "platformHeight": "12 inches (30 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats (Silent Sleep System)",
            "underbedClearance": "6 inches (15 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD003",
            "BKPBD011",
            "BKPBD013"
        ]
    },
    {
        "id": 202,
        "code": "BKPBD002",
        "name": "BACKSPACE Floor Divan Storage Bed",
        "slug": "floor-divan-storage-bed",
        "category": "Beds",
        "tagline": "Seamless Built-in Organization",
        "footer": "Customization available",
        "price": 32490,
        "originalPrice": 41990,
        "discount": "23% OFF",
        "rating": 4.8,
        "reviews": 42,
        "description": "A low-profile divan-style bed designed to combine a simple upholstered appearance with practical storage. Features a flush floor perimeter that eliminates underbed dust while offering spacious integrated pull-out storage compartments.",
        "positioning": "Perfect for urban apartments and master suites requiring maximum discreet organization without compromising architectural refinement.",
        "image": "./public/images/beds/bed-002.jpg",
        "images": {
            "main": "./public/images/beds/bed-002.jpg",
            "headboard": "./public/images/beds/bed-002-headboard.jpg",
            "frame": "./public/images/beds/bed-002-frame.jpg",
            "detail": "./public/images/beds/bed-002-detail.jpg",
            "storage": "./public/images/beds/bed-002-storage.jpg",
            "lifestyle": "./public/images/beds/bed-002-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": -4000
            },
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Customized to your exact room specifications",
                "diff": 3000
            }
        ],
        "materials": [
            "Textured Tweed",
            "Heavy Woven Linen",
            "Performance Suede"
        ],
        "colors": [
            {
                "name": "Sand Cream",
                "hex": "#F3EDE2"
            },
            {
                "name": "Oatmeal Beige",
                "hex": "#DFD7CA"
            },
            {
                "name": "Heather Grey",
                "hex": "#9E9A95"
            },
            {
                "name": "Soft Mocha",
                "hex": "#7A685B"
            }
        ],
        "storageOptions": [
            {
                "id": "drawers",
                "name": "Integrated Divan Drawers (Included)",
                "diff": 0
            },
            {
                "id": "hydraulic",
                "name": "Gas-Lift Hydraulic Divan Base",
                "diff": 3500
            }
        ],
        "featuresList": [
            "Floor-level low-profile divan base prevents dust accumulation",
            "Integrated large-capacity slide-out storage compartments",
            "Solid reinforced platform deck providing continuous planar support",
            "Space-efficient flush footprint with no protruding edges",
            "High-density padded surround wrapped in tactile woven upholstery"
        ],
        "specifications": {
            "bedType": "Divan Storage Bed",
            "frameConstruction": "Engineered Timber with Reinforced Corner Bracing",
            "upholstery": "Heavy Woven Linen / Tweed (Water Repellent)",
            "headboardHeight": "46 inches (117 cm)",
            "platformHeight": "14 inches (35 cm)",
            "slatFoundation": "Solid Engineered Timber Deck Base",
            "underbedClearance": "Floor Flush (0 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid deck foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD007",
            "BKPBD008",
            "BKPBD001"
        ]
    },
    {
        "id": 203,
        "code": "BKPBD003",
        "name": "BACKSPACE Horizontal Channel Headboard Bed",
        "slug": "horizontal-channel-headboard-bed",
        "category": "Beds",
        "tagline": "Architectural Horizontal Paneling",
        "footer": "Customization available",
        "price": 31990,
        "originalPrice": 39990,
        "discount": "20% OFF",
        "rating": 4.9,
        "reviews": 35,
        "description": "A modern upholstered bed distinguished by horizontal channel detailing on its headboard. The bold linear fluting creates a striking architectural backdrop while providing deep, ergonomic back support for reading and relaxing.",
        "positioning": "Created for contemporary bedrooms that embrace structured geometry, linear visual harmony, and luxurious cushioned comfort.",
        "image": "./public/images/beds/bed-003.jpg",
        "images": {
            "main": "./public/images/beds/bed-003.jpg",
            "headboard": "./public/images/beds/bed-003-headboard.jpg",
            "frame": "./public/images/beds/bed-003-frame.jpg",
            "detail": "./public/images/beds/bed-003-detail.jpg",
            "storage": "./public/images/beds/bed-003-storage.jpg",
            "lifestyle": "./public/images/beds/bed-003-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": -4000
            },
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom width and headboard dimensions",
                "diff": 3000
            }
        ],
        "materials": [
            "Brushed Linen",
            "Soft Velvet",
            "Chunky Weave"
        ],
        "colors": [
            {
                "name": "Warm Taupe",
                "hex": "#CFC5B8"
            },
            {
                "name": "Cream Ivory",
                "hex": "#F7F3EB"
            },
            {
                "name": "Slate Grey",
                "hex": "#7F8183"
            },
            {
                "name": "Olive Ash",
                "hex": "#939688"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Standard Platform)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Underbed Sliding Drawers",
                "diff": 3500
            },
            {
                "id": "hydraulic",
                "name": "German Gas-Lift Hydraulic Storage",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Individually padded horizontal channel segments for plush lumbar support",
            "Kiln-dried hardwood structural perimeter with rounded safety corners",
            "Reinforced solid timber slat foundation engineered for air circulation",
            "High-resilience foam padding that retains fullness over decades",
            "Subtle recessed leg design for a clean, floating visual appeal"
        ],
        "specifications": {
            "bedType": "Channel Upholstered Bed",
            "frameConstruction": "Kiln-Dried Seasoned Timber & Structural Plywood",
            "upholstery": "Brushed Linen / Soft Velvet (Dual Layer Cushioning)",
            "headboardHeight": "50 inches (127 cm)",
            "platformHeight": "13 inches (33 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats (Silent Sleep System)",
            "underbedClearance": "6.5 inches (16 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD001",
            "BKPBD012",
            "BKPBD014"
        ]
    },
    {
        "id": 205,
        "code": "BKPBD004",
        "name": "BACKSPACE Diamond Tufted Headboard Bed",
        "slug": "diamond-tufted-headboard-bed",
        "category": "Beds",
        "tagline": "Handcrafted Luxury Tufting",
        "footer": "Customization available",
        "price": 34990,
        "originalPrice": 44990,
        "discount": "22% OFF",
        "rating": 4.9,
        "reviews": 46,
        "description": "An elegant upholstered bed with diamond-pattern tufting that adds texture and a refined appearance. Each diamond fold is individually hand-gathered and buttoned by master upholsterers, paired with a solid timber frame for heirloom-quality durability.",
        "positioning": "Brings grand hotel luxury, timeless depth, and opulent European craftsmanship to classical and transitional bedrooms.",
        "image": "./public/images/beds/bed-004.jpg",
        "images": {
            "main": "./public/images/beds/bed-004.jpg",
            "headboard": "./public/images/beds/bed-004-headboard.jpg",
            "frame": "./public/images/beds/bed-004-frame.jpg",
            "detail": "./public/images/beds/bed-004-detail.jpg",
            "storage": "./public/images/beds/bed-004-storage.jpg",
            "lifestyle": "./public/images/beds/bed-004-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Bespoke dimensions per architectural drawing",
                "diff": 3500
            }
        ],
        "materials": [
            "Plush Velvet",
            "Belgian Linen",
            "Matte Leatherette"
        ],
        "colors": [
            {
                "name": "Warm Beige",
                "hex": "#E7DEC8"
            },
            {
                "name": "Pearl Cream",
                "hex": "#F8F5EE"
            },
            {
                "name": "Deep Charcoal",
                "hex": "#3A3938"
            },
            {
                "name": "Royal Champagne",
                "hex": "#DECBA4"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Classic Footprint)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Dual Side Storage Drawers",
                "diff": 3500
            },
            {
                "id": "hydraulic",
                "name": "Heavy-Duty Gas-Lift Hydraulic",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Artisanal deep diamond tufting with fabric-matched hand-tied buttons",
            "Extra-thick high-resilience foam padding for comfortable upright sitting",
            "Reinforced solid Sheesham internal spine with center support legs",
            "Padded perimeter side rails that match the headboard upholstery",
            "Silent solid wood slat foundation with zero creaks"
        ],
        "specifications": {
            "bedType": "Diamond Tufted Bed",
            "frameConstruction": "Kiln-Dried Sheesham & Heavy-Duty Pine",
            "upholstery": "Plush Velvet / Belgian Linen (Stain Resistant)",
            "headboardHeight": "52 inches (132 cm)",
            "platformHeight": "13.5 inches (34 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "6 inches (15 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD005",
            "BKPBD009",
            "BKPBD010"
        ]
    },
    {
        "id": 206,
        "code": "BKPBD005",
        "name": "BACKSPACE Chesterfield Rolled Headboard Bed",
        "slug": "chesterfield-rolled-headboard-bed",
        "category": "Beds",
        "tagline": "Grand Heritage Rolled Silhouette",
        "footer": "Customization available",
        "price": 38990,
        "originalPrice": 49990,
        "discount": "22% OFF",
        "rating": 4.9,
        "reviews": 51,
        "description": "A statement bed with a Chesterfield-inspired headboard featuring a distinctive rolled design. Anchored by generous scrolled shoulders, hand-folded deep tufting, and a solid kiln-dried chassis that radiates traditional elegance.",
        "positioning": "Created for grand master bedrooms that require an imposing, majestic architectural focal point with classical British heritage.",
        "image": "./public/images/beds/bed-005.jpg",
        "images": {
            "main": "./public/images/beds/bed-005.jpg",
            "headboard": "./public/images/beds/bed-005-headboard.jpg",
            "frame": "./public/images/beds/bed-005-frame.jpg",
            "detail": "./public/images/beds/bed-005-detail.jpg",
            "storage": "./public/images/beds/bed-005-storage.jpg",
            "lifestyle": "./public/images/beds/bed-005-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Grand estate & custom master dimensions",
                "diff": 4000
            }
        ],
        "materials": [
            "Royal Velvet",
            "Supple Leatherette",
            "Heritage Linen"
        ],
        "colors": [
            {
                "name": "Camel Beige",
                "hex": "#C9B59B"
            },
            {
                "name": "Antique Cream",
                "hex": "#F4EBD9"
            },
            {
                "name": "Charcoal Grey",
                "hex": "#4A4744"
            },
            {
                "name": "Cognac Brown",
                "hex": "#7F4E28"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Heritage Profile)",
                "diff": 0
            },
            {
                "id": "hydraulic",
                "name": "Heavy-Duty Gas-Lift Hydraulic Storage",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Grand scrolled rolled crown headboard with deep hand-tucked pleats",
            "Plush multi-layer reflex cushioning for unparalleled back luxury",
            "Seasoned kiln-dried hardwood structure with heavy steel brackets",
            "Coordinated rolled footboard detailing on full frame models",
            "Heavy-gauge solid timber slat mattress foundation system"
        ],
        "specifications": {
            "bedType": "Chesterfield Rolled Bed",
            "frameConstruction": "Solid Seasoned Hardwood & Heavy Steel Corner Plates",
            "upholstery": "Royal Velvet / Premium Leatherette",
            "headboardHeight": "54 inches (137 cm)",
            "platformHeight": "14 inches (35 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "5.5 inches (14 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD004",
            "BKPBD009",
            "BKPBD016"
        ]
    },
    {
        "id": 207,
        "code": "BKPBD006",
        "name": "BACKSPACE Polished Wood Frame Bed",
        "slug": "polished-wood-frame-bed",
        "category": "Beds",
        "tagline": "Organic Solid Timber & Lacquer",
        "footer": "Customization available",
        "price": 33990,
        "originalPrice": 42990,
        "discount": "21% OFF",
        "rating": 4.8,
        "reviews": 39,
        "description": "A wooden bed featuring a polished frame and a timeless furniture design. Handcrafted from solid seasoned timber, hand-buffed with organic protective oils and clear satin lacquer that celebrates natural wood grain patterns.",
        "positioning": "Perfect for bedrooms highlighting organic natural materials, clean lines, warmth, and enduring solid wood carpentry.",
        "image": "./public/images/beds/bed-006.jpg",
        "images": {
            "main": "./public/images/beds/bed-006.jpg",
            "headboard": "./public/images/beds/bed-006-headboard.jpg",
            "frame": "./public/images/beds/bed-006-frame.jpg",
            "detail": "./public/images/beds/bed-006-detail.jpg",
            "storage": "./public/images/beds/bed-006-storage.jpg",
            "lifestyle": "./public/images/beds/bed-006-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": -4000
            },
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom solid timber dimensions",
                "diff": 3500
            }
        ],
        "materials": [
            "100% Solid Sheesham",
            "Solid Teak Wood",
            "Seasoned Oak"
        ],
        "colors": [
            {
                "name": "Natural Walnut",
                "hex": "#5B4031"
            },
            {
                "name": "Honey Teak",
                "hex": "#B87333"
            },
            {
                "name": "Warm Oak",
                "hex": "#C49A6C"
            },
            {
                "name": "Raw Natural",
                "hex": "#D8BC97"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (8.5\" Open Clearance)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Underbed Solid Wood Drawers (Pair)",
                "diff": 4500
            }
        ],
        "featuresList": [
            "100% genuine solid hardwood throughout with visible grain variations",
            "Hand-buffed satin protective coat resistant to moisture and scuffs",
            "Traditional mortise-and-tenon reinforced joinery for maximum rigidity",
            "Generous 8.5-inch under-bed clearance for robotic vacuums & storage boxes",
            "Heavy-duty solid timber slat foundation supporting up to 450 kg"
        ],
        "specifications": {
            "bedType": "Solid Wood Platform Bed",
            "frameConstruction": "100% Solid Kiln-Dried Sheesham / Teak Timber",
            "upholstery": "N/A (Hand-Polished Natural Timber)",
            "headboardHeight": "44 inches (112 cm)",
            "platformHeight": "14 inches (35 cm)",
            "slatFoundation": "Solid Wood Interlocking Slats",
            "underbedClearance": "8.5 inches (21.5 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Solid Timber Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid wood slats included)"
        },
        "relatedBedCodes": [
            "BKPBD011",
            "BKPBD016",
            "BKPBD015"
        ]
    },
    {
        "id": 208,
        "code": "BKPBD007",
        "name": "BACKSPACE Hydraulic Storage Bed",
        "slug": "hydraulic-storage-bed",
        "category": "Beds",
        "tagline": "German Gas-Lift Hydraulic Storage",
        "footer": "Customization available",
        "price": 39490,
        "originalPrice": 51990,
        "discount": "24% OFF",
        "rating": 4.9,
        "reviews": 58,
        "description": "A bed designed to provide additional under-bed storage through a hydraulic lifting mechanism. Engineered with dual heavy-duty German gas-lift pistons that allow effortless, one-handed lifting of the mattress platform to reveal a dust-sealed 650-liter storage cavity.",
        "positioning": "The definitive solution for bedrooms demanding maximum storage capacity for seasonal bedding, luggage, and quilts.",
        "image": "./public/images/beds/bed-007.jpg",
        "images": {
            "main": "./public/images/beds/bed-007.jpg",
            "headboard": "./public/images/beds/bed-007-headboard.jpg",
            "frame": "./public/images/beds/bed-007-frame.jpg",
            "detail": "./public/images/beds/bed-007-detail.jpg",
            "storage": "./public/images/beds/bed-007-storage.jpg",
            "lifestyle": "./public/images/beds/bed-007-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Customized hydraulic bed proportions",
                "diff": 3500
            }
        ],
        "materials": [
            "Performance Linen",
            "Soft Velvet",
            "Heavy Weave"
        ],
        "colors": [
            {
                "name": "Sandstone Beige",
                "hex": "#E2D9CC"
            },
            {
                "name": "Slate Grey",
                "hex": "#7E8183"
            },
            {
                "name": "Warm Taupe",
                "hex": "#B5A795"
            },
            {
                "name": "Ivory White",
                "hex": "#F9F6F0"
            }
        ],
        "storageOptions": [
            {
                "id": "hydraulic",
                "name": "Heavy-Duty Gas-Lift Hydraulic (Included)",
                "diff": 0
            }
        ],
        "featuresList": [
            "German-engineered gas-lift hydraulic pistons with smooth assisted lift",
            "Full-footprint 650-liter under-bed storage with sealed bottom panel",
            "Safety lock catch preventing accidental lowering during access",
            "High-density padded headboard with vertical accent stitching",
            "Welded steel subframe with reinforced timber platform deck"
        ],
        "specifications": {
            "bedType": "Hydraulic Storage Bed",
            "frameConstruction": "Heavy-Duty Tubular Steel & Kiln-Dried Hardwood",
            "upholstery": "Performance Linen (Stain & Tear Resistant)",
            "headboardHeight": "48 inches (122 cm)",
            "platformHeight": "14.5 inches (37 cm)",
            "slatFoundation": "Reinforced Steel Subframe with Timber Decking",
            "underbedClearance": "Floor Flush with Internal Storage Depth 11\"",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Frame & 5 Years Hydraulic Piston Warranty",
            "mattressIncluded": "No (Mattress sold separately; hydraulic deck system included)"
        },
        "relatedBedCodes": [
            "BKPBD002",
            "BKPBD008",
            "BKPBD003"
        ]
    },
    {
        "id": 209,
        "code": "BKPBD008",
        "name": "BACKSPACE Front Drawer Storage Bed",
        "slug": "front-drawer-storage-bed",
        "category": "Beds",
        "tagline": "Slide-Out Front Storage Drawers",
        "footer": "Customization available",
        "price": 35990,
        "originalPrice": 46990,
        "discount": "23% OFF",
        "rating": 4.8,
        "reviews": 36,
        "description": "A practical storage bed with front-access drawers integrated into its base. Designed for rooms where side space is constrained by nightstands, offering two massive front-opening drawers operating on full-extension ball-bearing slides.",
        "positioning": "Ideal for compact bedrooms where bedside tables block lateral drawers but easy access to daily essentials is required.",
        "image": "./public/images/beds/bed-008.jpg",
        "images": {
            "main": "./public/images/beds/bed-008.jpg",
            "headboard": "./public/images/beds/bed-008-headboard.jpg",
            "frame": "./public/images/beds/bed-008-frame.jpg",
            "detail": "./public/images/beds/bed-008-detail.jpg",
            "storage": "./public/images/beds/bed-008-storage.jpg",
            "lifestyle": "./public/images/beds/bed-008-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Customized drawer dimensions",
                "diff": 3000
            }
        ],
        "materials": [
            "Textured Cotton-Linen",
            "Soft Velvet",
            "Woven Chenille"
        ],
        "colors": [
            {
                "name": "Linen Cream",
                "hex": "#F4EFE6"
            },
            {
                "name": "Warm Grey",
                "hex": "#8C8782"
            },
            {
                "name": "Pebble Beige",
                "hex": "#DDD4C5"
            },
            {
                "name": "Midnight Charcoal",
                "hex": "#2E2D2C"
            }
        ],
        "storageOptions": [
            {
                "id": "drawers",
                "name": "Dual Heavy-Duty Front Drawers (Included)",
                "diff": 0
            },
            {
                "id": "hydraulic",
                "name": "Upgrade to Full Hydraulic Base",
                "diff": 3500
            }
        ],
        "featuresList": [
            "Two oversized front slide-out drawers on soft-close ball-bearing runners",
            "Allows full drawer extension without moving nightstands or bedside lamps",
            "Softly padded rectangular headboard with clean tailored seams",
            "Rigid engineered timber drawer boxes holding up to 35 kg each",
            "Solid wood slat support system for even mattress weight distribution"
        ],
        "specifications": {
            "bedType": "Front Drawer Storage Bed",
            "frameConstruction": "Reinforced Engineered Wood & Solid Pine",
            "upholstery": "Cotton-Linen Blend (Breathable & Durable)",
            "headboardHeight": "47 inches (119 cm)",
            "platformHeight": "14 inches (35 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "Floor Flush (Drawers internal depth 8.5\")",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Frame & 3 Years Runner Hardware Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD002",
            "BKPBD007",
            "BKPBD012"
        ]
    },
    {
        "id": 210,
        "code": "BKPBD009",
        "name": "BACKSPACE Upholstered Wingback Bed",
        "slug": "upholstered-wingback-bed",
        "category": "Beds",
        "tagline": "Grand Cocooning Flared Wings",
        "footer": "Customization available",
        "price": 36990,
        "originalPrice": 47990,
        "discount": "23% OFF",
        "rating": 4.9,
        "reviews": 44,
        "description": "An upholstered bed featuring a wingback headboard that creates a distinctive, enclosed silhouette. The flared sheltering side wings provide a cozy sense of privacy, acoustic absorption, and comfortable side leaning.",
        "positioning": "Created for lavish master suites that favor dramatic architectural headboard profiles and cocoon-like tranquility.",
        "image": "./public/images/beds/bed-009.jpg",
        "images": {
            "main": "./public/images/beds/bed-009.jpg",
            "headboard": "./public/images/beds/bed-009-headboard.jpg",
            "frame": "./public/images/beds/bed-009-frame.jpg",
            "detail": "./public/images/beds/bed-009-detail.jpg",
            "storage": "./public/images/beds/bed-009-storage.jpg",
            "lifestyle": "./public/images/beds/bed-009-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom wing depth and headboard dimensions",
                "diff": 3500
            }
        ],
        "materials": [
            "Brushed Linen",
            "Luxury Velvet",
            "Boucle Weave"
        ],
        "colors": [
            {
                "name": "Ivory Cream",
                "hex": "#F8F5EE"
            },
            {
                "name": "Soft Oatmeal",
                "hex": "#E3DACE"
            },
            {
                "name": "Slate Grey",
                "hex": "#7A7B7D"
            },
            {
                "name": "Warm Mink",
                "hex": "#9B8B7D"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Sculpted Profile)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Underbed Sliding Drawers",
                "diff": 3500
            },
            {
                "id": "hydraulic",
                "name": "German Gas-Lift Hydraulic Storage",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Gracefully flared wingback side panels provide acoustic dampening and cocoon comfort",
            "Extra-deep foam headboard padding engineered for reading in bed",
            "Seasoned kiln-dried hardwood internal structure with steel corner ties",
            "Padded perimeter rails with seamless mitered corner joints",
            "Solid acoustic hardwood slat foundation eliminating squeaks"
        ],
        "specifications": {
            "bedType": "Upholstered Wingback Bed",
            "frameConstruction": "Solid Seasoned Hardwood & Reinforced Timber",
            "upholstery": "Brushed Linen / Luxury Velvet",
            "headboardHeight": "52 inches (132 cm)",
            "platformHeight": "13 inches (33 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "6 inches (15 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD004",
            "BKPBD005",
            "BKPBD010"
        ]
    },
    {
        "id": 211,
        "code": "BKPBD010",
        "name": "BACKSPACE Scallop Shell Headboard Bed",
        "slug": "scallop-shell-headboard-bed",
        "category": "Beds",
        "tagline": "Sculptural Art-Deco Petal Fluting",
        "footer": "Customization available",
        "price": 33490,
        "originalPrice": 43990,
        "discount": "24% OFF",
        "rating": 4.9,
        "reviews": 40,
        "description": "A decorative upholstered bed with a scalloped, shell-inspired headboard. Radiating vertical petal fluting evokes 1920s Art-Deco glamour, sculpted with plush padding and draped in soft-touch velvet or textured bouclé.",
        "positioning": "An artistic centerpiece for romantic, boutique-inspired bedrooms that celebrate feminine curves and sculptural artistry.",
        "image": "./public/images/beds/bed-010.jpg",
        "images": {
            "main": "./public/images/beds/bed-010.jpg",
            "headboard": "./public/images/beds/bed-010-headboard.jpg",
            "frame": "./public/images/beds/bed-010-frame.jpg",
            "detail": "./public/images/beds/bed-010-detail.jpg",
            "storage": "./public/images/beds/bed-010-storage.jpg",
            "lifestyle": "./public/images/beds/bed-010-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": -4000
            },
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Bespoke petal curvature and size",
                "diff": 3500
            }
        ],
        "materials": [
            "Plush Velvet",
            "Textured Boucle",
            "Silky Linen"
        ],
        "colors": [
            {
                "name": "Blush Pink",
                "hex": "#E8C5BE"
            },
            {
                "name": "Warm Cream",
                "hex": "#F4ECE1"
            },
            {
                "name": "Seafoam Grey",
                "hex": "#B5C4BC"
            },
            {
                "name": "Champagne Gold",
                "hex": "#E0CEB5"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Aesthetic Platform)",
                "diff": 0
            },
            {
                "id": "hydraulic",
                "name": "German Gas-Lift Hydraulic Storage",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Hand-sculpted radiating scallop shell fluting with deep contoured channels",
            "Soft-touch luxury velvet upholstery offering gentle tactile indulgence",
            "Seasoned timber internal framework engineered for long-term shape retention",
            "Gently rounded perimeter side rails with concealed metal brackets",
            "Acoustic noise-damped solid timber slat foundation"
        ],
        "specifications": {
            "bedType": "Scalloped Upholstered Bed",
            "frameConstruction": "Kiln-Dried Hardwood & Contoured High-Resilience Foam",
            "upholstery": "Plush Velvet / Textured Bouclé (Soft Touch)",
            "headboardHeight": "51 inches (130 cm)",
            "platformHeight": "12 inches (30 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "6.5 inches (16 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD004",
            "BKPBD009",
            "BKPBD013"
        ]
    },
    {
        "id": 212,
        "code": "BKPBD011",
        "name": "BACKSPACE Low Floating Platform Bed",
        "slug": "low-floating-platform-bed",
        "category": "Beds",
        "tagline": "Minimalist Zen Cantilever Illusion",
        "footer": "Customization available",
        "price": 31490,
        "originalPrice": 40990,
        "discount": "23% OFF",
        "rating": 4.8,
        "reviews": 34,
        "description": "A low-profile platform bed designed to create a clean, visually lightweight appearance. Featuring deeply recessed inset legs that give the bed frame a weightless, floating illusion, complemented by an extended low perimeter ledge.",
        "positioning": "Ideal for Japanese Zen, modern minimalist, and studio bedrooms that prioritize airy open space and low visual mass.",
        "image": "./public/images/beds/bed-011.jpg",
        "images": {
            "main": "./public/images/beds/bed-011.jpg",
            "headboard": "./public/images/beds/bed-011-headboard.jpg",
            "frame": "./public/images/beds/bed-011-frame.jpg",
            "detail": "./public/images/beds/bed-011-detail.jpg",
            "storage": "./public/images/beds/bed-011-storage.jpg",
            "lifestyle": "./public/images/beds/bed-011-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom low platform footprint",
                "diff": 3000
            }
        ],
        "materials": [
            "Matte Timber Veneer",
            "Performance Linen",
            "Soft Textured Weave"
        ],
        "colors": [
            {
                "name": "Natural Oak",
                "hex": "#D2BA99"
            },
            {
                "name": "Warm Walnut",
                "hex": "#5A4434"
            },
            {
                "name": "Matte Beige",
                "hex": "#E3D8C8"
            },
            {
                "name": "Zen Charcoal",
                "hex": "#383635"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Cantilever Floating Illusion)",
                "diff": 0
            }
        ],
        "featuresList": [
            "Deeply recessed heavy steel cantilever subframe creating a floating visual illusion",
            "Ultra low-profile 9-inch platform height aligned with Japanese Zen interior ethos",
            "Extended low perimeter ledge that serves as a bedside tray or book rest",
            "Acoustic noise-free solid wood slat foundation with zero creaks",
            "Clean low-profile horizontal headboard panel that doesn't dominate wall space"
        ],
        "specifications": {
            "bedType": "Low Floating Platform Bed",
            "frameConstruction": "Solid Hardwood Frame & Reinforced Center Steel Substructure",
            "upholstery": "Matte Timber Veneer / Premium Textured Linen",
            "headboardHeight": "38 inches (96 cm)",
            "platformHeight": "9 inches (23 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "Recessed 5 inches (13 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD001",
            "BKPBD006",
            "BKPBD013"
        ]
    },
    {
        "id": 213,
        "code": "BKPBD012",
        "name": "BACKSPACE Rectangular Panel Headboard Bed",
        "slug": "rectangular-panel-headboard-bed",
        "category": "Beds",
        "tagline": "Architectural Geometric Grid Cushioning",
        "footer": "Customization available",
        "price": 32990,
        "originalPrice": 42990,
        "discount": "23% OFF",
        "rating": 4.8,
        "reviews": 37,
        "description": "An upholstered bed with a structured rectangular-panel headboard for a clean, geometric look. Each rectangular quadrant is individually upholstered and cushioned to create balanced symmetry, crisp lines, and versatile elegance.",
        "positioning": "Created for modern apartments and contemporary master bedrooms seeking structured symmetry and tailoring.",
        "image": "./public/images/beds/bed-012.jpg",
        "images": {
            "main": "./public/images/beds/bed-012.jpg",
            "headboard": "./public/images/beds/bed-012-headboard.jpg",
            "frame": "./public/images/beds/bed-012-frame.jpg",
            "detail": "./public/images/beds/bed-012-detail.jpg",
            "storage": "./public/images/beds/bed-012-storage.jpg",
            "lifestyle": "./public/images/beds/bed-012-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": -4000
            },
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom grid configuration and dimensions",
                "diff": 3000
            }
        ],
        "materials": [
            "Textured Heavy Linen",
            "Plush Velvet",
            "Woven Tweed"
        ],
        "colors": [
            {
                "name": "Sand Cream",
                "hex": "#F3EDE2"
            },
            {
                "name": "Charcoal Grey",
                "hex": "#505050"
            },
            {
                "name": "Almond Beige",
                "hex": "#D8CABE"
            },
            {
                "name": "Muted Sage",
                "hex": "#8A9488"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Platform Profile)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Underbed Sliding Drawers",
                "diff": 3500
            },
            {
                "id": "hydraulic",
                "name": "German Gas-Lift Hydraulic Storage",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Geometric grid of rectangular upholstered panels offering balanced symmetry",
            "Plush high-resilience foam padding providing ergonomic lumbar and back support",
            "Solid kiln-dried timber frame with reinforced corner braces",
            "Padded perimeter side rails with seamless tailored fabric wrapping",
            "Acoustic noise-free solid wood slat support system"
        ],
        "specifications": {
            "bedType": "Panel Upholstered Bed",
            "frameConstruction": "Solid Hardwood Frame & Acoustic Foam Core",
            "upholstery": "Textured Heavy Linen / Velvet (Stain Resistant)",
            "headboardHeight": "49 inches (124 cm)",
            "platformHeight": "12.5 inches (32 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "6 inches (15 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD003",
            "BKPBD001",
            "BKPBD008"
        ]
    },
    {
        "id": 214,
        "code": "BKPBD013",
        "name": "BACKSPACE Rounded Upholstered Bed",
        "slug": "rounded-upholstered-bed",
        "category": "Beds",
        "tagline": "Organic Curved Contours & Zero Corners",
        "footer": "Customization available",
        "price": 34490,
        "originalPrice": 44990,
        "discount": "23% OFF",
        "rating": 4.9,
        "reviews": 41,
        "description": "A contemporary upholstered bed with rounded edges and a softer overall silhouette. Featuring gently curved corners throughout the headboard and perimeter frame, eliminating sharp edges for child-friendly elegance and organic warmth.",
        "positioning": "Ideal for families and design lovers embracing curved furniture trends, organic modernism, and tactile bouclé warmth.",
        "image": "./public/images/beds/bed-013.jpg",
        "images": {
            "main": "./public/images/beds/bed-013.jpg",
            "headboard": "./public/images/beds/bed-013-headboard.jpg",
            "frame": "./public/images/beds/bed-013-frame.jpg",
            "detail": "./public/images/beds/bed-013-detail.jpg",
            "storage": "./public/images/beds/bed-013-storage.jpg",
            "lifestyle": "./public/images/beds/bed-013-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom curved radius and dimensions",
                "diff": 3500
            }
        ],
        "materials": [
            "Textured Boucle",
            "Soft Tactile Linen",
            "Molded Velvet"
        ],
        "colors": [
            {
                "name": "Warm Ivory",
                "hex": "#FBF7EE"
            },
            {
                "name": "Cream White",
                "hex": "#F4EFE6"
            },
            {
                "name": "Oatmeal Beige",
                "hex": "#DED3C4"
            },
            {
                "name": "Soft Taupe",
                "hex": "#9C8D7F"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Curved Sculptural Base)",
                "diff": 0
            },
            {
                "id": "hydraulic",
                "name": "Curved Hydraulic Lift Base",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Seamless curved corners eliminate sharp edges, ensuring family safety and calm flow",
            "Chunky textured bouclé or woven linen upholstery with high abrasion resistance",
            "Internal curved multi-ply hardwood structure engineered for lifelong structural shape",
            "Thick wrap-around padded rails that feel soft to the touch from all angles",
            "Acoustic noise-damped solid timber slat foundation"
        ],
        "specifications": {
            "bedType": "Curved Upholstered Bed",
            "frameConstruction": "Curved Plywood & Solid Seasoned Pine Structure",
            "upholstery": "Textured Bouclé / Tactile Linen (High Abrasion Rating)",
            "headboardHeight": "46 inches (117 cm)",
            "platformHeight": "13 inches (33 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "5.5 inches (14 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD001",
            "BKPBD010",
            "BKPBD018"
        ]
    },
    {
        "id": 215,
        "code": "BKPBD014",
        "name": "BACKSPACE Two-Tone Upholstered Bed",
        "slug": "two-tone-upholstered-bed",
        "category": "Beds",
        "tagline": "Modern Dual-Tone Color Contrast",
        "footer": "Customization available",
        "price": 33990,
        "originalPrice": 43990,
        "discount": "23% OFF",
        "rating": 4.8,
        "reviews": 32,
        "description": "A modern upholstered bed featuring two complementary tones for added visual contrast. Seamlessly marries a lighter neutral headboard inner with a deeper contrasting border and perimeter frame, creating sophisticated depth.",
        "positioning": "Created for design-forward interiors that appreciate graphic subtlety, layered color palettes, and bespoke upholstery tailoring.",
        "image": "./public/images/beds/bed-014.jpg",
        "images": {
            "main": "./public/images/beds/bed-014.jpg",
            "headboard": "./public/images/beds/bed-014-headboard.jpg",
            "frame": "./public/images/beds/bed-014-frame.jpg",
            "detail": "./public/images/beds/bed-014-detail.jpg",
            "storage": "./public/images/beds/bed-014-storage.jpg",
            "lifestyle": "./public/images/beds/bed-014-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": -4000
            },
            {
                "name": "Double",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": -2000
            },
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom two-tone size and color combination",
                "diff": 3500
            }
        ],
        "materials": [
            "Dual Fabric (Linen & Velvet Accents)",
            "Woven Tweed Combo",
            "Linen & Leatherette"
        ],
        "colors": [
            {
                "name": "Cream & Mocha",
                "hex": "#D7C4B7"
            },
            {
                "name": "Beige & Slate",
                "hex": "#B0A8A0"
            },
            {
                "name": "Ivory & Terracotta",
                "hex": "#C2846B"
            },
            {
                "name": "Sand & Charcoal",
                "hex": "#736C65"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Platform Profile)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Underbed Sliding Drawers",
                "diff": 3500
            },
            {
                "id": "hydraulic",
                "name": "German Gas-Lift Hydraulic Storage",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Hand-stitched two-tone color blocking creates subtle artistic depth",
            "Contrasting perimeter border accentuates the headboard architecture",
            "Kiln-dried hardwood internal framework with reinforced joint plates",
            "High-density dual-resilience foam padding for lasting ergonomic support",
            "Solid acoustic timber slat foundation for silent sleep"
        ],
        "specifications": {
            "bedType": "Two-Tone Upholstered Bed",
            "frameConstruction": "Solid Kiln-Dried Timber & Reinforced Pine Frame",
            "upholstery": "Dual Texture Linen & Velvet Accents (Stain Resistant)",
            "headboardHeight": "48 inches (122 cm)",
            "platformHeight": "12.5 inches (32 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "6 inches (15 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD003",
            "BKPBD012",
            "BKPBD015"
        ]
    },
    {
        "id": 216,
        "code": "BKPBD015",
        "name": "BACKSPACE Integrated Side Table Bed",
        "slug": "integrated-side-table-bed",
        "category": "Beds",
        "tagline": "All-in-One Unified Bedside Suite",
        "footer": "Customization available",
        "price": 39990,
        "originalPrice": 52990,
        "discount": "25% OFF",
        "rating": 4.9,
        "reviews": 43,
        "description": "A bed design that incorporates side-table functionality into its overall bedroom furniture layout. Features a dramatic wide-spanning upholstered headboard with cantilevered timber floating nightstands on both sides, creating a luxurious architectural hotel suite.",
        "positioning": "Created for master bedrooms seeking a unified, custom-built look that integrates bed and bedside tables in one cohesive statement piece.",
        "image": "./public/images/beds/bed-015.jpg",
        "images": {
            "main": "./public/images/beds/bed-015.jpg",
            "headboard": "./public/images/beds/bed-015-headboard.jpg",
            "frame": "./public/images/beds/bed-015-frame.jpg",
            "detail": "./public/images/beds/bed-015-detail.jpg",
            "storage": "./public/images/beds/bed-015-storage.jpg",
            "lifestyle": "./public/images/beds/bed-015-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (Headboard Width: 104\")",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (Headboard Width: 116\")",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom wall-width spanning headboard",
                "diff": 4000
            }
        ],
        "materials": [
            "Textured Linen & Solid Sheesham Tables",
            "Soft Velvet & Walnut Tables"
        ],
        "colors": [
            {
                "name": "Warm Almond",
                "hex": "#E6D8C8"
            },
            {
                "name": "Sand Cream",
                "hex": "#F4EFE6"
            },
            {
                "name": "Charcoal Taupe",
                "hex": "#4D4640"
            },
            {
                "name": "Olive Mist",
                "hex": "#94988A"
            }
        ],
        "storageOptions": [
            {
                "id": "tables",
                "name": "Dual Floating Nightstands (Included)",
                "diff": 0
            },
            {
                "id": "hydraulic",
                "name": "Add Gas-Lift Hydraulic Bed Base",
                "diff": 6000
            }
        ],
        "featuresList": [
            "Continuous wall-width headboard with two cantilevered floating wooden nightstands",
            "Built-in cable management cutaways for seamless phone charging and bedside lamps",
            "Solid kiln-dried hardwood platform frame with acoustic slat foundation",
            "Floating nightstands eliminate floor legs, making underbed cleaning effortless",
            "Deeply padded backrest panel for five-star hotel reading comfort"
        ],
        "specifications": {
            "bedType": "Integrated Suite Platform Bed",
            "frameConstruction": "Kiln-Dried Hardwood & Solid Timber Floating Nightstand Shelves",
            "upholstery": "Premium Textured Linen / Soft Velvet",
            "headboardHeight": "48 inches (122 cm) | Span: 104\" Queen / 116\" King",
            "platformHeight": "13 inches (33 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "6.5 inches (16 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD006",
            "BKPBD011",
            "BKPBD014"
        ]
    },
    {
        "id": 217,
        "code": "BKPBD016",
        "name": "BACKSPACE Four Poster Canopy Bed",
        "slug": "four-poster-canopy-bed",
        "category": "Beds",
        "tagline": "Architectural Grandeur & Vertical Posts",
        "footer": "Customization available",
        "price": 42990,
        "originalPrice": 56990,
        "discount": "25% OFF",
        "rating": 4.9,
        "reviews": 38,
        "description": "A statement bed featuring a four-poster frame and an elegant canopy-style structure. Hand-joined from solid timber with slender vertical posts and crisp upper crossbars, creating a dramatic architectural room within a room.",
        "positioning": "An iconic architectural centerpiece for high-ceiling master bedrooms, private estates, and luxury resort-style homes.",
        "image": "./public/images/beds/bed-016.jpg",
        "images": {
            "main": "./public/images/beds/bed-016.jpg",
            "headboard": "./public/images/beds/bed-016-headboard.jpg",
            "frame": "./public/images/beds/bed-016-frame.jpg",
            "detail": "./public/images/beds/bed-016-detail.jpg",
            "storage": "./public/images/beds/bed-016-storage.jpg",
            "lifestyle": "./public/images/beds/bed-016-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Queen",
                "dimensions": "60\" × 78\" (152 × 198 cm, 84\"H)",
                "diff": 0
            },
            {
                "name": "King",
                "dimensions": "72\" × 78\" (183 × 198 cm, 84\"H)",
                "diff": 4500
            },
            {
                "name": "Custom Size",
                "dimensions": "Custom canopy height and room dimensions",
                "diff": 4500
            }
        ],
        "materials": [
            "Solid Teak Wood",
            "Seasoned Sheesham Timber",
            "Architectural Steel & Timber"
        ],
        "colors": [
            {
                "name": "Honey Teak Wood",
                "hex": "#B87333"
            },
            {
                "name": "Natural Sheesham",
                "hex": "#6F4E37"
            },
            {
                "name": "Matte Black Steel",
                "hex": "#2B2B2B"
            },
            {
                "name": "Raw White Oak",
                "hex": "#D1BC9A"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (10.5\" Open Clearance)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Underbed Solid Timber Drawers (Pair)",
                "diff": 4500
            }
        ],
        "featuresList": [
            "Four full-height vertical posts with precision-engineered upper canopy tie-beams",
            "Handcrafted mortise-and-tenon interlocking joinery tested for zero wobble",
            "Compatible with sheer curtains, mosquito drapes, or bare minimalist styling",
            "10.5 inches of airy underbed clearance for easy cleaning and ventilation",
            "Heavy-duty solid wood interlocking slat foundation supporting up to 500 kg"
        ],
        "specifications": {
            "bedType": "Four Poster Canopy Bed",
            "frameConstruction": "100% Solid Kiln-Dried Hardwood (Sheesham / Teak)",
            "upholstery": "N/A (Hand-Polished Organic Timber)",
            "headboardHeight": "42 inches (107 cm) | Overall Canopy Height: 84 inches (213 cm)",
            "platformHeight": "14 inches (35 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Interlocking Slats",
            "underbedClearance": "10.5 inches (26.5 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Solid Timber Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid wood slats included)"
        },
        "relatedBedCodes": [
            "BKPBD006",
            "BKPBD005",
            "BKPBD015"
        ]
    },
    {
        "id": 218,
        "code": "BKPBD017",
        "name": "BACKSPACE Compact Single Upholstered Bed",
        "slug": "compact-single-upholstered-bed",
        "category": "Beds",
        "tagline": "Space-Saving Refinement & Compact Comfort",
        "footer": "Customization available",
        "price": 18990,
        "originalPrice": 24990,
        "discount": "24% OFF",
        "rating": 4.8,
        "reviews": 29,
        "description": "A compact single upholstered bed designed for smaller bedrooms, guest rooms, or individual sleeping spaces. Scaled to maximize usable floor area while maintaining BACKSPACE's signature padded headboard and acoustic slat comfort.",
        "positioning": "Ideal for children's bedrooms, teen sanctuaries, guest suites, and studio apartments needing refined space efficiency.",
        "image": "./public/images/beds/bed-017.jpg",
        "images": {
            "main": "./public/images/beds/bed-017.jpg",
            "headboard": "./public/images/beds/bed-017-headboard.jpg",
            "frame": "./public/images/beds/bed-017-frame.jpg",
            "detail": "./public/images/beds/bed-017-detail.jpg",
            "storage": "./public/images/beds/bed-017-storage.jpg",
            "lifestyle": "./public/images/beds/bed-017-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Standard Single",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": 0
            },
            {
                "name": "Large Single",
                "dimensions": "42\" × 75\" (107 × 190 cm)",
                "diff": 2000
            },
            {
                "name": "Custom Single",
                "dimensions": "Bespoke dimensions for nook or alcove",
                "diff": 2500
            }
        ],
        "materials": [
            "Breathable Linen-Cotton",
            "Soft Velvet",
            "Durable Poly-Linen"
        ],
        "colors": [
            {
                "name": "Oatmeal Beige",
                "hex": "#E3DACE"
            },
            {
                "name": "Heather Grey",
                "hex": "#9E9A95"
            },
            {
                "name": "Soft Mint",
                "hex": "#BDCBC0"
            },
            {
                "name": "Warm Cream",
                "hex": "#F4ECE1"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Slimline Platform)",
                "diff": 0
            },
            {
                "id": "drawers",
                "name": "Single Large Side Storage Drawer",
                "diff": 3000
            },
            {
                "id": "hydraulic",
                "name": "Single Gas-Lift Hydraulic Storage",
                "diff": 4500
            }
        ],
        "featuresList": [
            "Compact footprint tailored for small bedrooms, studios, and alcoves",
            "Softly padded slimline headboard with zero wasted frame depth",
            "Kiln-dried seasoned hardwood frame with reinforced joints",
            "Breathable, stain-resistant fabric upholstery easy to spot-clean",
            "Acoustic noise-damped solid timber slat foundation"
        ],
        "specifications": {
            "bedType": "Compact Single Upholstered Bed",
            "frameConstruction": "Solid Seasoned Hardwood & Reinforced Pine",
            "upholstery": "Breathable Linen-Cotton Blend (Stain Resistant)",
            "headboardHeight": "44 inches (112 cm)",
            "platformHeight": "12 inches (30 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "6 inches (15 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; solid slat foundation included)"
        },
        "relatedBedCodes": [
            "BKPBD018",
            "BKPBD001",
            "BKPBD002"
        ]
    },
    {
        "id": 219,
        "code": "BKPBD018",
        "name": "BACKSPACE Upholstered Daybed With Bolsters",
        "slug": "upholstered-daybed-with-bolsters",
        "category": "Beds",
        "tagline": "Day-to-Night Lounging & Bolster Arms",
        "footer": "Customization available",
        "price": 26990,
        "originalPrice": 35990,
        "discount": "25% OFF",
        "rating": 4.9,
        "reviews": 36,
        "description": "A contemporary upholstered daybed featuring rounded bolster-style sides and a low-profile base. Transitions effortlessly from a luxurious daytime lounge sofa to a comfortable nighttime bed, crowned with two cylindrical bolster arms.",
        "positioning": "Perfect for multifunctional guest rooms, home offices, lounges, reading alcoves, and vacation residences.",
        "image": "./public/images/beds/bed-018.jpg",
        "images": {
            "main": "./public/images/beds/bed-018.jpg",
            "headboard": "./public/images/beds/bed-018-headboard.jpg",
            "frame": "./public/images/beds/bed-018-frame.jpg",
            "detail": "./public/images/beds/bed-018-detail.jpg",
            "storage": "./public/images/beds/bed-018-storage.jpg",
            "lifestyle": "./public/images/beds/bed-018-lifestyle.jpg"
        },
        "sizes": [
            {
                "name": "Single Daybed",
                "dimensions": "36\" × 75\" (91 × 190 cm)",
                "diff": 0
            },
            {
                "name": "Double Daybed",
                "dimensions": "48\" × 75\" (122 × 190 cm)",
                "diff": 3500
            },
            {
                "name": "Custom Daybed",
                "dimensions": "Custom lounge and daybed dimensions",
                "diff": 3000
            }
        ],
        "materials": [
            "Textured Boucle",
            "Heavy Woven Linen",
            "Plush Velvet"
        ],
        "colors": [
            {
                "name": "Warm Ivory Boucle",
                "hex": "#FAF6EE"
            },
            {
                "name": "Pebble Cream",
                "hex": "#EAE4D8"
            },
            {
                "name": "Sage Green",
                "hex": "#939E8F"
            },
            {
                "name": "Slate Taupe",
                "hex": "#766F68"
            }
        ],
        "storageOptions": [
            {
                "id": "none",
                "name": "No Storage (Daybed Profile)",
                "diff": 0
            },
            {
                "id": "trundle",
                "name": "Underbed Pull-Out Guest Trundle",
                "diff": 5500
            },
            {
                "id": "drawers",
                "name": "Dual Slide-Out Storage Drawers",
                "diff": 3500
            }
        ],
        "featuresList": [
            "Dual cylindrical bolster arms provide plush arm and neck lounging support",
            "Versatile day-to-night functionality: sofa by day, supportive bed by night",
            "Flush low-profile upholstered base with internal acoustic slatted foundation",
            "High-density reflex foam filling that retains full contour under heavy daily use",
            "Solid kiln-dried hardwood structural subframe engineered for zero wobbling"
        ],
        "specifications": {
            "bedType": "Upholstered Daybed",
            "frameConstruction": "Solid Kiln-Dried Hardwood & High-Density Contoured Foam",
            "upholstery": "Textured Bouclé / Heavy Woven Linen (Soil Resistant)",
            "headboardHeight": "34 inches (86 cm) Backrest | Bolsters 9\" Diameter",
            "platformHeight": "13 inches (33 cm)",
            "slatFoundation": "Solid Acoustic Hardwood Slats",
            "underbedClearance": "5 inches (13 cm)",
            "assembly": "Free White-Glove On-Site Assembly by BACKSPACE Experts",
            "warranty": "10 Years Structural Frame Warranty",
            "mattressIncluded": "No (Mattress sold separately; bolster cushions & slat base included)"
        },
        "relatedBedCodes": [
            "BKPBD017",
            "BKPBD013",
            "BKPBD002"
        ]
    }
];

window.BED_GROUPS = [
    { id: 'all', label: 'All Beds', title: 'ALL BEDS', count: 18, codes: null },
    { id: 'upholstered', label: 'Upholstered Beds', title: 'UPHOLSTERED BEDS', count: 4, codes: ['BKPBD001', 'BKPBD003', 'BKPBD009', 'BKPBD013'] },
    { id: 'storage', label: 'Storage Beds', title: 'STORAGE BEDS', count: 4, codes: ['BKPBD002', 'BKPBD007', 'BKPBD008', 'BKPBD015'] },
    { id: 'wooden', label: 'Wooden & Platform Beds', title: 'WOODEN & PLATFORM BEDS', count: 3, codes: ['BKPBD006', 'BKPBD011', 'BKPBD014'] },
    { id: 'designer', label: 'Designer Headboard Beds', title: 'DESIGNER HEADBOARD BEDS', count: 5, codes: ['BKPBD004', 'BKPBD005', 'BKPBD010', 'BKPBD012', 'BKPBD016'] },
    { id: 'single', label: 'Single & Daybeds', title: 'SINGLE & DAYBEDS', count: 2, codes: ['BKPBD017', 'BKPBD018'] }
];
