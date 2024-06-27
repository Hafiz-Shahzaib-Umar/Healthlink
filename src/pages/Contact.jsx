import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}

      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-3">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Contact Area */}

      <section className="contact-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i
                    className="fa-solid fa-envelope"
                    style={{ fontSize: "28px" }}
                  ></i>
                </div>

                <h3>Email Here</h3>
                <p>
                  <a href="https://www.google.com/login/">admin@tinzer.com</a>
                </p>
                <p>
                  <a href="https://www.google.com/login/">info@tinzer.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ fontSize: "28px" }}
                  ></i>
                </div>

                <h3>Location Here</h3>
                <p>
                  2750 Quadra Street Victoria, <br /> New York, Canada
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6   ">
              <div className="contact-info-box">
                <div className="icon">
                  <i
                    className="fa-solid fa-phone"
                    style={{ fontSize: "28px" }}
                  ></i>
                </div>

                <h3>Call Here</h3>
                <p>
                  <a href="tel:1234567890">+123 456 7890</a>
                </p>
                <p>
                  <a href="tel:2414524526">+241 452 4526</a>
                </p>
              </div>
            </div>
          </div>

          <div className="section-title">
            <span>Contact Us</span>
            <h2>Drop us Message for any Query</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="contact-form">
            <form id="contactForm" novalidate="true">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required=""
                      data-error="Please enter your name"
                      placeholder="Name"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required=""
                      data-error="Please enter your email"
                      placeholder="Email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      required=""
                      data-error="Please enter your number"
                      className="form-control"
                      placeholder="Phone"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      className="form-control"
                      required=""
                      data-error="Please enter your subject"
                      placeholder="Subject"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                      required=""
                      data-error="Write your message"
                      placeholder="Your Message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn disabled">
                    Send Message
                    <span></span>
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* End Contact Area */}
      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default Contact;
