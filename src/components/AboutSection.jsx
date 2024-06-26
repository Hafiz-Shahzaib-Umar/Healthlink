import React from "react";
// import "./AboutSection.css";

function About() {
  return (
    <>
      <section className="about-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="src\assets\images\about-2.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>About Us</span>
                <h3>Connect to a Doctor During the COVID-19 Pandemic</h3>
                <p>
                  Many healthcare systems around the world together with
                  government agencies and startup companies are building and
                  delivering Telehealth solutions the future of non-emergency
                  and routine healthcare delivery
                </p>

                <ul className="about-features two">
                  <li>
                    <span>
                      <i className="fa fa-user"></i>
                      Orthopedic Solutions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-disease"></i>
                      Chronic Disease
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa fa-vial-virus"></i>
                      COVID-19 Test
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-flask-vial"></i>
                      Diabetic Test
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-people-group"></i>
                      Family Solutions
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-clipboard-question"></i>
                      Medical Questions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
