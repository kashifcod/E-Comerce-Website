import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="/images/placeholder.jpg"
                        alt="Product"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2>Product Name</h2>
                    <p className="h3 text-primary mb-4">$99.99</p>
                    <p className="mb-4">
                        Detailed product description goes here. This is a placeholder text to
                        demonstrate how the product description would look like in the actual
                        implementation.
                    </p>
                    <div className="mb-4">
                        <label className="me-2">Quantity:</label>
                        <input type="number" className="form-control w-25 d-inline" min="1" defaultValue="1" />
                    </div>
                    <button className="btn btn-primary btn-lg">Add to Cart</button>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="row mt-5">
                <div className="col-12">
                    <h3>Customer Reviews</h3>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Great Product!</h5>
                            <p className="card-text">This is an amazing product. Worth every penny!</p>
                            <small className="text-muted">Posted by John D. on March 1, 2024</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 