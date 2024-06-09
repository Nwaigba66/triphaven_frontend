import React from 'react';

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-info">
                <p className="footer-text">All rights reserved &copy; 2024</p>
                <p className='footer-text'>Developed by Gloria Nwaigba</p>
                <div className='contact'>
                    <h3 className='footer-text'>Email: <a className='footer-text' href="mailto:glorianwaigba@gmail.com">glorianwaigba@gmail.com</a></h3>
                    <h3 className='github-text'>Github: <a className='footer-text' href="https://github.com/Nwaigba66" target="_blank" rel="noopener noreferrer">Nwaigba66</a></h3>
                    <div>
                    <h3>Privacy Policy</h3>
                    <a href='/privacy-policy' alt="">Privacy Policy</a>
                </div>
                </div>
            </div>
            <div className="footer-content">
               
            </div>
        </div>
    )
};
