import { Sparkle } from './CornerSparkles';
import './About.css';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-content animate-on-scroll">
                    <div className="text-center">
                        <span className="badge">About Us</span>
                        <h2 className="section-title">Sweating the details of beautifying your home</h2>
                    </div>

                    <div className="about-body">
                        <div className="about-video glass-card" style={{ position: 'relative' }}>
                            <Sparkle size={55} color="#0079c1" delay={0.3} top="-40px" right="5%" duration={2.5} />
                            <Sparkle size={40} color="#2ecc71" delay={1.2} bottom="-30px" left="15%" duration={3} />
                            <div className="video-wrapper">
                                <iframe
                                    src="https://www.youtube.com/embed/W7QpDGLF2qM?rel=0&autoplay=1&mute=1"
                                    title="Danubia LLC Cleaning Services"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <p>Danubia, LLC., has been professionally cleaning for customers in Wintergreen and the surrounding areas for over 20 years.</p>
                        <p>Let us sweat the detail of beautifying your home, vacation rental or office. Our mission is to provide professional cleaning services and go above and beyond for every customer. No job (or home) is too big or too small for us.</p>
                        <p>Our house cleaning services include vacation home cleaning (pre-arrival / post departure), residential, office and move in/ move out cleaning. Our professional cleaning team is trustworthy, bonded, insured and has a proven track record for delivering high quality service every time. If you would like a free estimate, go ahead and contact us today!</p>

                        <div className="contact-info">
                            <strong>Hours:</strong> Monday - Sunday: 9:00 am - 7:00 pm<br />
                            <strong>Payments:</strong> Visa/Mastercard, Discover, American Express, Check, PayPal, Zelle, Venmo
                        </div>

                        <div style={{ clear: 'both', textAlign: 'center', marginTop: '3rem' }}>
                            <a href="#contact" className="btn btn-primary">Schedule Your Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
