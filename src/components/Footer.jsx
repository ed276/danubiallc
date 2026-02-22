import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/8aeca030-d36b-49b5-eb9e-3e3347023b00/public" alt="Danubia LLC Logo" className="footer-logo" />
                        <p>Danubia, LLC.: The Cleanest Cleaning</p>
                        <p className="footer-contact">Contact us today for a free estimate or to schedule a cleaning.</p>
                        <a href="tel:5555555555" className="btn btn-primary mt-3">Call Us Now</a>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#how">How It Works</a></li>
                            <li><a href="#reviews">Reviews</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-services">
                        <h3>Services</h3>
                        <ul>
                            <li>Vacation Home Cleaning</li>
                            <li>Residential Cleaning</li>
                            <li>Office Cleaning</li>
                            <li>Move In / Move Out</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Danubia LLC. All rights reserved.</p>
                    <a href="https://miltonhaines.com" target="_blank" rel="noopener noreferrer" className="designer-signature">MiltonHaines WebCraft</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
