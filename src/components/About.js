import React from "react";
import aboutImage from "../assets/images/download.jpeg";

function About() {
    return (
        <section id="about" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">The Brand</h2>
                    <p className="text-muted">
                        Royal Event — Social & Commercial Event Planners
                    </p>
                </div>

                <div className="row g-3 mb-4">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                        <div key={n} className="col-6 col-md-4">
                            <div className="ratio ratio-4x3 rounded overflow-hidden">
                                <img
                                    alt={`wall-${n}`}
                                    src={aboutImage}
                                    className="w-100 h-100 object-fit-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="mb-3">Royal Event</h3>
                        <p className="mb-0">
                            We design and deliver memorable events — weddings, corporate
                            meetings, social gatherings and destination experiences. Timely,
                            creative and cost-aware.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
