import React from "react";

function Services() {
    return (
        <section id="services" className="py-5 bg-white">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Services Offered</h2>
                    <p className="text-muted">
                        Wedding planning, corporate events, decoration, catering and more.
                    </p>
                </div>

                <div className="row g-4">
                    {[
                        {
                            title: "Wedding Planning",
                            text: "Full wedding design, catering and coordination.",
                        },
                        {
                            title: "Corporate Events",
                            text: "Meetings, conferences, tours and corporate hospitality.",
                        },
                        {
                            title: "Destination Weddings",
                            text: "Venue sourcing, logistics, local vendors.",
                        },
                        {
                            title: "Catering",
                            text: "Customized menus and live counters.",
                        },
                        {
                            title: "Photography",
                            text: "Cinematic photography & videography packages.",
                        },
                        {
                            title: "Logistics",
                            text: "Guest transport and on-day coordination.",
                        },
                    ].map((s, i) => (
                        <div key={i} className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{s.title}</h5>
                                    <p className="card-text text-muted">{s.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
