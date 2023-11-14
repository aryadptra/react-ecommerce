import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.svg";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-light navbar-store fixed-top navbar-fixed-top"
      data-aos="fade-down"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/categories.html" className="nav-link">
              Categories
            </Nav.Link>
            <Nav.Link href="#" className="nav-link">
              Rewards
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link
              as={Link}
              to="/register.html"
              className="nav-link btn mr-md-3"
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login.html"
              className="btn btn-success nav-link px-4 text-white"
            >
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
