import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Tinzer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore aliqua.
                </p>
                <ul className="footer-social">
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

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Departments</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link to="/">COVID-19 Testing</Link>
                  </li>
                  <li>
                    <Link to="/">Birth Control</Link>
                  </li>
                  <li>
                    <Link to="/">Orthopedics</Link>
                  </li>
                  <li>
                    <Link to="/">Nuclear Magnetic</Link>
                  </li>
                  <li>
                    <Link to="/">Eye Treatment</Link>
                  </li>
                  <li>
                    <Link to="/">X-Ray</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget pl-5">
                <h3>Useful Links</h3>

                <ul className="footer-quick-links">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & conditions</Link>
                  </li>

                  <li>
                    <Link to="/faq">FAQ's</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contact</h3>

                <div className="footer-info-contact">
                  <i className="fa-solid fa-phone"></i>
                  <h3>Phone</h3>
                  <span>
                    <Link to="tel:123456123">+123(456)123</Link>
                  </span>
                </div>

                <div className="footer-info-contact">
                  <i className="fa-solid fa-envelope"></i>
                  <h3>Email</h3>
                  <span>
                    <Link to="https://www.google.com/login/">
                      info@tinzer.com
                    </Link>
                  </span>
                </div>

                <div className="footer-info-contact">
                  <i className="fa-solid fa-location-dot"></i>
                  <h3>Address</h3>

                  <span>
                    <Link to="https://www.google.com/maps/place/Muslim+Town,+Lahore,+Punjab+54000,+Pakistan/@31.518411,74.3198983,17z/data=!3m1!4b1!4m6!3m5!1s0x39190487cc9571bb:0xaf85a5e061138579">
                      Muslim Town
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="shape">
          <img src="src\assets\images\footer-shape.png" alt="image" />
        </div>
      </section>

      {/* Copy Right Section */}
      <div className="copyright-area">
        <div className="container">
          <p>
            © <strong>Healthlink </strong> is Proudly Owned by{" "}
            <Link to="/" target="_blank">
              {" "}
              Hafiz Shahzaib Umar{" "}
            </Link>
          </p>
        </div>
      </div>

      {/* Go To Top Area */}
      <div className="go-top active">
        <i className="fa fa-chevron-up"></i>
        <i className="fa fa-chevron-up"></i>
      </div>
    </>
  );
}

export default Footer;
