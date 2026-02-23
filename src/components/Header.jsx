import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = !menuOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/8aeca030-d36b-49b5-eb9e-3e3347023b00/public" alt="Danubia LLC Logo" />
                </a>
                <nav className="nav desktop-nav">
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#how">How It Works</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <a href="#contact" className="btn btn-primary cta-btn">Free Estimate</a>
                    <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            className="mobile-nav-overlay"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <nav className="mobile-nav">
                                <ul className="mobile-nav-list">
                                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                                    <li><a href="#how" onClick={closeMenu}>How It Works</a></li>
                                    <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
                                    <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                                    <li><a href="#contact" className="mobile-nav-btn" onClick={closeMenu}>Free Estimate</a></li>
                                </ul>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
