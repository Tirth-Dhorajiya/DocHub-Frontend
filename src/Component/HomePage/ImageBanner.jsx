import React from "react";
import { Link } from "react-router-dom";

const ImageBanner = () => {
  return (
    <div
      className="appointment-section d-flex px-3 my-5 mx-md-3 "
      style={{
        borderRadius: "10px",
        height: "370px",
      }}
    >
      <div className="flex-grow-1 px-3 py-4 py-md-5 py-lg-6 ps-lg-5 my-auto text-center text-md-start">
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
  );
};

export default ImageBanner;
