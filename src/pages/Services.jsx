import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ServicesSection from "../components/ServicesSection.jsx";
import DoctorsSection from "../components/DoctorsSection.jsx";
import BlogSection from "../components/BlogSection.jsx";
import AppointmentSection from "../components/AppointmentSection.jsx";
import TestimonialSection from "../components/TestimonialSection.jsx";

function Services() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}

      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-6">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Services</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Services Area  */}
      <section className="services-page-bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>Our Healthcare Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-bacteria"></i>
                </div>
                <Link to="/servicedetails">
                  <h3>COVID-19 Consulting</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-shield-virus"></i>
                </div>
                <Link to="/servicedetails">
                  <h3>Special Follow Up</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-house-medical"></i>
                </div>
                <Link to="/servicedetails">
                  <h3>Dermatology</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-head-side-virus"></i>
                </div>
                <Link to="/servicedetails">
                  <h3>Mental Health</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-crutch"></i>
                </div>
                <Link to="/servicedetails">
                  <h3>Orthopedics</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-person-pregnant"></i>
                </div>
                <Link to="/servicedetails">
                  <h3>Gynecological</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Area  */}

      {/* Start Doctor Area  */}
      <DoctorsSection />
      {/* End Doctor Area  */}

      {/* Start Appointment Area */}
      <AppointmentSection />
      {/* End Appointment Area */}

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

export default Services;
