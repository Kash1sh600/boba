import React, { useState } from 'react';
import './TheForm.css';
import { motion } from 'framer-motion';

const TheForm = () => {
  const [size, setSize] = useState('');
  const [activeSize, setActiveSize] = useState('');
  const [drinkType, setDrinkType] = useState('');
  const [liquidHeight, setLiquidHeight] = useState(0);
  const [liquidColor, setLiquidColor] = useState('rgba(255, 192, 203, 0.6)');
  const [flavorSelected, setFlavorSelected] = useState(false);
  const [pendingFlavor, setPendingFlavor] = useState(null);
  const [topping, setTopping] = useState('');
  const [toppingsList, setToppingsList] = useState([]);
  const [showAddToppingButton, setShowAddToppingButton] = useState(false);
  const [iceAdded, setIceAdded] = useState(false);
  const [showPoppingBobaFlavors, setShowPoppingBobaFlavors] = useState(false);
  const [poppingBobaFlavor, setPoppingBobaFlavor] = useState('');

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setActiveSize(newSize);
    setLiquidHeight(0);
    setFlavorSelected(false);
    setToppingsList([]);
  };

  const handleDrinkTypeChange = (type) => {
    setDrinkType(type);
    setLiquidHeight(0);
    setFlavorSelected(false);
  };

  const handleFlavorChange = (flavor) => {
    if (flavorSelected) {
      setLiquidHeight(0);
      setPendingFlavor(flavor);
    } else {
      applyFlavor(flavor);
    }
  };

  const applyFlavor = (flavor) => {
    setFlavorSelected(true);
    if (drinkType === 'milk') {
      setLiquidColor(
        {
          'Classic Milk Tea': 'rgba(160, 82, 45, 0.8)',
          'Brown Sugar Milk Tea': 'rgba(139, 69, 19, 0.8)',
          'Matcha Milk Tea': 'rgba(34, 139, 34, 0.8)',
        }[flavor] || 'rgba(255, 192, 203, 0.6)'
      );
    } else if (drinkType === 'water') {
      setLiquidColor(
        {'Strawberry Fruit Tea':'rgba(238, 69, 148, 0.3)',
          'Passionfruit Tea':'rgba(220, 117, 48, 0.3)',
        }[flavor] || 'rgba(255, 192, 203, 0.6)');
    }
    setPendingFlavor(null);
  };

  const handleFillCup = () => {
    const maxHeight = { small: 90, medium: 135, large: 180 }[size] || 0;
    if (pendingFlavor) {
      applyFlavor(pendingFlavor);
    }
    setLiquidHeight(maxHeight);
  };

  const handleToppingChange = (selectedTopping) => {
    setTopping(selectedTopping);
    setShowAddToppingButton(true);
    if (selectedTopping === 'poppingBoba') {
      setShowPoppingBobaFlavors(true);
    } else {
      setShowPoppingBobaFlavors(false);
    }
  };

  const handlePoppingBobaFlavorSelect = (flavor) => {
    setPoppingBobaFlavor(flavor);
    setShowAddToppingButton(false);
    setShowPoppingBobaFlavors(false);
    handleAddTopping(`poppingBoba-${flavor}`);
  };

  const handleAddTopping = (flavor = topping) => {
    const newToppings = Array.from({ length: 10 }, (_, index) => ({
      type: flavor,
      id: Date.now() + index,
    }));
    setToppingsList(newToppings);
    setShowAddToppingButton(false);
  };

  const handleReset = () => {
    setSize('');
    setActiveSize('');
    setDrinkType('');
    setLiquidHeight(0);
    setLiquidColor('rgba(255, 192, 203, 0.6)');
    setFlavorSelected(false);
    setTopping('');
    setToppingsList([]);
    setShowAddToppingButton(false);
    setPendingFlavor(null);
    setIceAdded(false);
    setShowPoppingBobaFlavors(false);
    setPoppingBobaFlavor('');
  };

  const handleIceChange = (addIce) => {
    setIceAdded(addIce);
  };

  return (
    <div className='background'>
      <div className="cup-selector">
        <div className="size-buttons">
          <button
            className={`small ${activeSize === 'small' ? 'active' : ''}`}
            onClick={() => handleSizeChange('small')}
          ></button>
          <button
            className={`medium ${activeSize === 'medium' ? 'active' : ''}`}
            onClick={() => handleSizeChange('medium')}
          ></button>
          <button
            className={`large ${activeSize === 'large' ? 'active' : ''}`}
            onClick={() => handleSizeChange('large')}
          ></button>
        </div>
        <div className="drink-type-buttons">
          <button onClick={() => handleDrinkTypeChange('milk')}>Milk-based</button>
          <button onClick={() => handleDrinkTypeChange('water')}>Water-based</button>
        </div>
        {drinkType && (
          <div className="flavor-buttons">
            {drinkType === 'milk' && (
              <div className="milk-options">
               
  <button onClick={() => handleFlavorChange('Classic Milk Tea')}>Classic Milk Tea</button>
  <button onClick={() => handleFlavorChange('Brown Sugar Milk Tea')}>Brown Sugar Milk Tea</button>
  <button onClick={() => handleFlavorChange('Matcha Milk Tea')}>Matcha Milk Tea</button>
  <button onClick={() => handleFlavorChange('Taro Milk Tea')}>Taro Milk Tea</button>
  <button onClick={() => handleFlavorChange('Thai Milk Tea')}>Thai Milk Tea</button>
  <button onClick={() => handleFlavorChange('Honeydew Milk Tea')}>Honeydew Milk Tea</button>
</div>

            )}
            {drinkType === 'water' && (
              <div className="water-options">
                
  <button onClick={() => handleFlavorChange('Strawberry Fruit Tea')}>Strawberry Fruit Tea</button>
  <button onClick={() => handleFlavorChange('Passionfruit Tea')}>Passionfruit Tea</button>
  <button onClick={() => handleFlavorChange('Mango Fruit Tea')}>Mango Fruit Tea</button>
</div>

            )}
          </div>
        )}
        <div className="topping-buttons">
          <button onClick={() => handleToppingChange('boba')}>Boba</button>
          <button onClick={() => handleToppingChange('poppingBoba')}>Popping Boba</button>
          <button onClick={() => handleToppingChange('fruitJelly')}>Fruit Jelly</button>
        </div>
        {showPoppingBobaFlavors && (
          <div className="popping-boba-flavors">
            <div className="popping-boba-button-row">
              {['Yogurt', 'Mango', 'Blueberry', 'Strawberry', 'Peach', 'Passion fruit'].map((flavor) => (
                <button 
                  key={flavor} 
                  onClick={() => handlePoppingBobaFlavorSelect(flavor)}
                  className="popping-boba-button"
                >
                  {flavor} Popping Boba
                </button>
              ))}
            </div>
          </div>
        )}
        {showAddToppingButton && !showPoppingBobaFlavors && (
          <button onClick={() => handleAddTopping()}>Add {topping}</button>
        )}
        <div className="ice-buttons">
          <button className="ice-button" onClick={() => handleIceChange(true)}>Ice</button>
          <button className="no-ice-button" onClick={() => handleIceChange(false)}>No Ice</button>
        </div>
      </div>
      <div className='right-side'>
        <button onClick={handleReset}>Reset</button>
        <div className="cup-animation">
          <div className={`cup ${size}`}>
            <motion.div
              className="liquid"
              style={{ backgroundColor: liquidColor }}
              animate={{ height: `${liquidHeight}px` }}
              transition={{ duration: 0 }}
            />
           {toppingsList.map((topping, index) => (
  <motion.div
    key={topping.id}  // Unique key for each topping
    className={`${topping.type}`} // Ensure a unique class for each topping type (boba, popping boba, etc.)
    initial={{
      y: -100,  // Start above the cup
      x: Math.random() * 100 - 50, // Random horizontal position near the top for a natural fall
      opacity: 1,
      rotate: Math.random() * 360,  // Random rotation for a more natural fall
    }}
    animate={{
      y: 0,  // Final position at the bottom (y=0 for settling at the cup's bottom)
      x: Math.random() * 100 - 50,  // Randomize horizontal position within the cup's width (adjust this value if needed)
      opacity: 1,
      rotate: 0,  // Rotate back to normal after falling
      scale: Math.random() * 0.2 + 0.8,  // Random scale for realism
      transition: {
        delay: index * 0.1,  // Stagger the fall
        duration: 0.8 + Math.random() * 0.2,  // Slight randomness in fall speed
        ease: "easeOut",  // Smooth deceleration
      },
    }}
    style={{
      position: 'absolute',
      bottom: '10px',  // Ensures toppings settle at the bottom of the cup
      left: `calc(50% + ${Math.random() * 40 - 20}px)`,  // Randomized horizontal position at the bottom
      width: topping.type === 'boba' ? '20px' : '25px',  // Sizes for different toppings
      height: topping.type === 'boba' ? '20px' : '25px',
      borderRadius: topping.type === 'boba' ? '50%' : '0%',  // Round for boba, square for other toppings
      backgroundColor: 
        topping.type === 'boba' ? 'rgba(0, 0, 0, 0.8)' :  // Black with transparency for boba
        topping.type === 'poppingBoba' ? 'rgba(255, 0, 0, 0.6)' :  // Red with transparency for popping boba
        topping.type === 'fruitJelly' ? 'rgba(157, 34, 48, 0.7)' :  // Orange with transparency for fruit jelly
        'transparent',  // Default to transparent if no topping type matches
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',  // Adds depth
    }}
    
    
  />
))}



             {/* Ice Cubes Animation */}
             {iceAdded && Array.from({ length: 5 }).map((_, index) => (
  <motion.div
    key={`ice-${index}`}
    className="ice-cube"
    initial={{ y: -50, opacity: 0, rotate: 0 }}
    animate={{
      y: [70, 40 + Math.random() * 20, 60 + Math.random() * 10], // Random vertical settling
      opacity: 1,
      rotate: [-15 + Math.random() * 30, 10, 0], // Small random rotation effect
      x: [0, Math.random() * 40 - 20, 0], // Randomized horizontal position (more variation)
    }}
    transition={{
      delay: index * 0.2, // Staggered delay for each ice cube
      duration: 1.5, // Slower animation for gradual effect
      ease: "easeOut",
    }}
    style={{
      left: `${5 + (index * 20)}px`, // Increased horizontal spacing between ice cubes
      position: 'absolute',
    }}
  />
))}

        </div>
      </div>
        {flavorSelected || pendingFlavor ? (
          <button onClick={handleFillCup}>Fill Cup</button>
        ) : (
          <button disabled>Please select a flavor</button>
        )}
      </div>
    </div>
  );
};

export default TheForm;
