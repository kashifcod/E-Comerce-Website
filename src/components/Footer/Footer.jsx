import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '#' },
        { name: 'Products', path: '#' },
        { name: 'Categories', path: '#' },
        { name: 'About Us', path: '#' },
        { name: 'Contact', path: '#' }
    ];

    const categoryLinks = [
        {
            name: 'Smartphones',
            // path: '/products',
            state: { category: 'Smartphones' }
        },
        {
            name: 'Laptops',
            // path: '/products',
            state: { category: 'Laptops' }
        },
        {
            name: 'Audio',
            // path: '/products',
            state: { category: 'Audio' }
        },
        {
            name: 'Cameras',
            // path: '/products',
            state: { category: 'Cameras' }
        }
    ];



    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-4">
                        <h5 className="mb-3">About Store</h5>
                        <p className="mb-0">
                            We provide high-quality products at competitive prices. Your trusted destination for electronics and more.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5 className="mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            {quickLinks.map((link) => (
                                <li key={link.name} className="mb-2">
                                    <Link
                                        to={link.path}
                                        className="text-light text-decoration-none hover-link"
                                    >
                                        <i className="bi bi-chevron-right me-1"></i>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5 className="mb-3">Categories</h5>
                        <ul className="list-unstyled">
                            {categoryLinks.map((link) => (
                                <li key={link.name} className="mb-2">
                                    <Link
                                        to={link.path}
                                        state={link.state}
                                        className="text-light text-decoration-none hover-link"
                                    >
                                        <i className="bi bi-chevron-right me-1"></i>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="text-center">
                    <p className="mb-1">© 2025 ShopStore. Design & Develop by Kashif Ali</p>
                    <small>All rights reserved. </small>
                </div>
            </div>

            <style>
                {`
          .hover-link {
            transition: color 0.3s ease;
          }
          .hover-link:hover {
            color: #3498db !important;
          }
          .hover-link:hover i {
            transform: translateX(3px);
          }
          .hover-link i {
            transition: transform 0.3s ease;
          }
        `}
            </style>
        </footer>
    );
};

export default Footer; 