import React from "react";

function Testimonials() {
    return (
        <section id="testimonials" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Testimonials</h2>
                    <p className="text-muted">What our clients say</p>
                </div>

                <div className="row g-3">
                    {[
                        {
                            text: "Handled our wedding beautifully — everything was perfect.",
                            author: "Priya & Amit",
                        },
                        {
                            text: "Professional and punctual team. Great food and decor.",
                            author: "Karan S.",
                        },
                        {
                            text: "Full service experience — transport and coordination were flawless.",
                            author: "Corporate Client",
                        },
                    ].map((t, i) => (
                        <div key={i} className="col-md-4">
                            <div className="card h-100 shadow-sm p-3">
                                <p className="mb-2">"{t.text}"</p>
                                <div className="fw-bold">— {t.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
