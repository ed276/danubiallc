import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState(0);

    const faqs = [
        {
            q: "Do you bring your own cleaning supplies, chemicals and equipment?",
            a: "Yes, we bring everything we need to clean your home. You don’t have to provide anything."
        },
        {
            q: "How many people will be cleaning my home?",
            a: "Danubia, LLC., may send one, two, or three team members to clean a home. This will depend on a number of factors such as how large your house is and how quickly you would like it cleaned. We will work with you to determine how many team members to send over."
        },
        {
            q: "Do I have to be home when you come over to clean my house?",
            a: "No, you don’t have to be home. In fact, most of our customers are not home when we come clean. You can provide a garage/door code or leave a spare key for us. We ask that you please make sure to remove clothes and clutter from the floor or from surfaces that will be cleaned. Our team members bring their own cleaning supplies and equipment, but if there is a particular product you will like us to use, you can supply that."
        },
        {
            q: "How can I know that Danubia, LLC., will do a good job?",
            a: "All of our services are backed by our satisfaction guarantee. If you are not 100% satisfied with the service you receive, we will do everything we can to make it right."
        }
    ];

    return (
        <section className="section faq" id="faq">
            <div className="container">
                <div className="text-center animate-on-scroll">
                    <span className="badge">Questions & Answers</span>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="faq-list animate-on-scroll">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`faq-item glass-card ${openIdx === idx ? 'open' : ''}`}
                            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                        >
                            <div className="faq-question">
                                <h3>{faq.q}</h3>
                                <span className="faq-icon">{openIdx === idx ? '-' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
