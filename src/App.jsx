import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', inStock: false },
];
const App = () => {
  
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(true);
  // TODO: Implement state for cart management
  const [cartManagement, setCartManagement] = useState([]);
  // TODO: Implement state for category filtering
  const [category, setCategory] = useState('all');
  console.log(darkMode);
 const toggleDarkMode = () => setDarkMode(prev => !prev);
 const handleAddRemoveFromCart = (product) =>{
  const exists = cartManagement.find(item=> item.id===product.id);
  if (exists) {
    setCartManagement(cartManagement.filter(item => item.id !== product.id))
  }
  else {
    setCartManagement([...cartManagement,product])
  }
 }
 const handleFilterChange =(e)=>{
  setCategory(e.target.value)
 }
 const filteredProducts = category === 'all' ? sampleProducts : sampleProducts.filter(p=>p.category===category)
  return (
    <div className={darkMode ? "darkMode" : "lightMode"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle setDarkMode={toggleDarkMode} darkMode={darkMode}/>
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Display initial sample products */}
      <ProductList products={filteredProducts}
      cartItems={cartManagement}
        handleCartToggle={handleAddRemoveFromCart}
      />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartManagement} />
    </div>
  )
}

export default App
