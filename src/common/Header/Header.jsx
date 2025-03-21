import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../UserContext";

export default function Header() {
  const { user } = useUser();
  const [expanded, setExpanded] = useState(false);

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
              <Nav.Link as={NavLink} to="/profile" className="contact-btn">
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
            ) : (
              <Nav.Link to="/signIn" className="contact-btn p-2" as={Link}>
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
