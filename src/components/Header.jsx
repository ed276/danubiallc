import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/8aeca030-d36b-49b5-eb9e-3e3347023b00/public" alt="Danubia LLC Logo" />
                </a>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#how">How It Works</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
                <a href="#contact" className="btn btn-primary cta-btn">Free Estimate</a>
            </div>
        </header>
    );
};

export default Header;
