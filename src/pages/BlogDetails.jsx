import React from "react";
// import "./BlogDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BlogDetails() {
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
                <h2>Blog Details</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Single Blog Area */}

      <section className="single-blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="single-blog-details">
                <div className="blog-details-image">
                  <img src="src\assets\images\blog-details.jpg" alt="image" />
                </div>

                <div className="content">
                  <ul className="list">
                    <li>
                      <a href="blog-details.html">By</a>
                    </li>
                    <li>
                      <a href="blog-details.html">John Doe</a>
                    </li>
                    <li>23 Jan, 2024</li>
                  </ul>
                  <h3>Chat With Your Care Team Anytime You Need to</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown specimen book.
                  </p>
                </div>

                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <div className="single-image">
                      <img src="src\assets\images\news1.jpg" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="details-features">
                      <li>
                        <i className="fa-regular fa-square-check"></i>
                        We see the full you - mind and body
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check"></i>
                        Urgent care
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check"></i>
                        Behaviour health
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check"></i>
                        Preventive health
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check"></i>
                        How to protect your home from germ
                      </li>
                      <li>
                        <i className="fa-regular fa-square-check"></i>Chronic
                        Care
                      </li>
                    </div>
                  </div>
                </div>

                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic.
                  </p>
                </div>

                <div className="quote">
                  <p>
                    <i className="fa-solid fa-quote-left"></i>
                    I’m as proud of many of the things we haven’t done as the
                    things we have done.
                  </p>
                </div>

                <div className="post-tags">
                  <ul className="tags">
                    <li>
                      <span>Tags:</span>
                    </li>
                    <li>
                      <a href="blog-details.html">Disinfection</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Cleaning</a>
                    </li>
                  </ul>
                </div>

                <div className="related-posts">
                  <h3>Related Post</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="posts-item">
                        <div className="image">
                          <a href="blog-details.html">
                            <img
                              src="src\assets\images\news1.jpg"
                              alt="image"
                            />
                          </a>

                          <a href="blog-details.html" className="date">
                            08 <span>June</span>
                          </a>
                        </div>

                        <div className="content">
                          <h3>
                            <a href="blog-details.html">
                              Rethinking the way you receive care
                            </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <a href="blog-details.html" className="posts-btn">
                            Read More +
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="posts-item">
                        <div className="image">
                          <a href="blog-details.html">
                            <img
                              src="src\assets\images\news2.jpg"
                              alt="image"
                            />
                          </a>

                          <a href="blog-details.html" className="date">
                            06 <span>Jan</span>
                          </a>
                        </div>

                        <div className="content">
                          <h3>
                            <a href="blog-details.html">
                              Our doctors are in, 24/7
                            </a>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>

                          <a href="blog-details.html" className="posts-btn">
                            Read More +
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comments-area">
                  <h2 className="comments-title">Comments</h2>
                  <ol className="comment-list">
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="src\assets\images\1.jpg"
                              className="avatar"
                              alt="image"
                            />
                            <b className="fn">Devit Killer</b>
                          </div>
                          <div className="comment-metadata">
                            <a href="index.html">
                              <time>Jnauary 12, 2024</time>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Software hack from an initial feasibility study,
                            continuing through sucessl implna business you have
                            to be But we know there's a better
                          </p>
                        </div>
                        <div className="reply">
                          <a
                            href="blog-details.html"
                            className="comment-reply-link"
                          >
                            Reply
                          </a>
                        </div>
                      </article>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src="src\assets\images\2.jpg"
                                  className="avatar"
                                  alt="image"
                                />
                                <b className="fn">Morah Jein </b>
                              </div>
                              <div className="comment-metadata">
                                <a href="index.html">
                                  <time>Jnauary 12, 2024</time>
                                </a>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                Software hack from an initial feasibility study,
                                continuing through sucessl implna business you
                                have to be But we know there's a better
                              </p>
                            </div>
                            <div className="reply">
                              <a
                                href="blog-details.html"
                                className="comment-reply-link"
                              >
                                Reply
                              </a>
                            </div>
                          </article>
                        </li>
                      </ol>

                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <img
                              src="src\assets\images\3.jpg"
                              className="avatar"
                              alt="image"
                            />
                            <b className="fn">Devit Killer</b>
                          </div>
                          <div className="comment-metadata">
                            <a href="index.html">
                              <time>Jnauary 12, 2024</time>
                            </a>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Software hack from an initial feasibility study,
                            continuing through sucessl implna business you have
                            to be But we know there's a better
                          </p>
                        </div>
                        <div className="reply">
                          <a
                            href="blog-details.html"
                            className="comment-reply-link"
                          >
                            Reply
                          </a>
                        </div>
                      </article>
                    </li>
                  </ol>

                  <div className="comment-respond">
                    <h2 className="comment-reply-title">Leave a Reply</h2>
                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>
                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          cols="80"
                          rows="5"
                          maxlength="65525"
                          required="required"
                        ></textarea>
                      </p>
                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="author"
                          name="author"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required="required"
                        />
                      </p>
                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </p>
                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="wp-comment-cookies-consent"
                          id="wp-comment-cookies-consent"
                        />
                        <label for="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>
                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post A Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="widget-area" id="secondary">
                <section className="widget widget_search">
                  <h3 className="widget-title">Search</h3>

                  <form className="search-form search-top">
                    <label>
                      <span className="screen-reader-text">Search for:</span>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                      />
                    </label>
                    <button type="submit">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </section>

                <section className="widget widget_content">
                  <h3 className="widget-title">Department</h3>

                  <ul className="list">
                    <li>
                      Orthopeadic
                      <i className="fa fa-chevron-right"></i>
                    </li>
                    <li>
                      Diabetic Test
                      <i className="fa fa-chevron-right"></i>
                    </li>
                    <li>
                      Behaviour health
                      <i className="fa fa-chevron-right"></i>
                    </li>
                    <li>
                      COVID-Test
                      <i className="fa fa-chevron-right"></i>
                    </li>
                    <li>
                      Live Video
                      <i className="fa fa-chevron-right"></i>
                    </li>
                  </ul>
                </section>

                <section className="widget widget_tinzer_posts_thumb">
                  <h3 className="widget-title">Recent Posts</h3>
                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage cover bg1" role="img"></span>
                    </a>
                    <div className="info">
                      <time className="2024-06-30">30 January</time>
                      <h4 className="title usmall">
                        <a href="index.html">Ensure at the Hygenic office</a>
                      </h4>
                    </div>
                  </article>

                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage cover bg2" role="img"></span>
                    </a>
                    <div className="info">
                      <time className="2024-06-30">17 May</time>
                      <h4 className="title usmall">
                        <a href="index.html">Aliqua tuatorn grate hjyrdre</a>
                      </h4>
                    </div>
                  </article>

                  <article className="item">
                    <a href="#" className="thumb">
                      <span className="fullimage cover bg3" role="img"></span>
                    </a>
                    <div className="info">
                      <time className="2024-06-30">18 March</time>
                      <h4 className="title usmall">
                        <a href="index.html">How to protect from Germ</a>
                      </h4>
                    </div>
                  </article>
                </section>

                <section className="widget widget-image">
                  <img src="src\assets\images\image8.jpg" alt="image" />
                  <div className="click-btn">
                    <a href="contact.html">Click Here</a>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* End Single Blog Area */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default BlogDetails;
