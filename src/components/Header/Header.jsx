import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header className="bg-white border-bottom">
            <div className="container py-3">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <Link to="/" className="text-decoration-none">
                            <h1 className="h3 mb-0 text-dark fw-bold">Shop Store</h1>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search products..."
                            />
                            <button className="btn btn-dark" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 text-end">
                        <Link
                            to="/cart"
                            className="btn btn-outline-primary d-inline-flex align-items-center position-relative"
                        >
                            <i className="bi bi-cart3 me-2"></i>
                            Cart
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                style={{ fontSize: '0.6rem' }}
                            >
                                1
                            </span>
                        </Link>
                        <button className="btn btn-primary ms-2">
                            <i className="bi bi-person me-2"></i>
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header; 