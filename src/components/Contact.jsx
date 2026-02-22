import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        name: '',
        email: '',
        phone: '',
        details: ''
    });

    const updateForm = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xqedygqw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _replyto: formData.email,
                    _subject: `New Estimate Request: ${formData.service}`,
                    Name: formData.name,
                    Email: formData.email,
                    Phone: formData.phone,
                    Service_Type: formData.service,
                    Preferred_Date: formData.date,
                    Additional_Details: formData.details || 'None'
                }),
            });

            if (response.ok) {
                setStep(4); // Success step
            } else {
                // If Formspree returns an error (e.g., spam detection)
                alert("There was a problem submitting your request. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("There was a problem connecting to the server. Please check your internet connection and try again.");
        }
    };

    return (
        <section className="section contact" id="contact">
            <div className="container contact-container">
                <div className="contact-header animate-on-scroll">
                    <span className="badge">Concierge Booking</span>
                    <h2 className="section-title text-left">Request a Free Estimate.</h2>
                    <p className="contact-subtitle">
                        Experience the gold standard of home care. Tell us what you need, and our experts will handle the rest.
                    </p>
                </div>

                <div className="contact-form-wrapper glass-card animate-on-scroll delay-1">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
                    </div>

                    <form onSubmit={submitForm} className="concierge-form">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="form-step"
                                >
                                    <h3>1. What type of property needs cleaning?</h3>
                                    <div className="service-options">
                                        {['Vacation Home', 'Residential', 'Office', 'Move In / Move Out'].map(service => (
                                            <button
                                                key={service}
                                                type="button"
                                                className={`option-btn ${formData.service === service ? 'selected' : ''}`}
                                                onClick={() => { updateForm('service', service); nextStep(); }}
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="form-step"
                                >
                                    <h3>2. When would you ideally like us to arrive?</h3>
                                    <div className="input-group">
                                        <label htmlFor="date">Preferred Date & Time</label>
                                        <input
                                            type="datetime-local"
                                            id="date"
                                            value={formData.date}
                                            onChange={(e) => updateForm('date', e.target.value)}
                                            className="elite-input"
                                        />
                                    </div>
                                    <div className="step-actions">
                                        <button type="button" className="btn-text" onClick={prevStep}>Back</button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={nextStep}
                                            disabled={!formData.date}
                                        >
                                            Next Step
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="form-step"
                                >
                                    <h3>3. Your Contact Details</h3>
                                    <div className="grid grid-2">
                                        <div className="input-group">
                                            <label htmlFor="name">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => updateForm('name', e.target.value)}
                                                className="elite-input"
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => updateForm('phone', e.target.value)}
                                                className="elite-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => updateForm('email', e.target.value)}
                                            className="elite-input"
                                        />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="details">Additional Details (Optional)</label>
                                        <textarea
                                            id="details"
                                            rows="3"
                                            value={formData.details}
                                            onChange={(e) => updateForm('details', e.target.value)}
                                            className="elite-input"
                                        ></textarea>
                                    </div>
                                    <div className="step-actions">
                                        <button type="button" className="btn-text" onClick={prevStep}>Back</button>
                                        <button type="submit" className="btn btn-primary elite-submit">Request Free Estimate</button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="form-step success-step"
                                >
                                    <div className="success-icon">✓</div>
                                    <h3>Your Request is Received</h3>
                                    <p>Thank you, {formData.name || 'valued client'}. A Danubia concierge will review your request and contact you shortly to finalize your free estimate.</p>
                                    <button type="button" className="btn btn-accent mt-4" onClick={() => {
                                        setStep(1);
                                        setFormData({ service: '', date: '', name: '', email: '', phone: '', details: '' });
                                    }}>
                                        Submit Another Request
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
