import React, { useState } from "react";
import "./Login.css";
import { COLORS } from "../../constants/colors";
import { FontAwesome } from "react-icons/fa"; // Import FontAwesome icons

const EMAIL = "hs738441@gmail.com";
const PHONE = "+918146587968";
const NAME = "Aman Bhatia";
const BIO =
    "Currently working as a Team lead of a mobile application development. I attended the INSPIRE Program in PAU(Ludhiana) in 2011, which was about the awareness of Bio technologies and vaccines. I am fond of gym and study, reading knowledgeable things and want to explore the fundamentals of computer science. I like to develop things via R&D.";

export default function Login() {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        alert(`Message Sent: ${message}`);
        setMessage(""); // Clear input after sending
    };

    return (
        <div style={{ backgroundColor: "white" }}>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a
                        style={{ fontFamily: "Rubik", fontSize: "1.5rem" }}
                        className="navbar-brand"
                        href="#"
                    >
                        <span style={{ color: COLORS.COLOR_ACCENT }}>{NAME.split(" ")[0]}</span>{" "}
                        <span style={{ color: "black" }}>{NAME.split(" ")[1]}</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse collapse-mobile-only" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="btn btn-primary"
                                    href={require("../../assets/images/amanbhatia_resume.pdf")}
                                    download="amanbhatia_resume.pdf"
                                >
                                    Download CV
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Section */}
            <div className="container mt-5">
                <div className="row align-items-center">
                    {/* Bio Data Section */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <h1 className="display-4">{NAME}</h1>
                        <p>
                            <strong>Email: </strong>
                            {EMAIL}
                        </p>
                        <p>
                            <strong>Phone: </strong>
                            {PHONE}
                        </p>
                        <p>
                            <strong>Bio: </strong>
                            {BIO}
                        </p>
                    </div>

                    {/* Profile Image Section */}
                    <div className="col-lg-6 col-md-12 text-center">
                        <img
                            src={require("../../assets/images/profile.jpeg")}
                            alt="Profile"
                            className="img-fluid rounded-circle profile-image"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-left">
                    <h3>Follow Me</h3>
                    <ul className="social-links">
                        <li>
                            <a href="https://github.com/honey121" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/amanbhatia62?s=21" target="_blank" rel="noopener noreferrer">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/share/1A7zszYMg8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/your_yours_honey/profilecard/?igsh=MWRqdjBub25haXM4NQ==" target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3>Send a Message</h3>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>Submit</button>
                </div>
            </footer>
        </div>
    );
}
