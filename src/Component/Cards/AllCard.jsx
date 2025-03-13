import React from "react";

import "./AllCard.css";

import { Card, CardImg, CardText, Col } from "react-bootstrap";

// this card is for home page(upper)
export const HomeCard = ({ CardItem }) => {
  return (
    <div className="homeCard" data-aos="zoom-in-up" data-aos-duration="3000">
      <CardImg
        src={CardItem.imgSrc}
        alt={CardItem.imgAlt}
        className="home-card-img"
      />
    </div>
  );
};

// this card is for home page(bottom)
export const HomeBottomCard = ({ CardItem }) => {
  return (
    <Col
      lg={4}
      md={6}
      sm={12}
      className="homeBottomCard"
      data-aos="zoom-in-up"
      data-aos-duration="3000"
    >
      <CardImg
        src={CardItem.imgSrc}
        alt={CardItem.imgAlt}
        className="home-card-img2"
      />
      <Card.Body className="object-fit-contain p-3">
        <Card.Title className="mb-2 text-custom card-title">
          {CardItem.title}
        </Card.Title>
        <Card.Text className="card-description">
          {CardItem.description}
        </Card.Text>
      </Card.Body>
    </Col>
  );
};

// this card is for About page(Upeer)
export const AbtUpperCard = ({ CardItem }) => {
  return (
    <Col lg={3} md={6} sm={6}>
      <Card className="pt-3 mb-1 card-group">
        <Card.Img
          src={CardItem.imgSrc}
          alt={CardItem.imgAlt}
          className="card-img"
          style={{ width: "100px" }}
        />
        <Card.Body>
          <Card.Title className="card-title">{CardItem.title}</Card.Title>

          <Card.Text className="card-description">
            {CardItem.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

// this card is for About page(bottom)
export const AbtBottomCard = ({ CardItem }) => {
  return (
    <Col lg={4} md={4} sm={12} className="my-4">
      <Card className="pt-3 mb-1 mx-auto align-items-center">
        <CardImg
          src={CardItem.imgSrc}
          alt={CardItem.imgAlt}
          style={{
            width: "100px",
            transition: "transform 0.3s ease-in-out",
            height: "auto",
          }}
        />
        <Card.Body>
          <CardText className="card-description">
            {CardItem.description}
          </CardText>
        </Card.Body>
      </Card>
    </Col>
  );
};
