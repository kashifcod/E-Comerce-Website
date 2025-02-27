import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cart from './components/Cart/Cart';
import Account from './components/Account/Account';
import Orders from './components/Account/Orders';
import Wishlist from './components/Account/Wishlist';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 