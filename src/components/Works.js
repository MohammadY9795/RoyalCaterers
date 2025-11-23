import React from "react";
import workImage from "../assets/images/download.jpeg";

function Works() {
    return (
        <section id="works" className="py-5 bg-dark text-white">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Our Recent Works</h2>
                    <p className="text-muted">A glimpse into our events</p>
                </div>

                <div className="row g-3">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="col-6 col-md-3">
                            <div className="card bg-transparent border-0 overflow-hidden">
                                <img
                                    src={workImage}
                                    alt={`work-${i}`}
                                    className="card-img-top gallery-img"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Works;
