import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "Request Estimate",
            desc: "Contact us for a free, on-site estimate.",
            icon: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/7235d81b-ca51-4542-fff6-065c5d976900/public" // Phone icon
        },
        {
            num: "02",
            title: "Choose Service",
            desc: "Need a one-time, bi-weekly, weekly or regularly scheduled service?",
            icon: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e2a0e1cc-d46b-47de-f271-a0a2bdb93500/public" // Blue spray bottle
        },
        {
            num: "03",
            title: "Schedule Cleaning",
            desc: "Choose the date and time of your cleaning.",
            icon: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/906888ea-6fa8-4d99-86a6-4754f3a05400/public" // Calendar icon
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
                                <img src={step.icon} alt={step.title} />
                            </div>
                            <div className="step-num">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
