import React from 'react';
import Counter from './Counter';
import Cart from './Cart'
import './App.css';

const cartItems = [
  {id: 1, name: 'Samsung Galaxy A51', price: 15000, qty: 1},
  {id: 2, name: 'Gloves', price: 150, qty: 2},
  {id: 3, name: 'Mask', price: 200, qty: 4}
]

function App() {
  return (
    <div className="App">
      <Cart initialItems={cartItems}/>
      {/* <Counter step={17}/> */}
    </div>
  );
}

export default App;
