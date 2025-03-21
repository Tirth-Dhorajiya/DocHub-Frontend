import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <>
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="align-self-center one_click fade-in-down">
            <h2 data-aos="fade-up" data-aos-duration="3000">
              Bring Care to Your <br />
              <span className="hmspan">Home With One Click</span>
            </h2>
            <img
              src="/images/assests/section-bg.png"
              alt="something"
              className="p_bg"
            />
            <p
              className="text-start fs-5 position-relative"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Welcome to <span>DOCHUB</span>, where compassionate care meets
              medical excellence. Our state-of-the-art facility offers advanced
              treatments, expert specialists, and personalized healthcare
              services. From emergency care to specialized treatments, we
              prioritize patient well-being, safety, and comfort. Experience
              world-class healthcare with us—your trusted partner in health and
              healing.
            </p>
            <div
              className="click_abt align-items-center"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link to={"/about-us"}>About Us</Link>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={12}
          data-aos="fade-right"
          data-aos-duration="2000"
          className="d-flex justify-content-center"
        >
          <img
            src="/images/assests/img-01-bg.jpg"
            alt="img"
            className="fr_img img-fluid  "
          />
        </Col>
      </Row>
    </>
  );
};

export default HomeSection;
