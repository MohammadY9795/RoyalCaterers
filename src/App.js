import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	// simple handler for the static contact form
	const handleContact = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		alert(`Thanks, ${name || 'friend'}! We'll get back to you soon.`);
		form.reset();
	};

	// control navbar collapse with React state (fixes hamburger on mobile)
	const [navOpen, setNavOpen] = useState(false);

	return (
		<div className="App">
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
				<div className="container">
					<a className="navbar-brand d-flex align-items-center" href="#home">
						<div className="logo-circle me-2">RE</div>
						<span className="fw-bold">Royal Events</span>
					</a>
					<button
						className={"navbar-toggler" + (navOpen ? "" : " collapsed")}
						type="button"
						onClick={() => setNavOpen(!navOpen)}
						aria-controls="navMenu"
						aria-expanded={navOpen}
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{/* Desktop-only nav links (visible on lg and up). Hidden on small screens */}
					<div className="d-none d-lg-block w-100">
						<ul className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center justify-content-end">
							<li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
							<li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
							<li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
							<li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>

			{/* Side menu (off-canvas) */}
			<div className={`side-menu ${navOpen ? 'open' : ''}`} role="dialog" aria-hidden={!navOpen}>
				<div className="side-menu-header d-flex justify-content-between align-items-center p-3 border-bottom">
					<div className="d-flex align-items-center">
						<div className="logo-circle me-2">RE</div>
						<span className="fw-bold">Royal Events</span>
					</div>
					<button className="btn-close" aria-label="Close" onClick={() => setNavOpen(false)}></button>
				</div>
				<div className="p-3">
					<ul className="nav flex-column">
						<li className="nav-item"><a className="nav-link" href="#services" onClick={() => setNavOpen(false)}>Services</a></li>
						<li className="nav-item"><a className="nav-link" href="#gallery" onClick={() => setNavOpen(false)}>Gallery</a></li>
						<li className="nav-item"><a className="nav-link" href="#testimonials" onClick={() => setNavOpen(false)}>Testimonials</a></li>
						<li className="nav-item"><a className="nav-link" href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
					</ul>

					{/* optional quick contact block */}
					<div className="mt-4 small text-muted">
						<div>Phone: +91 98765 43210</div>
						<div>Email: contact@royalcaterers.example</div>
					</div>
				</div>
			</div>

			{/* Backdrop */}
			{navOpen && <div className="backdrop" onClick={() => setNavOpen(false)} aria-hidden="true"></div>}

			{/* Hero */}
			<header id="home" className="hero d-flex align-items-center">
				<div className="container text-center text-white">
					<h1 className="display-5 fw-bold">Royal Events</h1>
					<p className="lead">End-to-end event management — weddings, corporate events, birthdays and more.</p>
					<a href="#contact" className="btn btn-primary btn-lg mt-3">Get a Quote</a>
				</div>
			</header>

			{/* Services */}
			<section id="services" className="py-5">
				<div className="container">
					<div className="text-center mb-4">
						<h2 className="fw-bold">Our Services</h2>
						<p className="text-muted">Complete event solutions — planning, decor, catering, photography and transport.</p>
					</div>
					<div className="row g-4">
						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h5 className="card-title">Decoration & Themes</h5>
									<p className="card-text">Bespoke designs for any occasion — modern, classic or themed setups.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h5 className="card-title">Catering</h5>
									<p className="card-text">Customized menus, live counters and professional service staff for all budgets.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h5 className="card-title">Photography & Videography</h5>
									<p className="card-text">Capture memories with professional photographers and cinematic videography.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h5 className="card-title">Transportation</h5>
									<p className="card-text">Reliable vehicles for guest transport and logistics management.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h5 className="card-title">End-to-End Coordination</h5>
									<p className="card-text">From planning to execution — we handle vendor coordination and timelines.</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm">
								<div className="card-body">
									<h5 className="card-title">Custom Requests</h5>
									<p className="card-text">Special requests, cultural rituals and bespoke event elements handled with care.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section id="gallery" className="py-5 bg-light">
				<div className="container">
					<div className="text-center mb-4">
						<h2 className="fw-bold">Gallery</h2>
						<p className="text-muted">A glimpse of our recent events</p>
					</div>
					<div className="row g-3 gallery-grid">
						{[
							'https://source.unsplash.com/800x600/?wedding',
							'https://source.unsplash.com/800x600/?birthday',
							'https://source.unsplash.com/800x600/?party',
							'https://source.unsplash.com/800x600/?decor',
							'https://source.unsplash.com/800x600/?catering',
							'https://source.unsplash.com/800x600/?ceremony'
						].map((src, i) => (
							<div className="col-6 col-md-4" key={i}>
								<div className="card overflow-hidden">
									<img src={src} alt={`event-${i}`} className="card-img-top gallery-img" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section id="testimonials" className="py-5">
				<div className="container">
					<div className="text-center mb-4">
						<h2 className="fw-bold">Testimonials</h2>
						<p className="text-muted">What our clients say</p>
					</div>
					<div className="row g-4">
						<div className="col-md-4">
							<div className="card h-100 shadow-sm p-3">
								<p className="mb-2">"Royal Caterers handled our wedding beautifully — everything was perfect."</p>
								<div className="fw-bold">— Priya & Amit</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm p-3">
								<p className="mb-2">"Professional and punctual team. Great food and decor."</p>
								<div className="fw-bold">— Karan S.</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card h-100 shadow-sm p-3">
								<p className="mb-2">"Full service experience — transport and coordination were flawless."</p>
								<div className="fw-bold">— Corporate Client</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="py-5 bg-light">
				<div className="container">
					<div className="text-center mb-4">
						<h2 className="fw-bold">Contact Us</h2>
						<p className="text-muted">Reach out to discuss your event — we'll customize a plan and estimate.</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="card shadow-sm">
								<div className="card-body">
									<form onSubmit={handleContact}>
										<div className="mb-3">
											<label className="form-label">Name</label>
											<input name="name" type="text" className="form-control" placeholder="Your name" />
										</div>
										<div className="mb-3">
											<label className="form-label">Email</label>
											<input name="email" type="email" className="form-control" placeholder="you@example.com" />
										</div>
										<div className="mb-3">
											<label className="form-label">Message</label>
											<textarea name="message" className="form-control" rows="4" placeholder="Tell us about your event"></textarea>
										</div>
										<div className="d-grid">
											<button type="submit" className="btn btn-primary">Send Message</button>
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
				</div>
			</section>

			{/* Footer */}
			<footer className="py-4 bg-dark text-white">
				<div className="container d-flex justify-content-between small">
					<div>© {new Date().getFullYear()} Royal Caterers</div>
					<div>Designed with care • Responsive</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
