import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import DoctorsSection from "../components/DoctorsSection.jsx";
import GoalsSection from "../components/GoalsSection.jsx";
import BlogSection from "../components/BlogSection.jsx";
import AppointmentSection from "../components/AppointmentSection.jsx";
import TestimonialSection from "../components/TestimonialSection.jsx";

function Home() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}

      {/* Start Main Banner Area */}
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-7">
                  <div className="main-banner-content">
                    <h1>
                      TeleHealth Services Rapid Response to Coronavirus Pandemic
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse.
                    </p>
                    <div className="banner-form">
                      <form>
                        <div className="row align-items-center justify-content-center">
                          <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                              <select style={{ display: "none" }}>
                                <option>Specialist</option>
                                <option value="">Dr. James Adult</option>
                                <option value="">Dr. James Alison</option>
                                <option value="">Dr. Peter Adlock</option>
                              </select>
                              <div className="nice-select" tabindex="0">
                                <span className="current">Specialist</span>
                                <ul className="list">
                                  <li
                                    data-value="Specialist"
                                    className="option selected"
                                  >
                                    Specialist
                                  </li>
                                  <li data-value="" className="option">
                                    Dr. James Adult
                                  </li>
                                  <li data-value="" className="option">
                                    Dr. James Alison
                                  </li>
                                  <li data-value="" className="option">
                                    Dr. Peter Adlock
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                              <select style={{ display: "none" }}>
                                <option>Category</option>
                                <option value="">Cardiologists</option>
                                <option value="">Dermatologists</option>
                                <option value="">Endocrinologists</option>
                              </select>
                              <div className="nice-select" tabindex="0">
                                <span className="current">Category</span>
                                <ul className="list">
                                  <li
                                    data-value="Category"
                                    className="option selected"
                                  >
                                    Category
                                  </li>
                                  <li data-value="" className="option">
                                    Cardiologists
                                  </li>
                                  <li data-value="" className="option">
                                    Dermatologists
                                  </li>
                                  <li data-value="" className="option">
                                    Endocrinologists
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                              <select style={{ display: "none" }}>
                                <option>Condition</option>
                                <option>Fever</option>
                                <option>Allergies</option>
                                <option>Morbidity</option>
                              </select>
                              <div className="nice-select" tabindex="0">
                                <span className="current">Condition</span>
                                <ul className="list">
                                  <li
                                    data-value="Condition"
                                    className="option selected"
                                  >
                                    Condition
                                  </li>
                                  <li data-value="Fever" className="option">
                                    Fever
                                  </li>
                                  <li data-value="Allergies" className="option">
                                    Allergies
                                  </li>
                                  <li data-value="Morbidity" className="option">
                                    Morbidity
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6">
                            <div className="form-group">
                              <button type="submit" className="banner-form-btn">
                                Search
                                <i className="fa fa-search"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="banner-btn">
                      <Link to="/appointment" className="default-btn">
                        Make An Appointment
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="banner-img ">
                    <img src="src\assets\images\doctor.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="default-shape">
          <div className="shape-1">
            <img src="src\assets\images\shape-1.png" alt="image1" />
          </div>

          <div className="shape-2 rotateme">
            <img src="src\assets\images\shape-3.png" alt="image2" />
          </div>

          <div className="shape-3">
            <img src="src\assets\images\shape-3.png" alt="image3" />
          </div>

          <div className="shape-4">
            <img src="src\assets\images\shape-1.png" alt="image4" />
          </div>

          <div className="shape-5">
            <img src="src\assets\images\shape-2.png" alt="image5" />
          </div>

          <div className="shape-6">
            <img src="src\assets\images\shape-5.png" alt="image6" />
          </div>

          <div className="shape-10">
            <img src="src\assets\images\shape-7.png" alt="image10" />
          </div>
        </div>
      </div>
      {/* End Main Banner Area */}

      {/* Start About Area  */}
      <AboutSection />
      {/* End About Area  */}

      {/* Start Services Area  */}
      <ServicesSection />
      {/* End Services Area  */}

      {/* Start Doctor Area  */}
      <DoctorsSection />
      {/* End Doctor Area  */}

      {/* Start Appointment Area */}
      <AppointmentSection />
      {/* End Appointment Area */}

      {/* Start Goal Area */}
      <GoalsSection />
      {/* End Goal Area */}

      {/* Start Testimonials Area */}

      <TestimonialSection />
      {/* End Testimonials Area */}

      {/* Start Blog Area  */}
      <BlogSection />
      {/* End Blog Area  */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default Home;
