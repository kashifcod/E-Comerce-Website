import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ limit }) => {
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
            name: 'MacBook Pro M2',
            price: 1299.99,
            image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
            category: 'Laptops'
        },
        {
            id: 3,
            name: 'Sony WH-1000XM4',
            price: 349.99,
            image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
            category: 'Audio'
        },
        {
            id: 4,
            name: 'Samsung Galaxy Watch 5',
            price: 279.99,
            image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
            category: 'Watches'
        },
        {
            id: 5,
            name: 'iPad Air',
            price: 599.99,
            image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
            category: 'Tablets'
        },
        {
            id: 6,
            name: 'PS5 Console',
            price: 499.99,
            image: 'https://images.pexels.com/photos/4225230/pexels-photo-4225230.jpeg',
            category: 'Gaming'
        },
        {
            id: 7,
            name: 'Canon EOS R5',
            price: 3899.99,
            image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg',
            category: 'Cameras'
        },
        {
            id: 8,
            name: 'AirPods Pro',
            price: 249.99,
            image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg',
            category: 'Audio'
        }
    ];

    const displayProducts = limit ? products.slice(0, limit) : products;

    return (
        <div className="row g-4">
            {displayProducts.map((product) => (
                <div key={product.id} className="col-md-3">
                    <div
                        className="card border-0 h-100 product-card"
                        style={{ transition: 'all 0.3s ease' }}
                    >
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
                            <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                                {product.category}
                            </span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title h6">{product.name}</h5>
                            <p className="card-text fw-bold" style={{ color: '#2c3e50' }}>
                                ${product.price.toFixed(2)}
                            </p>
                            <button
                                className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                                style={{
                                    backgroundColor: '#2c3e50',
                                    color: 'white'
                                }}
                            >
                                <i className="bi bi-cart-plus"></i>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <style>
                {`
                    .product-card {
                        box-shadow: 0 2px 15px rgba(0,0,0,0.05);
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

export default ProductList; 