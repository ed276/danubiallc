import { motion } from 'framer-motion';
import CornerSparkles from './CornerSparkles';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-grid">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1>The Cleanest Cleaning For Your Home & Office</h1>
                        <p>Serving Luxury Vacation Rental Properties and Residential Clients in Wintergreen Resort, Nellysford, Afton and surrounding areas since 2002.</p>
                        <div className="hero-actions">
                            <a href="#contact" className="btn btn-primary">Get a Free Estimate</a>
                            <a href="#services" className="btn btn-accent">Our Services</a>
                        </div>
                        <div className="hero-features">
                            <div className="feature">
                                <span className="check-icon">✓</span>
                                <span>All Supplies Provided</span>
                            </div>
                            <div className="feature">
                                <span className="check-icon">✓</span>
                                <span>Satisfaction Guaranteed</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image-wrapper"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="img-backdrop"></div>
                        <img
                            src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/4ed27520-43da-4e25-b25c-83d81c996500/public"
                            alt="Clean home living room"
                            className="hero-img"
                        />
                        <CornerSparkles />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
