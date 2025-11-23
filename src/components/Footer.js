import React from "react";

function Footer() {
    return (
        <>
            <footer className="py-4 bg-dark text-white">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div>© {new Date().getFullYear()} Royal Event / Royal Caterers</div>
                    <div className="small">Designed with care • Responsive</div>
                </div>
            </footer>

            {/* floating whatsapp */}
            <a
                title="Chat on WhatsApp"
                href="https://wa.me/+919038793008"
                className="whatsaap"
                target="_blank"
                rel="noreferrer"
            >
                <img src="/img/w-icon.png" alt="whatsapp" />
            </a>
        </>
    );
}

export default Footer;
