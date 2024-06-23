import React from "react";
// import "./About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection.jsx";
import DoctorsSection from "../components/DoctorsSection.jsx";
import GoalsSection from "../components/GoalsSection.jsx";
import BlogSection from "../components/BlogSection.jsx";

function About() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}

      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-1">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>About</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start About Area  */}
      <AboutSection />
      {/* End About Area  */}

      {/* Start Doctor Area  */}
      <DoctorsSection />
      {/* End Doctor Area  */}

      {/* Start Goal Area */}
      <GoalsSection />
      {/* End Goal Area */}

      {/* Start Blog Area  */}
      <BlogSection />
      {/* End Blog Area  */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default About;
