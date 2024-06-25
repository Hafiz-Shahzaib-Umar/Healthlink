import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function DoctorDetails() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}
      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Doctor Details</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Doctor Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Product Details Area */}
      <section className="product-details-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="product-details-image">
                <img src="src\assets\images\image1.jpg" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <a href="#" className="btn btn-primary mb-3">
                Neurologist
              </a>

              <div className="product-details-desc">
                <h3>Dr. James Adult</h3>
                <div className="product-review">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <Link to="#" className="rating-count">
                    3 reviews
                  </Link>
                </div>
                <p>Specialization in Neurology</p>

                <div
                  className="card"
                  style={{ width: "22rem", height: "16rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">Appointment Price - Rs.1000</h5>
                    <h6 className="card-title">Available Time Slots:</h6>

                    <div className=" mb-4">
                      <div className="row mb-2">
                        <div className="col-6">Saturday:</div>
                        <div className="col-6"> 5:30pm-8:30pm</div>
                      </div>
                      <div className="row mb-2">
                        {" "}
                        <div className="col-6">Monday:</div>
                        <div className="col-6"> 10:00am-3:00pm</div>
                      </div>
                      <div className="row mb-2">
                        {" "}
                        <div className="col-6">Wednesday:</div>
                        <div className="col-6"> 5:00pm-9:30pm</div>
                      </div>
                    </div>

                    <a href="#" className="btn btn-primary btn-block">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-12 col-md-12">
              <div className="tab products-details-tab">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-md-12">
                    <div className="tab_content">
                      <div className="tabs_item">
                        <div className="products-details-tab-content">
                          <p>
                            DeSign Inspiration lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit. Morbi commodo, ipsum
                            sed pharetra gravida, orci magna rhoncus neque, id
                            pulvinar odio lorem non turpis. Nullam sit amet
                            enim. Suspendisse id velit vitae ligula volutpat
                            condimentum. Aliquam erat volutpat. Sed quis velit.
                            Nulla facilisi. Nulla libero. Vivamus pharetra
                            posuere sapien. Nam consectetuer. Sed aliquam, nunc
                            eget euismod ullamcorper, lectus nunc ullamcorper
                            orci, fermentum bibendum enim nibh eget ipsum. Nam
                            consectetuer. Sed aliquam, nunc eget euismod
                            ullamcorper, lectus nunc ullamcorper orci, fermentum
                            bibendum enim nibh eget ipsum. Nulla libero. Vivamus
                            pharetra posuere sapien.
                          </p>
                        </div>
                      </div>
                      <div className="tabs_item">
                        <div className="products-details-tab-content">
                          <div className="product-review-form">
                            <h3>Customer Reviews</h3>
                            <div className="review-title">
                              <div className="rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                              </div>
                              <p>Based on 3 reviews</p>
                              <a href="#" className="default-btn">
                                Write a Review
                                <span></span>
                              </a>
                            </div>
                            <div className="review-comments">
                              <div className="review-item">
                                <div className="rating">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                                <h3>Good</h3>
                                <span>
                                  <strong>Admin</strong> on{" "}
                                  <strong>Sep 21, 2019</strong>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation.
                                </p>
                                <a href="#" className="review-report-link">
                                  Report as Inappropriate
                                </a>
                              </div>
                              <div className="review-item">
                                <div className="rating">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                                <h3>Good</h3>
                                <span>
                                  <strong>Admin</strong> on{" "}
                                  <strong>Sep 21, 2019</strong>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation.
                                </p>
                                <a href="#" className="review-report-link">
                                  Report as Inappropriate
                                </a>
                              </div>
                              <div className="review-item">
                                <div className="rating">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="far fa-star"></i>
                                </div>
                                <h3>Good</h3>
                                <span>
                                  <strong>Admin</strong> on{" "}
                                  <strong>Sep 21, 2019</strong>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation.
                                </p>
                                <a href="#" className="review-report-link">
                                  Report as Inappropriate
                                </a>
                              </div>
                            </div>
                            <div className="review-form">
                              <h3>Write a Review</h3>
                              <form>
                                <div className="row justify-content-center">
                                  <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <input
                                        type="text"
                                        id="review-title"
                                        name="review-title"
                                        placeholder="Enter your review a title"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                      <textarea
                                        name="review-body"
                                        id="review-body"
                                        cols="30"
                                        rows="7"
                                        placeholder="Write your comments here"
                                        className="form-control"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="col-lg-12 col-md-12">
                                    <button
                                      type="submit"
                                      className="default-btn"
                                    >
                                      Submit Review
                                      <span></span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="card text-center mt-5">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Feedback
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p>
                  DeSign Inspiration lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Morbi commodo, ipsum sed pharetra gravida,
                  orci magna rhoncus neque, id pulvinar odio lorem non turpis.
                  Nullam sit amet enim. Suspendisse id velit vitae ligula
                  volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
                  Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
                  Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper,
                  lectus nunc ullamcorper orci, fermentum bibendum enim nibh
                  eget ipsum. Nam consectetuer. Sed aliquam, nunc eget euismod
                  ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum
                  enim nibh eget ipsum. Nulla libero. Vivamus pharetra posuere
                  sapien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Product Details Area */}
      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}
