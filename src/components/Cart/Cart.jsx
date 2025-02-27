import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = [
        {
            id: 1,
            name: 'Wireless Headphones',
            price: 99.99,
            quantity: 1,
            image: 'placeholder.jpg'
        }
    ];

    return (
        <div className="container my-4">
            <h2 className="mb-4">Shopping Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img
                                                src={`/images/${item.image}`}
                                                alt={item.name}
                                                style={{ width: '50px', marginRight: '10px' }}
                                            />
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <td>
                                            <input
                                                type="number"
                                                className="form-control w-25"
                                                value={item.quantity}
                                                min="1"
                                                readOnly
                                            />
                                        </td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Order Summary</h5>
                                    <p className="card-text">
                                        Subtotal: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                                    </p>
                                    <Link to="/checkout" className="btn btn-primary w-100">
                                        Proceed to Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <p>Your cart is empty</p>
                    <Link to="/products" className="btn btn-primary">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart; 