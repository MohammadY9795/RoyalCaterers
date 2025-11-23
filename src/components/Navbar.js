import React, { useState } from "react";
import fbIcon from "../assets/images/Facebook.png";
import igIcon from "../assets/images/instagram.jpeg";
import waIcon from "../assets/images/Whatsapp.png";

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#home">
                    <div className="logo-circle me-2">RC</div>
                    <span className="fw-bold">Royal Caterers</span>
                </a>

                <button
                    className={"navbar-toggler" + (navOpen ? "" : " collapsed")}
                    type="button"
                    aria-controls="navMenu"
                    aria-expanded={navOpen}
                    aria-label="Toggle navigation"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}
                    id="navMenu"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#home"
                                onClick={() => setNavOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#about"
                                onClick={() => setNavOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#services"
                                onClick={() => setNavOpen(false)}
                            >
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#works"
                                onClick={() => setNavOpen(false)}
                            >
                                Works
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#contact"
                                onClick={() => setNavOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                        <li className="nav-item d-flex ms-2">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-link px-1"
                            >
                                <img src={fbIcon} width="22" alt="fb" />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-link px-1"
                            >
                                <img src={igIcon} width="22" alt="ig" />
                            </a>
                            <a
                                href="https://wa.me/+919038793008"
                                target="_blank"
                                rel="noreferrer"
                                className="nav-link px-1"
                            >
                                <img src={waIcon} width="22" alt="wa" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
