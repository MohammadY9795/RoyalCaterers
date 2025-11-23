import React from "react";

function Contact() {
    const handleContact = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name?.value;
        alert(`Thanks, ${name || "friend"}! We'll get back to you soon.`);
        form.reset();
    };

    return (
        <section id="contact" className="py-5 bg-white">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Contact</h2>
                    <p className="text-muted">Reach out to discuss your event</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <form onSubmit={handleContact}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Name</label>
                                            <input
                                                name="name"
                                                type="text"
                                                className="form-control"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="you@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Service</label>
                                            <select name="service" className="form-select">
                                                <option>Wedding Planning</option>
                                                <option>Corporate Events</option>
                                                <option>Destination Wedding</option>
                                                <option>Catering</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Message</label>
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                rows="4"
                                                placeholder="Tell us about your event"
                                            />
                                        </div>
                                        <div className="col-12 d-grid">
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-muted">
                                <div className="d-flex justify-content-between small">
                                    <div>Phone: +91 98765 43210</div>
                                    <div>Email: contact@royalcaterers.example</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location map */}
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="ratio ratio-16x9 rounded overflow-hidden">
                            <iframe
                                title="location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.662847167!2d88.18254055!3d22.5354064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1650561638849!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
