import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        'All',
        'Smartphones',
        'Laptops',
        'Audio',
        'Watches',
        'Tablets',
        'Gaming',
        'Cameras'
    ];

    const products = [
        {
            id: 1,
            name: 'Apple iPhone 14 Pro',
            price: 999.99,
            image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg',
            category: 'Smartphones'
        },
        {
            id: 2,
            name: 'Samsung S23 Ultra',
            price: 1199.99,
            image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
            category: 'Smartphones'
        },
        {
            id: 3,
            name: 'MacBook Pro M2',
            price: 1299.99,
            image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
            category: 'Laptops'
        },
        {
            id: 4,
            name: 'Dell XPS 13',
            price: 999.99,
            image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
            category: 'Laptops'
        },
        {
            id: 5,
            name: 'Sony WH-1000XM4',
            price: 349.99,
            image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
            category: 'Audio'
        },
        {
            id: 6,
            name: 'AirPods Pro',
            price: 249.99,
            image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
            category: 'Audio'
        },
        // Add more products as needed
    ];

    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Products</h2>

            {/* Category Filter */}
            <div className="mb-4">
                <div className="d-flex justify-content-center flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`btn ${selectedCategory === category ? 'btn-dark' : 'btn-outline-dark'}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="row g-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col-md-3">
                        <div className="card border-0 h-100 product-card">
                            <div className="position-relative overflow-hidden">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="product-overlay">
                                    <button className="btn btn-light btn-sm me-2">
                                        <i className="bi bi-eye"></i>
                                    </button>
                                    <button className="btn btn-light btn-sm">
                                        <i className="bi bi-heart"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title h6">{product.name}</h5>
                                <p className="card-text fw-bold" style={{ color: '#2c3e50' }}>
                                    ${product.price.toFixed(2)}
                                </p>
                                <button
                                    className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                                    style={{ backgroundColor: '#2c3e50', color: 'white' }}
                                >
                                    <i className="bi bi-cart-plus"></i>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>
                {`
          .product-card {
            box-shadow: 0 2px 15px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
          }
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          }
          .product-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(44, 62, 80, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.3s ease;
          }
          .product-card:hover .product-overlay {
            opacity: 1;
          }
        `}
            </style>
        </div>
    );
};

export default Products; 