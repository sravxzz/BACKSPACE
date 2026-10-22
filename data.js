export const initialProducts = [
  {
    id: 'p1',
    name: 'BACKSPACE Comfort Foam Mattress',
    description: 'Designed for everyday comfort with high-density foam that adapts to your body.',
    category: 'Memory Foam',
    image: 'images/products/p02_ortho_comfort.jpg', images: ['images/products/p02_ortho_comfort.jpg'],
    material: 'High-density Foam',
    thickness: ['6 inch', '8 inch'],
    firmness: 'Medium Firm',
    sizes: ['Single', 'Double', 'Queen', 'King'],
    prices: {
      'Single': 8999,
      'Double': 10999,
      'Queen': 12999,
      'King': 14999
    },
    mrpPrices: {
      'Single': 12999,
      'Double': 14999,
      'Queen': 16999,
      'King': 18999
    },
    warranty: '5 Years',
    stock: 'In Stock',
    sku: 'BS-COMFORT-001',
    offer: 'Bestseller',
    featured: true,
    reviews: [
      { author: 'Rahul K.', text: 'Very comfortable mattress and good quality.' },
      { author: 'Priya S.', text: 'Comfortable and worth the price. Delivery was smooth.' }
    ]
  },
  {
    id: 'p2',
    name: 'BACKSPACE Premium Latex Mattress',
    description: 'Experience the ultimate luxury and natural cooling with our premium latex blend.',
    category: 'Latex',
    image: 'images/products/p03_ortho_hybrid.jpg', images: ['images/products/p03_ortho_hybrid.jpg'],
    material: 'Natural Latex + Foam',
    thickness: ['6 inch', '8 inch', '10 inch'],
    firmness: 'Medium Firm',
    sizes: ['Single', 'Queen', 'King'],
    prices: {
      'Single': 14999,
      'Queen': 21999,
      'King': 24999
    },
    mrpPrices: {
      'Single': 18999,
      'Queen': 26999,
      'King': 30999
    },
    warranty: '7 Years',
    stock: 'In Stock',
    sku: 'BS-LATEX-002',
    offer: 'Premium',
    featured: true,
    reviews: [
      { author: 'Amit V.', text: 'Excellent back support and very premium feel.' }
    ]
  },
  {
    id: 'p3',
    name: 'BACKSPACE Orthopedic Support Mattress',
    description: 'Firm support-focused mattress for optimal spinal alignment and pain relief.',
    category: 'Orthopedic Support',
    image: 'images/products/p01_ortho_support.jpg', images: ['images/products/p01_ortho_support.jpg'],
    material: 'High-density Support Foam',
    thickness: ['6 inch'],
    firmness: 'Firm',
    sizes: ['Single', 'Double', 'Queen', 'King'],
    prices: {
      'Single': 11999,
      'Double': 13999,
      'Queen': 15999,
      'King': 17999
    },
    mrpPrices: {
      'Single': 15999,
      'Double': 17999,
      'Queen': 19999,
      'King': 22999
    },
    warranty: '5 Years',
    stock: 'In Stock',
    sku: 'BS-ORTHO-003',
    offer: '15% OFF',
    featured: true,
    reviews: [
      { author: 'Sunita M.', text: 'Helped a lot with my back pain. Highly recommend.' }
    ]
  },
  {
    id: 'p4',
    name: 'BACKSPACE Cloud Memory Foam Mattress',
    description: 'Plush, cloud-like comfort that hugs your body for a deeply restful sleep.',
    category: 'Memory Foam',
    images: ['images/cloud_memory_foam_1790608670815.jpg'],
    material: 'Memory Foam + Support Foam',
    thickness: ['6 inch', '8 inch'],
    firmness: 'Medium Soft',
    sizes: ['Single', 'Double', 'Queen', 'King'],
    prices: {
      'Single': 12999,
      'Double': 14999,
      'Queen': 16999,
      'King': 18999
    },
    mrpPrices: {
      'Single': 16999,
      'Double': 19999,
      'Queen': 21999,
      'King': 24999
    },
    warranty: '5 Years',
    stock: 'In Stock',
    sku: 'BS-CLOUD-004',
    offer: '',
    featured: false,
    reviews: [
      { author: 'Karan J.', text: 'Like sleeping on a cloud. So soft and cozy.' }
    ]
  },
  {
    id: 'p5',
    name: 'BACKSPACE Classic Spring Mattress',
    description: 'Traditional bouncy feel with pocket springs and foam top for zero partner disturbance.',
    category: 'Spring',
    images: ['images/classic_spring_1790608874015.jpg'],
    material: 'Pocket Spring + Foam',
    thickness: ['8 inch', '10 inch'],
    firmness: 'Medium Firm',
    sizes: ['Single', 'Double', 'Queen', 'King'],
    prices: {
      'Single': 10999,
      'Double': 13999,
      'Queen': 15999,
      'King': 18999
    },
    mrpPrices: {
      'Single': 14999,
      'Double': 18999,
      'Queen': 21999,
      'King': 24999
    },
    warranty: '5 Years',
    stock: 'Limited Stock',
    sku: 'BS-SPRING-005',
    offer: 'Sale',
    featured: false,
    reviews: [
      { author: 'Vikram S.', text: 'Good quality spring mattress, very supportive.' }
    ]
  },
  {
    id: 'p6',
    name: 'BACKSPACE Cool Gel Mattress',
    description: 'Advanced cooling gel technology embedded in premium memory foam.',
    category: 'Premium',
    images: ['images/close_up_texture_1790608850802.jpg'],
    material: 'Gel Memory Foam + Support Foam',
    thickness: ['7 inch', '9 inch'],
    firmness: 'Medium Firm',
    sizes: ['Single', 'Queen', 'King'],
    prices: {
      'Single': 13999,
      'Queen': 20999,
      'King': 23999
    },
    mrpPrices: {
      'Single': 18999,
      'Queen': 25999,
      'King': 28999
    },
    warranty: '7 Years',
    stock: 'In Stock',
    sku: 'BS-COOL-006',
    offer: 'New Arrival',
    featured: true,
    reviews: [
      { author: 'Neha R.', text: 'Keeps me cool all night. The fabric feels very premium.' }
    ]
  }
];
