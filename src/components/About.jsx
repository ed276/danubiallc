import './About.css';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-grid grid grid-2 animate-on-scroll">
                    <div className="about-content">
                        <span className="badge">About Us</span>
                        <h2 className="section-title text-left">Sweating the details of beautifying your home</h2>
                        <p>Danubia LLC is an independently-owned house cleaning company that has been serving Luxury Vacation Rental Properties and other clients in Wintergreen Resort, Nellysford, Afton and the surrounding areas since 2002.</p>
                        <p>We specialize in Vacation - Luxury Rental Properties House Cleaning Service. Let us sweat the detail of beautifying your home, vacation rental or office. Our mission is to provide professional cleaning services and go above and beyond for every customer. No job (or home) is too big or too small for us.</p>
                        <div className="contact-info">
                            <strong>Hours:</strong> Monday - Sunday: 9:00 am - 7:00 pm<br />
                            <strong>Payments:</strong> Visa/Mastercard, Discover, American Express, Check, PayPal, Zelle, Venmo
                        </div>
                        <a href="#contact" className="btn btn-primary mt-4">Reach Out To Us</a>
                    </div>
                    <div className="about-video glass-card">
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/W7QpDGLF2qM?rel=0"
                                title="Danubia LLC Cleaning Services"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
