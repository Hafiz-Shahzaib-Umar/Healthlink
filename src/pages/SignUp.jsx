import React from "react";
// import "./SignUp.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SignUp() {
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
                <h2>Sign Up</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Sign Up</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Signup Area */}

      <div className="signup-area ptb-100">
        <div className="container">
          <div className="signup-form">
            <h3>Create your Account</h3>
            <form>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <select style={{ display: "none" }}>
                      <option value="Patient">Patient</option>
                      <option value="Doctor">Doctor</option>
                    </select>

                    <div className="nice-select" tabindex="0">
                      <span className="current">Select Category</span>
                      <ul className="list">
                        <li className="option selected">Patient</li>
                        <li className="option">Doctor</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkme"
                    />
                    <label className="form-check-label" for="checkme">
                      Keep Me Sign Up
                    </label>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="send-btn">
                    <a href="#" className="default-btn">
                      Sign Up Now
                      <span></span>
                    </a>
                  </div>
                  <br />
                  <span>
                    Already a registered user? <a href="sign-in.html">Login!</a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Signup Area */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default SignUp;
