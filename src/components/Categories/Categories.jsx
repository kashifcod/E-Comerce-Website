import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = [
        {
            id: 'smartphones',
            name: 'Smartphones',
            description: 'Latest smartphones and accessories',
            image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
            products: [
                {
                    id: 1,
                    name: 'iPhone 13 Pro',
                    price: 999.99,
                    image: 'https://images.pexels.com/photos/5741603/pexels-photo-5741603.jpeg'
                },
                {
                    id: 2,
                    name: 'Samsung S21 Ultra',
                    price: 899.99,
                    image: 'https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg'
                },
                {
                    id: 3,
                    name: 'Google Pixel 6',
                    price: 799.99,
                    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg'
                }
            ]
        },
        {
            id: 'laptops',
            name: 'Laptops',
            description: 'High-performance laptops',
            image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
            products: [
                {
                    id: 4,
                    name: 'MacBook Pro M1',
                    price: 1299.99,
                    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg'
                },
                {
                    id: 5,
                    name: 'Dell XPS 13',
                    price: 999.99,
                    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg'
                }
            ]
        },
        {
            id: 'audio',
            name: 'Audio',
            description: 'Premium audio devices',
            image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
            products: [
                {
                    id: 6,
                    name: 'Sony WH-1000XM4',
                    price: 349.99,
                    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'
                },
                {
                    id: 7,
                    name: 'AirPods Pro',
                    price: 249.99,
                    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg'
                }
            ]
        },
        {
            id: 'cameras',
            name: 'Cameras',
            description: 'Professional cameras and accessories',
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
            products: [
                {
                    id: 8,
                    name: 'Canon EOS R5',
                    price: 3899.99,
                    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg'
                }
            ]
        }
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Categories</h2>
            <div className="row g-4">
                {categories.map((category) => (
                    <div key={category.id} className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm category-card">
                            <div className="position-relative">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="category-overlay">
                                    <span className="badge bg-light text-dark">
                                        {category.products.length} Products
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{category.name}</h5>
                                <p className="card-text text-muted">{category.description}</p>
                                
                                {/* Products in this category */}
                                <div className="row g-3 mt-3">
                                    {category.products.map((product) => (
                                        <div key={product.id} className="col-12">
                                            <div className="d-flex align-items-center p-2 border rounded">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    style={{ 
                                                        width: '60px', 
                                                        height: '60px', 
                                                        objectFit: 'cover',
                                                        borderRadius: '8px'
                                                    }}
                                                />
                                                <div className="ms-3 flex-grow-1">
                                                    <h6 className="mb-0">{product.name}</h6>
                                                    <p className="mb-0 text-primary">${product.price}</p>
                                                </div>
                                                <button 
                                                    className="btn btn-sm btn-outline-primary"
                                                    style={{ minWidth: '100px' }}
                                                >
                                                    <i className="bi bi-cart-plus me-1"></i>
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>
                {`
                    .category-card {
                        transition: transform 0.3s ease;
                    }
                    .category-card:hover {
                        transform: translateY(-5px);
                    }
                    .category-overlay {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        padding: 5px;
                        border-radius: 20px;
                    }
                `}
            </style>
        </div>
    );
};

export default Categories; 