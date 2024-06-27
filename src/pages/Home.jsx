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
                      aliqua. Quis ipsum suspendis Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Natus est animi minima ab
                      dolores quasi impedit repudiandae consectetur a!
                      Temporibus explicabo officiis maxime adipisci doloribus!
                    </p>

                    <div className="banner-btn">
                      <a href="appointment.html" className="default-btn">
                        Make An Appointment
                        <span></span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="banner-image">
                    <img
                      src="src\assets\images\doctor.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="default-shape">
          <div className="shape-1">
            <img src="src\assets\images\shape-1.png" alt="image" />
          </div>

          <div className="shape-2 rotateme">
            <img src="src\assets\images\shape-3.png" alt="image" />
          </div>

          <div className="shape-3">
            <img src="src\assets\images\shape-3.png" alt="image" />
          </div>

          <div className="shape-4">
            <img src="src\assets\images\shape-1.png" alt="image" />
          </div>

          <div className="shape-5">
            <img src="src\assets\images\shape-2.png" alt="image" />
          </div>

          <div className="shape-6">
            <img src="src\assets\images\shape-5.png" alt="image" />
          </div>

          <div className="shape-10">
            <img src="src\assets\images\shape-5.png" alt="image" />
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

      {/* <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="main-banner-content">
              <h1>
                TeleHealth Services Rapid Response to Coronavirus Pandemic
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse.
              </p>
              <div className="banner-btn">
                <Link to="/appointment" className="default-btn">
                  Make An Appointment
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <img src="src\assets\images\doctor.png" alt="image" />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
