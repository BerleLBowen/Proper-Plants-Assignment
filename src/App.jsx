import React, { useState } from 'react';

import PLANTS from './data.js'; 
import PlantList from './plantlist.jsx';
import Cart from './Cart';

export default function App() {

  const [cart, setCart] = useState([]);
  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === plant.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === plant.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const updateQuantity = (plantId, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item =>
        item.id === plantId 
          ? { ...item, quantity: item.quantity + amount } 
          : item
      );

      return updatedCart.filter(item => item.quantity > 0);
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Proper Plants</h1>
      </header>
      
      <main style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <PlantList plants={PLANTS} onAddToCart={addToCart} />
        
        <Cart cartItems={cart} onUpdateQuantity={updateQuantity} />
      </main>
    </div>
  );
}