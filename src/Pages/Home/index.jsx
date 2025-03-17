import React, { useState } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import "./Home.css";
import { HomeBottomCard, HomeCard } from "../../Component/Cards/AllCard";
import { Link } from "react-router-dom";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Counter from "../../Component/Counter/Counter";
import ScrollToTop from "react-scroll-to-top";
import CarouselComponent from "../../Component/Carousel/CarouselComponent";
import {
  homeCardData,
  homeBottomCardData,
} from "../../Component/Cards/allCardData";
import EmailInput from "../../Component/Validation/EmailInput";

export default function Home() {
  const [email, setEmail] = useState(""); // Store email input value
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return; // Prevent form submission if empty
    setShowModal(true);
    setEmail(""); // Clear the input after successful submission
  };
  return (
    <>
      <Header />

      {/* carousel start */}
      <CarouselComponent />

      {/* section start */}
      <Container>
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
                medical excellence. Our state-of-the-art facility offers
                advanced treatments, expert specialists, and personalized
                healthcare services. From emergency care to specialized
                treatments, we prioritize patient well-being, safety, and
                comfort. Experience world-class healthcare with us—your trusted
                partner in health and healing.
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

        {/*  */}

        <div
          className="container works text center mb-5"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 data-aos="fade-up" data-aos-duration="3000">
            We Made It Simple
            <br />
            <span className="hmspan">How It Works</span>
          </h2>
          <p data-aos="fade-up" data-aos-duration="2000">
            At <span>DOCHUB</span>, we’ve made healthcare simple. Our seamless
            process ensures easy appointment booking, quick check-ins, expert
            consultations, and hassle-free treatments. With advanced technology
            and compassionate care, we prioritize your well-being at every step.
            Experience a smooth, patient-friendly journey—from diagnosis to
            recovery—with us. Your health, made simple!
          </p>
          <div className="container d-flex justify-content-around">
            {homeCardData.map((v, i) => (
              <HomeCard key={i} CardItem={v} />
            ))}
          </div>
        </div>

        {/* Image Banner */}
        <div className="appointmentSection  ">
          <div
            className="appointment-section d-flex px-3 my-5 mx-md-3 "
            style={{
              borderRadius: "10px",
              height: "370px",
            }}
          >
            <div className="flex-grow-1 px-3 py-4 py-md-5 py-lg-6 ps-lg-5 ">
              <div
                className="h4 text-white"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <h1>Book Appointment</h1>
                <h2 className="mt-2">With 100+ Trusted Doctors</h2>
              </div>
              <button
                className="btn btn-light text-dark px-4 py-2 mt-3"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <Link
                  className="text-dark text-decoration-none fs-5 "
                  to={"/book-appointment"}
                >
                  Read More
                </Link>
              </button>
            </div>
            <div className="d-none d-md-block col-md-6 col-lg-auto position-relative">
              <img
                className=" position-absolute appoinImg bottom-0 end-0"
                src="\images\assests\appointment_img-DzbZlMsi.png"
                alt=""
                style={{ width: "370px" }}
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              />
            </div>
          </div>

          {/* Our services */}
          <div className="bg-light p-3">
            <div
              className="eltd-separator text-center"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h2 className="fw-bold ">Our Services</h2>
            </div>

            <h4
              className="d-flex justify-content-center p-3 subTitle4"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              The care which is directly related to patieant-treatment
            </h4>
            {/* Home page bottom cards */}
            <div>
              <Row className="justify-content-around p-3 mb-3">
                {homeBottomCardData.map((CardItem) => (
                  <HomeBottomCard
                    key={CardItem.id}
                    CardItem={CardItem}
                    className="mx-auto"
                  />
                ))}
              </Row>
            </div>
          </div>
          {/* Docter Counter  */}
          <Counter />
          {/*  */}
        </div>
        {/* notification menu */}

        <Row className="notification">
          <Col lg={6} md={6} sm={12}>
            <div className="rowItem text-start px-2 py-4">
              <div className="rowHeader">
                <h3 className="mb-3">Get The Notification</h3>
              </div>
              <h1>
                <em>We have some</em>
                <br />
                <span>
                  <strong>Good news</strong>
                </span>
              </h1>
              <div className="rowText py-3 mx-auto">
                Sign up for our newsletter to receive new offers and discounts.
              </div>
              <div className="emailSubscribe ">
                <form className="d-flex flex-column" onSubmit={handleSubscribe}>
                  <EmailInput value={email} onChange={setEmail} />
                  <button type="submit" className="btnSubscribe px-4 py-2 mt-3">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}></Col>
        </Row>
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Subscription Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You have successfully subscribed to our newsletter!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => setShowModal(false)}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <ScrollToTop smooth color="#028885" />
      <Footer />
    </>
  );
}
