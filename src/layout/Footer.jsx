'use client';

import React from "react";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-top flex justify-content-between">
                    <div className="footer-link-container">
                        <p className="footer-copy-right">
                            Copyright By @Hieu Nguyen - {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
