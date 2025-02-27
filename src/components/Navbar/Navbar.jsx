import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#2c3e50' }}>
            <div className="container">
                <ul className="nav justify-content-center py-2">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-4 text-white nav-link-hover">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link px-4 text-white nav-link-hover">Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link px-4 text-white nav-link-hover">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link px-4 text-white nav-link-hover">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link px-4 text-white nav-link-hover">Contact</Link>
                    </li>
                </ul>
            </div>
            <style>
                {`
                    .nav-link-hover {
                        position: relative;
                        transition: color 0.3s ease;
                    }
                    .nav-link-hover:hover {
                        color: #3498db !important;
                    }
                    .nav-link-hover::after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        bottom: 0;
                        left: 50%;
                        background-color: #3498db;
                        transition: all 0.3s ease;
                    }
                    .nav-link-hover:hover::after {
                        width: 80%;
                        left: 10%;
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar; 