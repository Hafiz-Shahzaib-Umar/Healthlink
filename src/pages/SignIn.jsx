import React from "react";
// import "./SignIn.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SignIn() {
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
                <h2>Sign In</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Sign In</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Log In Area  */}

      <div className="sign-in-area ptb-100">
        <div className="container">
          <div className="sign-in-form">
            <div className="sign-in-title">
              <h3>Welcome Back!</h3>
              <p>Please Sign In to your account.</p>
            </div>

            <form>
              <div className="row justify-content-center">
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
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkme"
                    />
                    <label className="form-check-label" for="checkme">
                      Keep me Log In
                    </label>
                  </div>
                </div>

                <div className="col-lg-12 text-right">
                  <p className="forgot-password">
                    <a href="single-events.html">Forgot Password?</a>
                  </p>
                </div>

                <div className="col-lg-12">
                  <div className="send-btn">
                    <a href="#" className="default-btn">
                      Log In Now
                      <span></span>
                    </a>
                  </div>
                  <br />
                  <span>
                    Don't have account? <a href="sign-up.html">Signup!</a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Log In Area  */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default SignIn;
