import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import heroImage from "./assets/images/download.jpeg";

// Eager imports for above-the-fold content
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Services from "./components/Services";

// Lazy imports for below-the-fold content
const Works = React.lazy(() => import("./components/Works"));
const Testimonials = React.lazy(() => import("./components/Testimonials"));
const Contact = React.lazy(() => import("./components/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
	// navbar collapse control moved to Navbar component
	// contact handler moved to Contact component

	const slides = [
		{
			image: heroImage,
			title: "We Create",
			subtitle: "Design-driven event planning for memorable experiences.",
			cta: { href: "#contact", text: "Request a Quote" },
		},
		{
			image: heroImage,
			title: "You Celebrate",
			subtitle: "We handle the details — catering, decor, logistics.",
			cta: { href: "#services", text: "Our Services" },
		},
		{
			image: heroImage,
			title: "Aesthetic is a decision",
			subtitle: "Crafted spaces, curated moments.",
			cta: { href: "#gallery", text: "View Gallery" },
		},
	];

	return (
		<div className="App">
			<Navbar />

			<HeroSlider slides={slides} interval={6000} />

			<About />

			<Services />

			<Suspense fallback={<div className="text-center py-5">Loading...</div>}>
				<Works />
				<Testimonials />
				<Contact />
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
