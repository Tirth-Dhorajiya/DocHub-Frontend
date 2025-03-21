import React from "react";
import { homeBottomCardData } from "../Cards/allCardData";
import { HomeBottomCard } from "../Cards/AllCard";
import { Row } from "react-bootstrap";

const OurServices = () => {
  return (
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
  );
};

export default OurServices;
