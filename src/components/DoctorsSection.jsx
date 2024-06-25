import React from "react";
import { Link } from "react-router-dom";

function Doctors() {
  return (
    <>
      <section className="doctor-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title">
            <div className="section-title">
              <span>Our Doctors</span>
              <h2>Specialized Doctors</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="doctor-item">
                <div className="image">
                  <Link to="/doctor-details" target="_blank">
                    <img src="src\assets\images\image1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="content">
                  <h3>Dr. James Adult</h3>
                  <span>Cardiologist</span>

                  <ul className="social">
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
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="doctor-item">
                <div className="image">
                  <Link to="/doctor-details" target="_blank">
                    <img src="src\assets\images\image2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="content">
                  <h3>Dr. James Alison</h3>
                  <span>Medicine</span>

                  <ul className="social">
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
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="doctor-item">
                <div className="image">
                  <Link to="/doctor-details" target="_blank">
                    <img src="src\assets\images\image3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="content">
                  <h3>Dr. Peter Adlock</h3>
                  <span>Neurologiest</span>

                  <ul className="social">
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
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="doctor-item">
                <div className="image">
                  <Link to="/doctor-details" target="_blank">
                    <img src="src\assets\images\image4.jpg" alt="image" />
                  </Link>
                </div>
                <div className="content">
                  <h3>Dr. Jelin Alis</h3>
                  <span>Medicine</span>

                  <ul className="social">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Doctors;
