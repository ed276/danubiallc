import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="badge">Trusted Cleaning Experts</span>
                    <h1>The Cleanest Cleaning For Your Home & Office</h1>
                    <p>Serving Luxury Vacation Rental Properties and Residential Clients in Wintergreen Resort, Nellysford, Afton and surrounding areas since 2002.</p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Get a Free Estimate</a>
                        <a href="#services" className="btn btn-accent">Our Services</a>
                    </div>
                    <div className="hero-features">
                        <div className="feature">
                            <span>✓ All Supplies Provided</span>
                        </div>
                        <div className="feature">
                            <span>✓ Satisfaction Guaranteed</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
