import { useState, CSSProperties } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
// import HashLoader from "react-spinners/HashLoader";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          Content_Type: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      setLoading(false);

      toast.success(message);

      navigate("/sign-in");
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
            <form onSubmit={submitHandler}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

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
                <div className="col-lg-12">
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                    >
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Gender</option>
                      <option value="patient">Male</option>
                      <option value="doctor">Female</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="send-btn btn btn-block">
                    <button
                      type="submit"
                      disabled={loading && true}
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Sign Up Now
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
      {/* End Signup Area */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default SignUp;
