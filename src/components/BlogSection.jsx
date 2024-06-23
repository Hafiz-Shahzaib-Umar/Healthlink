import React from "react";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <>
      <section className="blog-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title">
            <span>News</span>
            <h2>Our Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum su
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\news1.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" className="date">
                    20 April, 2024
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/blogdetails">
                      Telehealth Is Here To Stay. In Your Facility Ready?
                    </Link>
                  </h3>

                  <Link to="/blogdetails" className="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\news2.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" className="date">
                    20 April, 2024
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/blogdetails">
                      Coronavirus stimulus checks: What you need to know
                    </Link>
                  </h3>

                  <Link to="/blogdetails" className="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\news3.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" className="date">
                    20 April, 2024
                  </Link>
                </div>

                <div className="content">
                  <h3>
                    <Link to="/blogdetails">
                      People worldwide adjust to new life amid COVID-19
                    </Link>
                  </h3>

                  <Link to="/blogdetails" className="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSection;
