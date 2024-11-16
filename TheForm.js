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

  const milkBasedOptions = [
    'Classic Milk Tea',
    'Brown Sugar Milk Tea',
    'Matcha Milk Tea',
    'Taro Milk Tea',
    'Thai Milk Tea',
    'Honeydew Milk Tea',
  ];

  const waterBasedOptions = ['Strawberry Fruit Tea', 'Passionfruit Tea', 'Mango Green Tea'];

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setActiveSize(newSize);
    setLiquidHeight(0); // Reset liquid height when size changes
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
          'Taro Milk Tea': 'rgba(140, 90, 60, 0.8)',
          'Thai Milk Tea': 'rgba(242, 85, 44, 0.8)',
          'Honeydew Milk Tea': 'rgba(173, 255, 47, 0.8)',
        }[flavor] || 'rgba(255, 192, 203, 0.6)',
      );
    } else if (drinkType === 'water') {
      setLiquidColor(
        {
          'Strawberry Fruit Tea': 'rgba(238, 69, 148, 0.3)',
          'Passionfruit Tea': 'rgba(220, 117, 48, 0.3)',
          'Mango Green Tea': 'rgba(255, 204, 51, 0.3)',
        }[flavor] || 'rgba(255, 192, 203, 0.6)',
      );
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
      <div className="milk-options"> {/* Updated class name */}
        {milkBasedOptions.map((flavor) => (
          <button 
            key={flavor} 
            onClick={() => handleFlavorChange(flavor)} 
            className="flavor-button"
          >
            {flavor}
          </button>
        ))}
      </div>
    )}
    {drinkType === 'water' && (
      <div className="water-options"> {/* Updated class name */}
        {waterBasedOptions.map((flavor) => (
          <button 
            key={flavor} 
            onClick={() => handleFlavorChange(flavor)} 
            className="flavor-button"
          >
            {flavor}
          </button>
        ))}
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
                key={topping.id}
                className={`${topping.type}`}
                initial={{
                  y: -100,
                  x: Math.random() * 100 - 50,
                }}
                animate={{
                  y: [0, 140, 160],
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                  duration: 1.2,
                }}
              />
            ))}
            {iceAdded &&
              Array.from({ length: 10 }, (_, index) => (
                <motion.div
                  key={index}
                  className="ice-cube"
                  initial={{
                    y: -100,
                    x: Math.random() * 100 - 50,
                  }}
                  animate={{
                    y: [0, 140, 160],
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 1.2,
                  }}
                />
              ))}
          </div>
        </div>
        {drinkType && <button onClick={handleFillCup}>Fill My Cup</button>}
      </div>
    </div>
  );
};

export default TheForm;
