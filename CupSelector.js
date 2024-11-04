import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CupSelector.css';

const CupSelector = () => {
  const [size, setSize] = useState('');
  const [drinkType, setDrinkType] = useState('');
  const [liquidHeight, setLiquidHeight] = useState(0);
  const [liquidColor, setLiquidColor] = useState('rgba(255, 192, 203, 0.6)');
  const [flavorSelected, setFlavorSelected] = useState(false);
  const [pendingFlavor, setPendingFlavor] = useState(null);
  const [topping, setTopping] = useState('');
  const [toppingsList, setToppingsList] = useState([]);
  const [showAddToppingButton, setShowAddToppingButton] = useState(false);
  const [iceAdded, setIceAdded] = useState(false);

  const handleSizeChange = (newSize) => {
    setSize(newSize);
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
      setLiquidHeight(0); // Empty the cup with the current flavor
      setPendingFlavor(flavor); // Set the new flavor as pending
    } else {
      applyFlavor(flavor); // Directly apply if cup is empty
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
      setLiquidColor('rgba(135, 206, 250, 0.6)');
    }
    setPendingFlavor(null); // Clear pending flavor
  };

  const handleFillCup = () => {
    const maxHeight = { small: 90, medium: 135, large: 180 }[size] || 0;

    if (pendingFlavor) {
      applyFlavor(pendingFlavor); // Apply pending flavor before filling
    }

    setLiquidHeight(maxHeight);
  };

  const handleToppingChange = (selectedTopping) => {
    setTopping(selectedTopping);
    setShowAddToppingButton(true);
    setFlavorSelected(false);
  };

  const handleAddTopping = () => {
    const newToppings = Array.from({ length: 10 }, (_, index) => ({
      type: topping,
      id: Date.now() + index,
    }));
    setToppingsList(newToppings); // Replaces previous toppings
    setShowAddToppingButton(false);
    setTopping('');
  };

  // Reset function to clear all selections
  const handleReset = () => {
    setSize('');
    setDrinkType('');
    setLiquidHeight(0); // Immediately set liquid height to 0
    setLiquidColor('rgba(255, 192, 203, 0.6)');
    setFlavorSelected(false);
    setTopping('');
    setToppingsList([]);
    setShowAddToppingButton(false);
    setPendingFlavor(null);
    setIceAdded(false); // Reset ice
  };

  // Handle Ice addition
  const handleIceChange = (addIce) => {
    setIceAdded(addIce);
  };

  return (
    <div className="cup-selector">
      {/* Size and Drink Type Buttons */}
      <div className="size-buttons">
        <button onClick={() => handleSizeChange('small')}>Small</button>
        <button onClick={() => handleSizeChange('medium')}>Medium</button>
        <button onClick={() => handleSizeChange('large')}>Large</button>
      </div>
      <div className="drink-type-buttons">
        <button onClick={() => handleDrinkTypeChange('milk')}>Milk-based</button>
        <button onClick={() => handleDrinkTypeChange('water')}>Water-based</button>
      </div>

      {/* Flavor Selection */}
      {drinkType && (
        <div className="flavor-buttons">
          {drinkType === 'milk' && (
            <>
              <button onClick={() => handleFlavorChange('Classic Milk Tea')}>Classic Milk Tea</button>
              <button onClick={() => handleFlavorChange('Brown Sugar Milk Tea')}>Brown Sugar Milk Tea</button>
              <button onClick={() => handleFlavorChange('Matcha Milk Tea')}>Matcha Milk Tea</button>
            </>
          )}
          {drinkType === 'water' && (
            <>
              <button onClick={() => handleFlavorChange('Strawberry Fruit Tea')}>Strawberry Fruit Tea</button>
              <button onClick={() => handleFlavorChange('Passionfruit Tea')}>Passionfruit Tea</button>
            </>
          )}
        </div>
      )}

      {/* Topping Selection */}
      <div className="topping-buttons">
        <button onClick={() => handleToppingChange('boba')}>Add Boba</button>
        <button onClick={() => handleToppingChange('poppingBoba')}>Add Popping Boba</button>
        <button onClick={() => handleToppingChange('fruitJelly')}>Add Fruit Jelly</button>
      </div>
      {showAddToppingButton && <button onClick={handleAddTopping}>Add {topping}</button>}

      {/* Ice Selection */}
      <div className="ice-buttons">
        <button onClick={() => handleIceChange(true)}>Ice</button>
        <button onClick={() => handleIceChange(false)}>No Ice</button>
      </div>

      {/* Reset Button */}
      <button onClick={handleReset}>Reset</button>

      {/* Cup Animation */}
      <div className="cup-animation">
        <div className={`cup ${size}`}>
          <motion.div
            className="liquid"
            style={{ backgroundColor: liquidColor }}
            animate={{ height: `${liquidHeight}px` }}
            transition={{ duration: 0 }} // No animation for immediate reset
          />
          {toppingsList.map((topping, index) => (
            <motion.div
              key={topping.id}
              className={`topping ${topping.type}`}
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 60 + Math.floor(index / 5) * 15,
                opacity: 1,
                transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
              }}
              style={{
                left: `${(index % 5) * 15 + 20}px`,
                position: 'absolute',
                bottom: '10px',
              }}
            >
              {topping.type === 'boba' && <div className="boba" />}
              {topping.type === 'poppingBoba' && <div className="poppingBoba" />}
              {topping.type === 'fruitJelly' && <div className="fruitJelly" />}
            </motion.div>
          ))}
          
          {/* Ice Cubes Animation */}
          {iceAdded && Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={`ice-${index}`}
              className="ice-cube"
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: [70, 40], // Falls to 70px and rises back to 40px
                opacity: 1,
                transition: { delay: index * 0.2, duration: 1, ease: "easeOut" },
              }}
              style={{
                left: `${20 + index * 15}px`,
                position: 'absolute',
              }}
            />
          ))}
        </div>
      </div>

      {/* Fill My Cup Button */}
      {flavorSelected || pendingFlavor ? (
        <button onClick={handleFillCup}>Fill My Cup</button>
      ) : null}
    </div>
  );
};

export default CupSelector;
