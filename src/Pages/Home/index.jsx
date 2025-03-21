import React, { useState } from "react";
import "./Home.css";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Counter from "../../Component/Counter/Counter";
import CarouselComponent from "../../Component/HomePage/Carousel/CarouselComponent";
import EmailInput from "../../Component/Validation/EmailInput";
import HomeSection from "../../Component/HomePage/HomeSection";
import HowItWorks from "../../Component/HomePage/HowItWorks";
import ImageBanner from "../../Component/HomePage/ImageBanner";
import OurServices from "../../Component/HomePage/OurServices";

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
      {/* carousel start */}
      <CarouselComponent />

      {/* section start */}
      <Container>
        <HomeSection />

        <HowItWorks />

        {/* Image Banner */}

        <ImageBanner />

        {/* Our services */}
        <OurServices />
        {/* Docter Counter  */}
        <Counter />

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
    </>
  );
}
