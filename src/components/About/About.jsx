import React from 'react';

const About = () => {
    return (
        <div className="container my-4">
            <h2 className="mb-4">About Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Our Story</h3>
                    <p>
                        Welcome to ShopStore, your number one source for all products. We're dedicated
                        to providing you the very best of products, with an emphasis on quality,
                        customer service, and uniqueness.
                    </p>
                    <p>
                        Founded in 2025, ShopStore has come a long way from its beginnings. When we
                        first started out, our passion for providing quality products drove us to
                        start this business.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3>Our Mission</h3>
                    <p>
                        We aim to provide our customers with the best shopping experience possible,
                        offering high-quality products at competitive prices with exceptional
                        customer service.
                    </p>
                    <h3>Our Values</h3>
                    <ul>
                        <li>Customer Satisfaction</li>
                        <li>Quality Products</li>
                        <li>Integrity</li>
                        <li>Innovation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About; 