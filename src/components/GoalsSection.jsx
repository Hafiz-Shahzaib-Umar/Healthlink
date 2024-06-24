import React from "react";
import { Link } from "react-router-dom";

function GoalsSection() {
  return (
    <>
      <section className="goal-area  pt-100 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="goal-image">
                <img src="src\assets\images\goal.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="goal-content-item">
                <div className="item-content">
                  <span>Goal</span>
                  <h3>The Telehealth Goals</h3>
                  <p>
                    Many healthcare systems around the world together with
                    government agencies and startup companies are building and
                    delivering Telehealth{" "}
                  </p>

                  <ul className="list">
                    <li>
                      Make health care accessible to people who live in rural or
                      isolated communities
                    </li>
                    <li>
                      Make services more readily available or convenient for
                      people with limited mobility, time or transportation
                      options.
                    </li>
                    <li>
                      Improve communication and coordination of care among
                      members of a health care team and a patient
                    </li>
                    <li>Provide support for self-management of health care.</li>
                  </ul>
                  <div className="goal-btn">
                    <Link
                      to="https://www.youtube.com/watch?v=cOT6DjgER2Y"
                      target="_blank"
                      className="default-btn popup-youtube"
                    >
                      Watch Live Video
                      <span
                        style={{ top: "29.3594px", left: "100.5px" }}
                      ></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GoalsSection;
