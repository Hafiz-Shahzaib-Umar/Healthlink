import React from "react";
import { Link } from "react-router-dom";

// import "./Header.css";

function Header() {
  return (
    <>
      <header className="header-area">
        <div className="top-header">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6">
                <ul className="top-list">
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    Mon-Fri 09-18.00
                  </li>
                  <li>
                    <i className="fa-solid fa-phone-volume"></i>
                    <Link to="tel:821-456-241">Call Us: +821-456-241</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-paper-plane"></i>
                    <Link to="https://www.gmail.com/login/">
                      hello@info.com
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="top-social">
                  <li>
                    <Link
                      to="https://www.facebook.com/login/"
                      target="_blank"
                      className="facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://twitter.com/i/flow/login"
                      target="_blank"
                      className="twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.pinterest.com/"
                      target="_blank"
                      className="pinterest"
                    >
                      <i className="fab fa-pinterest-p"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/"
                      target="_blank"
                      className="instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/signin" className="log-in">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="sign-in">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Start Navbar Area */}
        <div className="navbar-area is-sticky">
          <div className="main-navbar">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link to="/">
                  <img
                    src="src\assets\images\logo.png"
                    className="black-logo"
                    alt="image"
                  />
                </Link>

                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                  style={{ display: "block" }}
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/services" className="nav-link">
                        Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/doctors" className="nav-link">
                        Doctors
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/blogs" className="nav-link">
                        Health Blog
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/contact" className="nav-link">
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <div className="others-options">
                    <Link to="/appointment" className="default-btn-two">
                      Get a Quote
                      <span></span>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* End Navbar Area */}
      </header>
    </>
  );
}

export default Header;
