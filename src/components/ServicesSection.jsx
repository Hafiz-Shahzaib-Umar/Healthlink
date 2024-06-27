import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section className="services-area pt-100 pb-70">
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
              <div className="services-item-two">
                <div className="icon">
                  <i className="fa fa-bacteria"></i>
                </div>
                <Link to="/servicedetails" target="_blank">
                  <h3>COVID-19 Consulting</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" target="_blank" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-shield-virus"></i>
                </div>
                <Link to="/servicedetails" target="_blank">
                  <h3>Special Follow Up</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" target="_blank" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-house-medical"></i>
                </div>
                <Link to="/servicedetails" target="_blank">
                  <h3>Dermatology</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" target="_blank" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-head-side-virus"></i>
                </div>
                <Link to="/servicedetails" target="_blank">
                  <h3>Mental Health</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" target="_blank" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-crutch"></i>
                </div>
                <Link to="/servicedetails" target="_blank">
                  <h3>Orthopedics</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" target="_blank" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="services-item-two bg">
                <div className="icon">
                  <i className="fa fa-person-pregnant"></i>
                </div>
                <Link to="/servicedetails" target="_blank">
                  <h3>Gynecological</h3>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore
                </p>
                <Link to="/servicedetails" target="_blank" className="read-btn">
                  Read More +
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
