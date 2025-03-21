import React from "react";
import { HomeCard } from "../Cards/AllCard";
import { homeCardData } from "../Cards/allCardData";

const HowItWorks = () => {
  return (
    <>
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
    </>
  );
};

export default HowItWorks;
