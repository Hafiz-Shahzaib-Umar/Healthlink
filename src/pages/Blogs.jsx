import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Blogs() {
  return (
    <>
      {/* Start Header Area */}
      <Header />
      {/* End Header Area */}

      {/* Start Page Title Area */}
      <div className="page-title-area item-bg-5">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Blog</h2>
                <ul>
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Blog Area */}

      <section class="blog-area ptb-100">
        <div class="container-fluid">
          <div class="section-title">
            <span>News</span>
            <h2>Our Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum su
            </p>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <div class="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\news1.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" class="date">
                    20 April, 2024
                  </Link>
                </div>

                <div class="content">
                  <h3>
                    <Link to="/blogdetails">
                      Telehealth Is Here To Stay. In Your Facility Ready?
                    </Link>
                  </h3>

                  <Link to="/blogdetails" class="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <div class="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\news2.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" class="date">
                    20 April, 2024
                  </Link>
                </div>

                <div class="content">
                  <h3>
                    <Link to="/blogdetails">
                      Coronavirus stimulus checks: What you need to know
                    </Link>
                  </h3>

                  <Link to="/blogdetails" class="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <div class="image">
                  <Link to="single-blog.html">
                    <img src="src\assets\images\news3.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" class="date">
                    20 April, 2024
                  </Link>
                </div>

                <div class="content">
                  <h3>
                    <Link to="/blogdetails">
                      People worldwide adjust to new life amid COVID-19
                    </Link>
                  </h3>

                  <Link to="/blogdetails" class="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <div class="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\image7.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" class="date">
                    20 April, 2024
                  </Link>
                </div>

                <div class="content">
                  <h3>
                    <Link to="/blogdetails">
                      New Africa coronavirus crisis looms with internal spread
                    </Link>
                  </h3>

                  <Link to="/blogdetails" class="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <div class="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\image5.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" class="date">
                    20 April, 2024
                  </Link>
                </div>

                <div class="content">
                  <h3>
                    <Link to="/blogdetails">
                      Spain death toll up by almost 400 as cases rise around the
                      globe
                    </Link>
                  </h3>

                  <Link to="/blogdetails" class="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <div class="image">
                  <Link to="/blogdetails">
                    <img src="src\assets\images\image6.jpg" alt="image" />
                  </Link>

                  <Link to="/blogdetails" class="date">
                    20 April, 2024
                  </Link>
                </div>

                <div class="content">
                  <h3>
                    <Link to="/blogdetails">
                      Can a face mask protect me from coronavirus-2024?
                    </Link>
                  </h3>

                  <Link to="/blogdetails" class="blog-btn">
                    Read More +
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-12 col-md-12">
              <div class="pagination-area">
                <Link to="#" class="prev page-numbers">
                  <i class="fa fa-chevron-left"></i>
                </Link>
                <Link to="#" class="page-numbers">
                  1
                </Link>
                <span class="page-numbers current" aria-current="page">
                  2
                </span>
                <Link to="#" class="page-numbers">
                  3
                </Link>
                <Link to="#" class="page-numbers">
                  4
                </Link>
                <Link to="#" class="next page-numbers">
                  <i class="fa fa-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End Blog Area */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default Blogs;
