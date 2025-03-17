import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../common/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import Slot from "./Slot";
import Footer from "../../common/Footer/Footer";
import { BeatLoader } from "react-spinners";

export default function Bookdetails() {
  const { id } = useParams(); // Get doctor ID from the URL
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://doc-hub-backend.vercel.app/api/doctors/${id}`) // Fetch doctor details
      .then((response) => {
        setDoctor(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <BeatLoader
        color="#6c63ff"
        className="d-flex justify-content-center align-items-center"
      />
    );
  if (!doctor) return <h2>Doctor not found</h2>;

  return (
    <>
      <Header />
      <Container>
        <Row className="p-5">
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex justify-content-center "
            style={{ maxHeight: "500px" }}
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="mw-100"
              style={{ backgroundColor: "#6c63ff" }}
            />
          </Col>
          <Col
            style={{ border: "1px solid rgb(160, 143, 143)" }}
            lg={6}
            md={12}
            sm={12}
            className="p-5"
          >
            <h1
              className="p-1"
              style={{ color: "rgba(0, 124, 157, 0.9)", fontWeight: "bold" }}
            >
              {doctor.name}
            </h1>
            <p className="p-1">
              <strong>Speciality:</strong>
              {doctor.title}
            </p>
            <p className="p-1">
              <strong>Experience:</strong> {doctor.experience}
            </p>
            <strong style={{ padding: "5px" }}>About</strong>
            <p className="p-1">{doctor.about}</p>
            <p className="p-1">
              <strong>Appointment fee:</strong> {doctor.fee}
            </p>
          </Col>
        </Row>
      </Container>
      <Slot doctor={doctor} />
      <Footer />
    </>
  );
}
