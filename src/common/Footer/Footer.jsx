import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate("/contactUs");
    setTimeout(() => {
      document
        .getElementById("faq-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  // export default function Footer() {
  return (
    <>
      <div className="footer pt-3 bg-dark text-white justify-content-space-between">
        <div className="footer-top">
          <div className="container-fluid p-4">
            <Row>
              <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <div className="footer-logo ">
                    <img src="/images/logo.png" alt="logo" className="logo" />
                  </div>
                  <div className="footer-about-content mb-4">
                    DocHub is a registered start up company empaneled with
                    10000+ Doctors, 500+ Hospitals, lives touched of more than 2
                    Million patients.
                  </div>
                  <div className="social-icon">
                    <ul className="d-flex list-unstyled p-left-0">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="icon"
                        >
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/?lang=en&mx=2"
                          target="blank"
                          className="icon"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/feed/"
                          target="blank"
                          className="icon"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/?hl=en"
                          target="blank"
                          className="icon"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/"
                          target="blank"
                          className="icon"
                        >
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <h2 className="footer-title">For Information</h2>
                  <ul className="list-unstyled p-left-0 ">
                    <li>
                      <Link to={"/about-us"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/about-us"}>Booking Guid</Link>
                    </li>
                    <li>
                      <Link to={"/contactUs"}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={"/contactUs"} onClick={handleFaqClick}>
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <h2 className="footer-title">Helpful Links</h2>
                  <ul className="list-unstyled p-left-0">
                    <li>
                      <Link to={"/book-appointment"}>Book Appointment</Link>
                    </li>
                    <li>
                      <Link to={"/book-appointment"}>Search for doctors</Link>
                    </li>
                    <li>
                      <Link to={"/book-appointment"}>Search for hospitals</Link>
                    </li>
                    <li>
                      <Link to={"/book-appointment"}>SMS Booking</Link>
                    </li>
                    <li>
                      <Link to={"/book-appointment"}>Services</Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="footer-widget">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      <p>DocHub CONSULTANCY PVT LTD, Surat, Gujarat</p>
                    </div>
                    <div className="footer-address">
                      <span>
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                      <p>+91 9867654439</p>
                    </div>
                    <p>Customer Support:</p>
                    <div className="footer-address">
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <p>support@dochub.com</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <hr />

        <div className="container-fluid foooter-bottom">
          <Row>
            <Col sm={12} lg={6} md={6}>
              <div className="copyright-text">
                <p>
                  <span className="me-1">
                    <FontAwesomeIcon icon={faCopyright} />
                  </span>
                  2025 DocHub.All rights reserved.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={6} md={6}>
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li>
                    <Link to={"/terms"}>Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to={"/policy"}>Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
