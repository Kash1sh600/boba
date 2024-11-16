import React, { useState } from 'react';
import './Menu.css';

// Import images
import coffeeImage from './images2/Coffee-Bubble-Milk.jpeg';
import mangoImage from './images2/Mango.jpg';
import taroImage from './images2/Taro-bubble-milk.jpeg';
import matchaImage from './images2/Matcha-Bubble-Milk.jpeg';
import strawberryImage from './images2/Fresh-Fruit-Infused-Tea-Strawberry.jpeg';
import blackTeaImage from './images2/Black-Tea-Bubble-Milk.jpeg';
import pineappleImage from './images2/Pineapple-fresh-fruit-infused-tea.jpeg';
import specialsImage from './images2/Specials-fruit-mixed-tea.jpeg';
import customizeImage from './images2/customize-button.png';

// Reorder menuItems to make Banana Chocolate the first item
const menuItems = [
  { title: 'You can make your own drink now!!', image: customizeImage },
  { title: 'Coffee', type: 'Bubble Milk', image: coffeeImage },
  { title: 'Mango', type: 'Fresh Fruit Infused Tea', image: mangoImage },
  { title: 'Taro', type: 'Bubble Milk', image: taroImage },
  { title: 'Matcha', type: 'Bubble Milk', image: matchaImage },
  { title: 'Strawberry', type: 'Fresh Fruit Infused Tea', image: strawberryImage },
  { title: 'Black Tea', type: 'Bubble Milk', image: blackTeaImage },
  { title: 'Pineapple', type: 'Fresh Fruit Infused Tea', image: pineappleImage },
  { title: 'Specials', type: 'Fruit Mixed Tea', image: specialsImage },
];

const Menu = () => {
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (index) => {
    setQuantities({ ...quantities, [index]: (quantities[index] || 1) + 1 });
  };

  const handleDecrement = (index) => {
    if (quantities[index] > 1) {
      setQuantities({ ...quantities, [index]: quantities[index] - 1 });
    }
  };

  const addToCart = (index) => {
    const quantity = quantities[index] || 1;
    alert(`Added ${quantity} x ${menuItems[index].title} to cart!`);
  };

  return (
    
    <div className="menu-container">
        <p>Our Menu</p>
      <div className="menu-grid">
        
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.title} className="menu-image" />
            <span className="menu-type">{item.type}</span>
            <h3 className="menu-title">{item.title}</h3>
            {/* Add special button for Banana Chocolate */}
            {item.title === 'You can make your own drink now!!' ? (
              <button
                className="customize-drink-button"
                onClick={() => (window.location.href = '/customize')} // Redirect to the new page
              >
                Customize Your Drink →
              </button>
            ) : (
              <div className="menu-actions">
                <div className="quantity-container">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrement(index)}
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantities[index] || 1}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrement(index)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(index)}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Menu;
