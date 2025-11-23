import React, { useState, useEffect, useRef } from "react";

function HeroSlider({ slides, interval = 5000 }) {
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(true);
    const timerRef = useRef();

    useEffect(() => {
        if (!playing) return;
        timerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % slides.length);
        }, interval);
        return () => clearInterval(timerRef.current);
    }, [playing, interval, slides.length]);

    const go = (dir) => {
        setIndex((i) => {
            if (dir === "next") return (i + 1) % slides.length;
            if (dir === "prev") return (i - 1 + slides.length) % slides.length;
            return i;
        });
    };

    return (
        <section
            id="home"
            className="hero-fullscreen position-relative"
            onMouseEnter={() => setPlaying(false)}
            onMouseLeave={() => setPlaying(true)}
            aria-label="Hero slider"
        >
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`hero-slide ${i === index ? "active" : ""}`}
                    style={{
                        backgroundImage: `url(${s.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    role="group"
                    aria-hidden={i === index ? "false" : "true"}
                >
                    <div className="overlay overlay-dark-60"></div>
                    <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
                        <h1 className="display-5 fw-bold">{s.title}</h1>
                        {s.subtitle && <p className="lead">{s.subtitle}</p>}

                    </div>
                </div>
            ))}

            <button
                className="hero-control prev"
                aria-label="Previous slide"
                onClick={() => go("prev")}
            >
                ‹
            </button>
            <button
                className="hero-control next"
                aria-label="Next slide"
                onClick={() => go("next")}
            >
                ›
            </button>

            <div className="hero-pagination">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`page-dot ${i === index ? "active" : ""}`}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
}

export default HeroSlider;
