import React from "react";
// import "./FAQ.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FAQ() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}
      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-4">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Faq</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Faq</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start FAQ Area  */}
      <section className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Faq</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="faq-accordion-content">
            <ul className="accordion">
              <li className="accordion-item">
                <a className="accordion-title active" href="javascript:void(0)">
                  <i className="fa fa-plus"></i>
                  Which material types can you work with?
                </a>

                <p className="accordion-content show">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>
              </li>

              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="fa fa-plus"></i>
                  What access do I have on the free plan?
                </a>

                <p className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida
                </p>
              </li>

              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="fa fa-plus"></i>
                  Can I have multiple activities in a single feature?
                </a>

                <p className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida
                </p>
              </li>

              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="fa fa-plus"></i>
                  Which material types can you work with?
                </a>

                <p className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida
                </p>
              </li>

              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="fa fa-plus"></i>
                  Why Choose Our Services In Your Business?
                </a>

                <p className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida
                </p>
              </li>

              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="fa fa-plus"></i>
                  How To Get Start With Us?
                </a>

                <p className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida
                </p>
              </li>

              <li className="accordion-item">
                <a className="accordion-title" href="javascript:void(0)">
                  <i className="fa fa-plus"></i>
                  Why Choose Our Services In Your Business?
                </a>

                <p className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida
                </p>
              </li>
            </ul>
          </div>

          <div className="faq-contact">
            <div className="section-title">
              <span>Questions</span>
              <h2>Do You Have Any Questions?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="faq-contact-form">
              <form id="contactForm" novalidate="true">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6">
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

                  <div className="col-lg-6 col-md-6">
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

                  <div className="col-lg-6 col-md-6">
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

                  <div className="col-lg-6 col-md-6">
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
                        rows="6"
                        required=""
                        data-error="Write your message"
                        placeholder="Your Message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="send-btn">
                      <button type="submit" className="default-btn disabled">
                        Send Message
                        <span></span>
                      </button>
                    </div>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End FAQ Area  */}
      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default FAQ;
