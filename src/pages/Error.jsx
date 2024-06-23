import React from "react";
// import "./Error.css";

function Error() {
  return (
    <>
      {/* Start Error Area */}
      <section className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="src\assets\images\404.png" alt="error" />

                <h3>Page Not Found</h3>
                <p>
                  The page you are looking for might have been removed had its
                  name changed or is temporarily unavailable.
                </p>

                <a href="index.html" className="default-btn">
                  Go to Home
                  <span style={{ top: "50.5469px", left: "9.51562px" }}></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Area */}
    </>
  );
}

export default Error;
