import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register'; 

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;