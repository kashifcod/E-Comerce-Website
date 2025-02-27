import React from 'react';

const Checkout = () => {
    return (
        <div className="container my-4">
            <h2 className="mb-4">Checkout</h2>
            <div className="row">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Shipping Information</h3>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="firstName" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" required />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="city" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" required />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="state" className="form-label">State</label>
                                        <input type="text" className="form-control" id="state" required />
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label htmlFor="zip" className="form-label">ZIP Code</label>
                                        <input type="text" className="form-control" id="zip" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Payment Information</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                    <input type="text" className="form-control" id="cardNumber" required />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="expiry" className="form-label">Expiry Date</label>
                                        <input type="text" className="form-control" id="expiry" placeholder="MM/YY" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="cvv" className="form-label">CVV</label>
                                        <input type="text" className="form-control" id="cvv" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Order Summary</h3>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <span>Subtotal:</span>
                                    <span>$99.99</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Shipping:</span>
                                    <span>$10.00</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Tax:</span>
                                    <span>$8.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <strong>Total:</strong>
                                    <strong>$117.99</strong>
                                </div>
                            </div>
                            <button className="btn btn-primary w-100">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout; 