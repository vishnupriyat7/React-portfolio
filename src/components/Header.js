import React from "react";
import logo from "../assets/vishnu.jpeg"
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Header.css"
import { width } from "@mui/system";

function Header() {
  return (
    <div style={{ margin: 0, display: "block", padding: 0 }}>
      <Navbar bg="myColor" expand="lg" varient="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto menu">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              {/* <Nav.Link href="#link">My Works</Nav.Link> */}
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

