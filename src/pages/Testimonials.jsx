import React from "react";
// import "./Testimonials.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialSection from "../components/TestimonialSection.jsx";
import AppointmentSection from "../components/AppointmentSection.jsx";
import DoctorsSection from "../components/DoctorsSection.jsx";
import BlogSection from "../components/BlogSection.jsx";

function Testimonials() {
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
                <h2>Testimonials</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Testimonials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Testimonials Area */}
      <TestimonialSection />
      {/* End Testimonials Area */}

      {/* Start Doctor Area  */}
      <DoctorsSection />
      {/* End Doctor Area  */}

      {/* Start Appointment Area */}
      <AppointmentSection />
      {/* End Appointment Area */}

      {/* Start Blog Area  */}
      <BlogSection />
      {/* End Blog Area  */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default Testimonials;
