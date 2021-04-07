import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style p-3 pl-5">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h5>The Food Store</h5>
                </div>
                <div className="col-sm-12 col-md-3">
                    <p>About Online food</p>
                    <p>Read out blog</p>
                    <p>Sign up to deliver</p>
                    <p>Add your restaurant</p>
                </div>
                <div className="col-sm-12 col-md-3">
                    <p>Get help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-6">
                    <span>Copy right @ 2021 The food store</span>
                </div>
                <div className="col-sm-12 col-md-2">
                    <p>Private Policy</p>
                </div>
                <div className="col-sm-12 col-md-2">
                    <p>Terms of Use</p>
                </div>
                <div className="col-sm-12 col-md-2">
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;