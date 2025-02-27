import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
