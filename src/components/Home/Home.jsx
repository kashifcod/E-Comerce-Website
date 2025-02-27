import React from 'react';
import ProductList from '../Products/ProductList';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const sliderImages = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
            title: 'New Arrivals',
            description: 'Check out our latest collection'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
            title: 'Special Offers',
            description: 'Up to 50% off on selected items'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
            title: 'Premium Quality',
            description: 'Discover premium products'
        }
    ];

    const categories = [
        {
            name: 'Smartphones',
            image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
            items: '150+ Products',
            color: '#ff6b6b'
        },
        {
            name: 'Laptops',
            image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
            items: '120+ Products',
            color: '#4ecdc4'
        },
        {
            name: 'Smart Watches',
            image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
            items: '80+ Products',
            color: '#ffd93d'
        },
        {
            name: 'Cameras',
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
            items: '90+ Products',
            color: '#6c5ce7'
        },
        {
            name: 'Gaming',
            image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg',
            items: '60+ Products',
            color: '#a8e6cf'
        },
        {
            name: 'Audio',
            image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
            items: '100+ Products',
            color: '#ff8b94'
        }
    ];

    return (
        <div className="container-fluid p-0">
            {/* Hero Slider */}
            <Carousel fade className="mb-5">
                {sliderImages.map((slide) => (
                    <Carousel.Item key={slide.id} interval={3000}>
                        <div style={{ height: '500px', position: 'relative' }}>
                            <img
                                className="w-100 h-100"
                                src={slide.image}
                                alt={slide.title}
                                style={{ objectFit: 'cover' }}
                            />
                            <div
                                className="position-absolute top-0 start-0 w-100 h-100"
                                style={{
                                    background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    textAlign: 'center',
                                    color: 'white'
                                }}
                            >
                                <h1 className="display-4 fw-bold mb-3">{slide.title}</h1>
                                <p className="lead mb-4">{slide.description}</p>
                                <button className="btn btn-light btn-lg px-4">Shop Now</button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="container">
                {/* Categories */}
                <div className="mb-5">
                    <h2 className="text-center mb-4" style={{ color: '#2d3436' }}>
                        Product Categories
                    </h2>
                    <div className="row g-4">
                        {categories.map((category) => (
                            <div key={category.name} className="col-md-4">
                                <div
                                    className="category-card position-relative overflow-hidden"
                                    style={{
                                        height: '250px',
                                        borderRadius: '15px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-100 h-100"
                                        style={{
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                    <div
                                        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <h3 className="text-white mb-2">{category.name}</h3>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-white">{category.items}</span>
                                            <button
                                                className="btn btn-light btn-sm"
                                                style={{
                                                    transition: 'all 0.3s ease',
                                                    opacity: 0.9
                                                }}
                                            >
                                                View All
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Products Section */}
                <div className="mb-5">
                    <h2 className="text-center mb-4" style={{ color: '#2d3436' }}>
                        Featured Products
                    </h2>
                    <ProductList limit={8} />
                </div>

                {/* Newsletter Section */}
                <div
                    className="py-5 mb-5 text-center"
                    style={{
                        background: 'linear-gradient(45deg, #00b894, #00cec9)',
                        borderRadius: '15px'
                    }}
                >
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h3 className="text-white mb-3">Subscribe to Our Newsletter</h3>
                            <p className="text-white mb-4">Get updates about new products and special offers!</p>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    style={{ height: '50px' }}
                                />
                                <button
                                    className="btn btn-light px-4"
                                    style={{ height: '50px' }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add hover effect styles */}
            <style>
                {`
                    .category-card:hover img {
                        transform: scale(1.05);
                    }
                    .category-card:hover {
                        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                    }
                `}
            </style>
        </div>
    );
};

export default Home; 