import React, { useState } from "react";
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { abtBottomCard, abtUpperCard } from "../../Component/Cards/allCardData";
import { AbtBottomCard, AbtUpperCard } from "../../Component/Cards/AllCard";
export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Header />
      <div className="heading text-center mt-4 abt_title">
        <h1 className="fw-bold text-custom">About DocHub</h1>

        <h5>Take A Right Step For Your Life.</h5>
      </div>
      <Container className="mt-4">
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={12} sm={12}>
            <img
              src="\images\abt_imgs\about-img.jpg"
              alt=""
              className="d-flex mw-100 justify-content-center"
            />
          </Col>
          <Col lg={6} md={12} sm={12} className="mt-4">
            <h2 className="fw-bold text-custom">
              Tackle The Challenge Of Delivering Health Care
            </h2>
            <p>
              At <span>DocHub</span>, we take the guesswork out of finding the
              right doctors, hospitals, and care for you and your family. By
              making healthcare easier and more transparent, Healthgrades
              empowers you to make decisions based on information, not just
              instinct. You can rest easy knowing you and your family are
              receiving proven, high-quality care that's right for you.
            </p>
            <p>
              <span>DocHub</span> search and account tools are where quality
              meets convenience. Filter your search to find doctors who meet
              your family's appointment needs, from on-demand telehealth
              appointments to online scheduling for in-person appointments.
            </p>
            {isExpanded && (
              <p>
                Once you've found the right doctors, build your Care Team so you
                can have everyone's doctors all in one place, plus keep track of
                upcoming appointments you've booked online through Healthgrades.
                Together, our organizational tools make Healthgrades the heart
                of your family's healthcare organization.
              </p>
            )}
            <button onClick={toggleContent} className="readBtn">
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </Col>
        </Row>
      </Container>

      <div>
        <h2 className="text-center text-custom p-5 pb-3">
          The Simplest Interface for Finding Healthcare
        </h2>
      </div>
      <Container>
        <Row className="p-3">
          {abtUpperCard.map((CardItem) => (
            <AbtUpperCard key={CardItem.id} CardItem={CardItem} />
          ))}
        </Row>

        <Row className="d-flex text-center mx-auto py-4 px-3 bg-light my-4">
          <Col lg={6} md={12} sm={12}>
            <div className="p-4 m-3">
              <h2 className="fw-bold mb-4 abtHeading ">Our Vision</h2>
              <div>
                <p>
                  To be leaders amongst the Obstetrics and Gynecological
                  healthcare providers.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="p-4 m-3">
              <h2 className="fw-bold mb-4 abtHeading">Our Mission</h2>
              <div>
                <p>
                  Patients should be able to trust doctors with their lives and
                  well being.To justify that trust, we as a profession have a
                  duty to maintain a good standard of practice and care and to
                  show respect for human life.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          {abtBottomCard.map((CardItem) => (
            <AbtBottomCard
              key={CardItem.id}
              CardItem={CardItem}
              className="mx-auto"
            />
          ))}
        </Row>
      </Container>
      <ScrollToTop smooth color="#028885" />
      <Footer />
    </>
  );
}
