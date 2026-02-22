import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Vacation Home Cleaning",
            desc: "Do you have a vacation rental that needs to be sparkling for your next guests? Let us help get your home sparkling clean.",
            img: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/6f38f853-bebc-4029-56bb-c66653ca5d00/public"
        },
        {
            title: "Residential Cleaning",
            desc: "Do you have a residential home that needs to be sparkling for your next guests? Let us help get your home sparkling clean.",
            img: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/17500e17-849f-4f54-47c7-9dfed4cf4d00/public"
        },
        {
            title: "Office Cleaning",
            desc: "Do you need regular cleaning for your office space or maybe some help with the tasks you already do? We are professionals for the job!",
            img: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/3c02f24f-a307-4bc3-1443-0c5a7786c600/public"
        },
        {
            title: "Move In/Move Out",
            desc: "Are you ready to move into a new residence or moving on to a new location? Let us clean your previous or new residence to perfection.",
            img: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/3081adb2-5313-42e6-458d-8e53c1c55600/public"
        }
    ];

    return (
        <section className="section services" id="services">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Our Services</h2>
                <div className="grid grid-2 grid-4 animate-on-scroll">
                    {services.map((srv, idx) => (
                        <div key={idx} className="glass-card service-card">
                            <div className="service-img">
                                <img src={srv.img} alt={srv.title} />
                            </div>
                            <div className="service-content">
                                <h3>{srv.title}</h3>
                                <p>{srv.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
