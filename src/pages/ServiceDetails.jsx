import React from "react";
// import "./ServiceDetails.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ServiceDetails() {
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
                <h2>Services Details</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Services Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title Area */}

      {/* Start Service details  */}

      <div className="service-details ptb-100">
        <div className="container">
          <div className="service-details-image">
            <img src="src\assets\images\single-service.jpg" alt="image" />
          </div>

          <div className="service-details-content">
            <h3>We care your health and checkup with best</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim.
            </p>

            <h4>Our Services</h4>
            <p>
              No fake products and services. The customer is king, their lives
              and needs are the inspiration. But I must explain to you how all
              this mistaken idea of denouncing pleasure and praising pain was
              born and I will give you a complete account of the system, and
              expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because it is pleasure, but because
              those who do not know how to pursue pleasure rationally encounter
              consequences that are extremely painful.
            </p>

            <h4>Define Your Category</h4>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic.
            </p>

            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this.
            </p>

            <div className="service-details-info">
              <div className="single-info-box">
                <h4>Client</h4>
                <span>James Anderson</span>
              </div>

              <div className="single-info-box">
                <h4>Category</h4>
                <span>Fever, Allergies, Morbidity</span>
              </div>

              <div className="single-info-box">
                <h4>Date</h4>
                <span>February 28, 2024</span>
              </div>

              <div className="single-info-box">
                <h4>Share</h4>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/login/"
                      target="_blank"
                      className="facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/i/flow/login"
                      target="_blank"
                      className="twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/"
                      target="_blank"
                      className="pinterest"
                    >
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" className="instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="single-info-box">
                <a className="default-btn" href="single-services.html">
                  Live Preview
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Service details  */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area */}
    </>
  );
}

export default ServiceDetails;
