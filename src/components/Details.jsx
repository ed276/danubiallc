import './Details.css';

const Details = () => {
    const features = [
        "Deep / spring cleaning",
        "Full home vacuum",
        "Clean all hard surface floors",
        "Clean kitchen and bathrooms",
        "Stove scrub down",
        "Dust and wet wipe furniture",
        "Wet wipe doorknobs & light switches",
        "Clean all mirrors & glass tables",
        "Clean window interiors",
        "Launder bed linens on site",
        "Make beds",
        "Clean floor molding",
        "Dust window blinds",
        "Clean refrigerator",
        "Dust all ceiling fans",
        "Disinfect entire house"
    ];

    return (
        <section className="section details">
            <div className="container">
                <div className="details-wrap glass-card animate-on-scroll">
                    <div className="details-content">
                        <span className="badge">Full Service Cleaning</span>
                        <h2>The Cleanest Cleaning for Your Vacation Home, Residential Home and Office</h2>
                        <ul className="details-list">
                            {features.map((feature, idx) => (
                                <li key={idx}>
                                    <span className="check-icon">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="details-images">
                        <img src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/9aabe3da-914b-4297-90b6-4c78a07c8300/public" alt="Cleaning tools" className="img-main" />
                        <img src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/d023aca1-2ec7-4f41-52e3-c3fe1f38c400/public" alt="Cleaning office" className="img-sub" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
