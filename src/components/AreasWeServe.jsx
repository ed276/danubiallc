import './AreasWeServe.css';

const AreasWeServe = () => {
    const areas = [
        "Wintergreen, VA", "Afton, VA", "Nellysford, VA", "Charlottesville, VA", "Harrisonburg, VA",
        "Weyers Cave, VA", "Fishersville, VA", "Verona, VA", "Stuarts Draft, VA", "Ivy, VA", "And many more!"
    ];

    return (
        <section className="section areas">
            <div className="container">
                <div className="areas-grid animate-on-scroll">
                    <div className="areas-content glass-card">
                        <span className="badge">Service Area</span>
                        <h2>Areas We Serve</h2>
                        <p className="subtitle">Proudly Serving Harrisonburg to Wintergreen and in Between</p>
                        <ul className="areas-list">
                            {areas.map((area, idx) => (
                                <li key={idx}><span className="dot">•</span> {area}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="areas-map">
                        <img src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/4877cf13-f1f2-4978-b9a8-e3ae98aab400/public" alt="Service Range Map" className="map-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AreasWeServe;
