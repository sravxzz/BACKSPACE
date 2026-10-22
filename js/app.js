const products = [
  {
    id: 'm1',
    name: 'BACKSPACE Premium Memory Foam Mattress',
    category: 'mattresses',
    type: 'Memory Foam',
    shortDesc: 'Short product description goes here.',
    priceStr: '₹XX,XXX',
    image: 'https://images.unsplash.com/photo-1595526114101-23b5bf06a206?auto=format&fit=crop&q=80&w=800',
    sizes: ['Single', 'Double', 'Queen', 'King'],
    thickness: ['Select Thickness', '5 inch', '6 inch', '8 inch'],
    material: 'Add material',
    firmness: 'Add firmness',
    warranty: 'Add warranty'
  },
  {
    id: 'm2',
    name: 'BACKSPACE Orthopedic Care Mattress',
    category: 'mattresses',
    type: 'Orthopedic',
    shortDesc: 'Short product description goes here.',
    priceStr: '₹XX,XXX',
    image: 'https://images.unsplash.com/photo-1631679700053-14c1eb25866b?auto=format&fit=crop&q=80&w=800',
    sizes: ['Single', 'Double', 'Queen', 'King'],
    thickness: ['Select Thickness', '5 inch', '6 inch'],
    material: 'Add material',
    firmness: 'Add firmness',
    warranty: 'Add warranty'
  },
  {
    id: 'b1',
    name: 'BACKSPACE Solid Wooden Bed',
    category: 'beds',
    type: 'Wooden Beds',
    shortDesc: 'Short product description goes here.',
    priceStr: '₹XX,XXX',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800',
    sizes: ['Single', 'Queen', 'King'],
    dimensions: 'Add dimensions',
    material: 'Add material',
    colors: ['Select Color', 'Natural', 'Walnut']
  },
  {
    id: 'b2',
    name: 'BACKSPACE Premium Storage Bed',
    category: 'beds',
    type: 'Storage Beds',
    shortDesc: 'Short product description goes here.',
    priceStr: '₹XX,XXX',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    sizes: ['Queen', 'King'],
    dimensions: 'Add dimensions',
    material: 'Add material',
    colors: ['Select Color', 'Grey', 'Beige']
  }
];

document.addEventListener('alpine:init', () => {
  Alpine.store('cart', {
    items: JSON.parse(localStorage.getItem('bg_cart_simple')) || [],
    
    add(product, size, thickness, color, quantity = 1) {
      const existing = this.items.find(i => i.id === product.id && i.size === size && i.thickness === thickness && i.color === color);
      if (existing) {
        existing.quantity += parseInt(quantity);
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          priceStr: product.priceStr,
          image: product.image,
          size: size,
          thickness: thickness || null,
          color: color || null,
          quantity: parseInt(quantity)
        });
      }
      this.save();
      window.showToast('Added to cart!');
    },
    
    remove(id, size, thickness, color) {
      this.items = this.items.filter(i => !(i.id === id && i.size === size && i.thickness === thickness && i.color === color));
      this.save();
    },
    
    updateQuantity(id, size, thickness, color, qty) {
      const item = this.items.find(i => i.id === id && i.size === size && i.thickness === thickness && i.color === color);
      if (item) {
        item.quantity = parseInt(qty);
        if (item.quantity <= 0) this.remove(id, size, thickness, color);
      }
      this.save();
    },
    
    get count() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    
    save() {
      localStorage.setItem('bg_cart_simple', JSON.stringify(this.items));
    },
    
    clear() {
      this.items = [];
      this.save();
    }
  });
});

window.getProduct = (id) => {
  return products.find(p => p.id === id);
};

window.getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

window.showToast = (msg) => {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-24 right-6 bg-charcoal text-white px-6 py-3 rounded-full shadow-lg z-50 transform transition-all duration-300 translate-y-10 opacity-0';
  toast.innerText = msg;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 100);
  
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

window.buyNowWhatsApp = (productName, size, thickness, color, qty, priceStr) => {
  const phone = "916300946652";
  let text = `Hello Backspace Go,\n\nI would like to purchase the following product:\n\nProduct: ${productName}\n`;
  if(size) text += `Size: ${size}\n`;
  if(thickness && thickness !== 'Select Thickness') text += `Thickness: ${thickness}\n`;
  if(color && color !== 'Select Color') text += `Color: ${color}\n`;
  text += `Quantity: ${qty}\nPrice: ${priceStr}\nTotal: ${priceStr}\n\nPlease confirm availability and delivery details.\n\nThank you.`;
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

window.cartWhatsApp = (items) => {
  const phone = "916300946652";
  let text = `Hello Backspace Go,\n\nI would like to purchase the following products:\n\n`;
  
  items.forEach((item, index) => {
    text += `${index+1}. Product: ${item.name}\n`;
    if(item.size && item.size !== 'Select Size') text += `   Size: ${item.size}\n`;
    if(item.thickness && item.thickness !== 'Select Thickness') text += `   Thickness: ${item.thickness}\n`;
    if(item.color && item.color !== 'Select Color') text += `   Color: ${item.color}\n`;
    text += `   Quantity: ${item.quantity}\n`;
    text += `   Price: ${item.priceStr}\n\n`;
  });
  
  text += `Total: ₹XX,XXX\n\nPlease confirm availability and delivery details.\n\nThank you.`;
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};
