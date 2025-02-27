import React from 'react';

const Contact = () => {
    return (
        <div className="container my-4">
            <h2 className="mb-4">Contact Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Get in Touch</h3>
                    <p>We'd love to hear from you. Please contact us using any of the following:</p>
                    <div className="mb-3">
                        <h5>Address</h5>
                        <p>123 Shop Street 5, Manzor Coloni Pakistan Sindh</p>
                    </div>
                    <div className="mb-3">
                        <h5>Phone</h5>
                        <p>+(92) 314-7179170</p>
                    </div>
                    <div className="mb-3">
                        <h5>Email</h5>
                        <p>contact@shopstore.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 