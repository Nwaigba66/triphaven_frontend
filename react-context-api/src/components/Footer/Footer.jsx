import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-signup">
                    <h3>Sign up for monthly digest</h3>
                    <form action="#">
                        <input type="email" placeholder="Your email address" />
                        <button>Send</button>
                    </form>
                </div>
                <div className="footer-info">
                    <p className="footer-text">All rights reserved &copy; 2024</p>
                </div>
                <div>
                    <h3>Privacy Policy</h3>
                    <a href='Privacy Policy' alt="">Privacy Policy</a> 
                </div>
            </div>
        </footer>
    );
};
