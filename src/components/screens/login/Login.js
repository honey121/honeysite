// Importing required libraries
import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Your Name</a>
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
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="btn btn-primary"
                                    href="/path-to-cv.pdf"
                                    download="YourName_CV.pdf"
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
                        <h1 className="display-4">Your Name</h1>
                        <p><strong>Email:</strong> your.email@example.com</p>
                        <p><strong>Phone:</strong> +1234567890</p>
                        <p><strong>Bio:</strong> Passionate web developer with expertise in building responsive and user-friendly web applications. Always eager to learn and take on new challenges.</p>
                    </div>

                    {/* Profile Image Section */}
                    <div className="col-lg-6 col-md-12 text-center">
                        {/* <img
                            src="https://via.placeholder.com/250"
                            alt="Profile"
                            className="img-fluid rounded-circle profile-image"
                        /> */}
                        <img
                        src={require('../../assets/images/profile.jpeg')} // Importing local image
                        alt="Profile"
                        className="img-fluid rounded-circle profile-image"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}
