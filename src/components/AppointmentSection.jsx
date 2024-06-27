import { useState } from "react";

function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    speciality: "Select Category",
    doctor: "Select Doctor",
    gender: "Gender",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="appointment-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="single-fun-fact">
                    <h3>
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="2700"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">2</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-formatting-mark">,</span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">7</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Care Locations</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-fun-fact">
                    <h3>
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="2.7"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">2</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-formatting-mark odometer-radix-mark">
                            .
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">7</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                      <span className="sign-icon">K</span>
                    </h3>
                    <p>Virtual Care Solutions</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-fun-fact">
                    <h3>
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="99.60"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">9</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">9</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-formatting-mark odometer-radix-mark">
                            .
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">6</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                      <span className="sign-icon">%</span>
                    </h3>
                    <p>Connections Success Rate</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-fun-fact">
                    <h3>
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="30"
                      >
                        <div className="odometer-inside">
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">3</span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <span className="odometer-digit">
                            <span className="odometer-digit-spacer">8</span>
                            <span className="odometer-digit-inner">
                              <span className="odometer-ribbon">
                                <span className="odometer-ribbon-inner">
                                  <span className="odometer-value">0</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </div>
                      </span>
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Award Winning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="appointment-form">
                <div className="content">
                  <span>Call to Action</span>
                  <h3>Make An Appointment</h3>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter Your Name"
                          required
                        />
                        <i className="fa-solid fa-user"></i>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                          required
                        />
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter Phone Number"
                          required
                        />
                        <i className="fa-solid fa-phone"></i>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <select
                          style={{ display: "none" }}
                          value={formData.speciality}
                          onChange={handleInputChange}
                          name="speciality"
                        >
                          <option value="Select Category">
                            Select Category
                          </option>
                          <option value="cardiologists">Cardiologists</option>
                          <option value="dermatologists">Dermatologists</option>
                          <option value="endocrinologists">
                            Endocrinologists
                          </option>
                          <option value="gastroenterologists">
                            Gastroenterologists
                          </option>
                          <option value="allergists">Allergists</option>
                          <option value="immunologists">Immunologists</option>
                        </select>
                        <div className="nice-select" tabIndex="0">
                          <span className="current">Select Category</span>
                          <ul className="list">
                            <li className="option selected">Select Category</li>
                            <li className="option">Cardiologists</li>
                            <li className="option">Dermatologists</li>
                            <li className="option">Endocrinologists</li>
                            <li className="option">Gastroenterologists</li>
                            <li className="option">Allergists</li>
                            <li className="option">Immunologists</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <select style={{ display: "none" }}>
                          <option value="Select Doctor">Select Doctor</option>
                          <option value="Dr. James Adult">
                            Dr. James Adult
                          </option>
                          <option value="Dr. James Alison">
                            Dr. James Alison
                          </option>
                          <option value="Dr. Peter Adlock">
                            Dr. Peter Adlock
                          </option>
                          <option value="Dr. Jelin Alis">Dr. Jelin Alis</option>
                          <option value="Dr. Josh Taylor">
                            Dr. Josh Taylor
                          </option>
                          <option value="Dr. Steven Smith">
                            Dr. Steven Smith
                          </option>
                        </select>
                        <div className="nice-select" tabIndex="0">
                          <span className="current">Select Doctor</span>
                          <ul className="list">
                            <li className="option selected">Select Doctor</li>
                            <li className="option">Dr. James Adult</li>
                            <li className="option">Dr. James Alison</li>
                            <li className="option">Dr. Peter Adlock</li>
                            <li className="option">Dr. Jelin Alis</li>
                            <li className="option">Dr. Josh Taylor</li>
                            <li className="option">Dr. Steven Smith</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group">
                        <select
                          style={{ display: "none" }}
                          value={formData.gender}
                          name="gender"
                          onChange={handleInputChange}
                        >
                          <option value="gender">Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="nice-select" tabIndex="0">
                          <span className="current">Gender</span>
                          <ul className="list">
                            <li className="option selected">Gender</li>
                            <li className="option">Male</li>
                            <li className="option">Female</li>
                            <li className="option">Other</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="appointment-btn">
                        <button type="submit" className="default-btn">
                          Confirm Appointment
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppointmentSection;
