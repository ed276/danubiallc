import './HowItWorks.css';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="m9 16 2 2 4-4" />
    </svg>
);

const HowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "Request Estimate",
            desc: "Contact us for a free, on-site estimate.",
            icon: <PhoneIcon />
        },
        {
            num: "02",
            title: "Choose Service",
            desc: "Need a one-time, bi-weekly, weekly or regularly scheduled service?",
            icon: <SparklesIcon />
        },
        {
            num: "03",
            title: "Schedule Cleaning",
            desc: "Choose the date and time of your cleaning.",
            icon: <CalendarIcon />
        }
    ];

    return (
        <section className="section how-it-works" id="how">
            <div className="container">
                <div className="text-center animate-on-scroll">
                    <span className="badge">Three Easy Steps</span>
                    <h2 className="section-title">How It Works</h2>
                </div>
                <div className="grid grid-3 animate-on-scroll">
                    {steps.map((step, idx) => (
                        <div key={idx} className="step-card glass-card">
                            <div className="step-icon">
                                {step.icon}
                            </div>
                            <div className="step-num">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center animate-on-scroll delay-2" style={{ marginTop: '4rem' }}>
                    <a href="#contact" className="btn btn-white">Get Started Now</a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
