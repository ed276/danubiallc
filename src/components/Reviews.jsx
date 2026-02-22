import './Reviews.css';

const Reviews = () => {
    const reviews = [
        {
            name: "Anthony S.",
            stars: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/9bfa3220-1241-4216-2482-9fac83e3d300/public",
            img: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/1780533c-397b-4fed-f267-f95da5c97600/public",
            text: "Before Covid, I partnered with Danubia to clean and ready all 6 of my vacation rental properties on a weekly basis - always thorough, always timely, always professional. I was thrilled when Steve reached out and told me they were back on their feet, post covid. When you're in the real estate business, the people you choose to partner with is crucial to your success and peace of mind. Danubia delivers that, and they have my highest recommendation."
        },
        {
            name: "Trina B.",
            stars: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/9bfa3220-1241-4216-2482-9fac83e3d300/public",
            img: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e2530f6e-91bb-441e-f96a-1e3425959200/public",
            text: "I have used the Danubia for over 5 years at our 2nd home at Wintergreen Resort. It is a very reliable, hardworking group of cleaners! I can call them on Monday with a cleaning request and the cleaning service will be finished by the next weekend. We have even called them on short notice and they have cleaned the house in one day. I highly recommend Danubia, we have been very satisfied with every cleaning."
        },
        {
            name: "Julia",
            stars: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/26829f33-239c-42fb-249f-c4dbaf81eb00/public",
            img: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/26b81317-0112-4668-a61e-568114934600/public",
            text: "Danubia has been punctual and can be relied upon. Have been able to complete the job even in tough time constraints."
        }
    ];

    return (
        <section className="section reviews" id="reviews">
            <div className="container">
                <div className="text-center animate-on-scroll">
                    <span className="badge">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                </div>
                <div className="grid grid-3 animate-on-scroll">
                    {reviews.map((rev, idx) => (
                        <div key={idx} className="review-card glass-card">
                            <div className="review-header">
                                <img src={rev.img} alt={rev.name} className="reviewer-img" />
                                <div className="review-meta">
                                    <h4>{rev.name}</h4>
                                    <img src={rev.stars} alt="Rating Stars" className="stars-img" />
                                </div>
                            </div>
                            <div className="review-body">
                                <p>"{rev.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
