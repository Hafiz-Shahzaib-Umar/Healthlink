import { useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import { authContext } from "../context/authContext.jsx";
// import HashLoader from "react-spinners/HashLoader";

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { dispatch } = useContext(authContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });

      console.log(ressult, "Login Data");

      setLoading(false);

      toast.success(result.message);

      navigate("/");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

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

            <form onSubmit={submitHandler}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 text-right mt-4">
                  <p className="forgot-password">
                    <a href="single-events.html">Forgot Password?</a>
                  </p>
                </div>

                <div className="col-lg-12">
                  <div className="send-btn">
                    <button
                      type="submit"
                      disabled={loading && true}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Log In Now
                      {/* {loading ? (
                        <HashLoader
                          size={30}
                          className="loader"
                          color="#ffffff"
                        />
                      ) : (
                        "Sign Up Now"
                      )} */}
                      <span></span>
                    </button>
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
      {/* End Log In Area  */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default SignIn;
