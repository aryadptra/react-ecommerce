import React from "react";

import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

import ImageUser from "../../assets/images/icon-user.png";
import IconCartEmpty from "../../assets/images/icon-cart-empty.svg";

function NavbarAdmin() {
  const handleMenuToggle = () => {
    const wrapper = document.getElementById("wrapper");
    if (wrapper.classList.contains("toggled")) {
      console.log("toggled");
      wrapper.classList.remove("toggled");
    } else {
      console.log("toggle disabled");
      wrapper.classList.add("toggled");
    }
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-store fixed-top"
        data-aos="fade-down"
      >
        <Button
          className="btn btn-secondary d-md-none mr-auto mr-2"
          id="menu-toggle"
          onClick={handleMenuToggle}
        >
          &laquo; Menu
        </Button>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto d-none d-lg-flex">
            <NavDropdown
              title={
                <>
                  <img
                    src={ImageUser}
                    alt=""
                    className="rounded-circle mr-2 profile-picture"
                  />{" "}
                  Hi, Angga
                </>
              }
              id="navbarDropdown"
            >
              <NavDropdown.Item href="/index.html">
                Back to Store
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashboard-account.html">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link className="nav-link d-inline-block mt-2" href="#">
                <img src={IconCartEmpty} alt="" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Mobile Menu */}
          <Nav className="navbar-nav d-block d-lg-none mt-3">
            <Nav.Item>
              <Nav.Link className="nav-link" href="#">
                Hi, Angga
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link d-inline-block" href="#">
                Cart
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavbarAdmin;
