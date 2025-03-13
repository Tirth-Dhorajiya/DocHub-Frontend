import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [user, setUser] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      const loggedInUser = localStorage.getItem("user");
      const loggedInDoctor = localStorage.getItem("doctor");
      const loggedInAdmin = localStorage.getItem("admin");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
        setDoctor(null); // Clear doctor state if user is logged in
        setAdmin(null);
      } else if (loggedInDoctor) {
        setDoctor(JSON.parse(loggedInDoctor));
        setUser(null); // Clear user state if doctor is logged in
        setAdmin(null);
      } else if (loggedInAdmin) {
        setAdmin(JSON.parse(loggedInAdmin));
        setUser(null);
        setDoctor(null);
      } else {
        setUser(null);
        setDoctor(null);
        setAdmin(null);
      }
    };

    fetchUser();
    window.addEventListener("storage", fetchUser); // Listen for storage updates

    return () => {
      window.removeEventListener("storage", fetchUser);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      collapseOnSelect
      className="navbar"
    >
      <div className="container-fluid">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="d-inline-block align-top navLogo ms-4"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about-us"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/book-appointment"
              onClick={() => setExpanded(false)}
            >
              Book an Appointment
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/blog"
              onClick={() => setExpanded(false)}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contactUS"
              onClick={() => setExpanded(false)}
            >
              Contact Us
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            {user ? (
              <Nav.Link
                as={NavLink}
                to="/profile"
                className="contact-btn"
                onClick={() => setExpanded(false)}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#2196F3",
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  {user.email.charAt(0).toUpperCase()}
                </div>
              </Nav.Link>
            ) : doctor ? (
              <Nav.Link
                as={NavLink}
                to="/doctor-dashboard"
                className="contact-btn"
                onClick={() => setExpanded(false)}
              >
                <div className="rounded-circle d-flex align-items-center justify-content-center">
                  {doctor.img ? (
                    <img
                      src={doctor.img}
                      alt="Doctor"
                      className="rounded-circle"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#2196F3",
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      {doctor.email.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
              </Nav.Link>
            ) : admin ? (
              <Nav.Link
                as={NavLink}
                to="/admin-dashboard"
                className="contact-btn"
                onClick={() => setExpanded(false)}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#2196F3",
                    color: "white",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  {admin.email.charAt(0).toUpperCase()}
                </div>
              </Nav.Link>
            ) : (
              <Nav.Link
                to="/signIn"
                className="contact-btn  p-2"
                as={Link}
                onClick={() => setExpanded(false)}
              >
                Sign In
                <FontAwesomeIcon icon={faArrowRight} beat className="ms-3" />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
