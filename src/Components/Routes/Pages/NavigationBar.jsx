import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import "./NavigationBar.css";

export const NavigationBar = () => {
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/Help">
            <Navbar.Brand>KHIZAR</Navbar.Brand>
          </NavLink>
          &nbps;
          <Nav className="me-auto">
            <NavLink to="/Home">Home</NavLink>&nbps;
            <NavLink to="/Courses">Courses</NavLink>&nbps;
            <NavLink to="/Aboutus">About Us</NavLink>&nbps;
            <NavLink to="/Contactus">Contact Us</NavLink>&nbps;
            <NavLink to="/Services">Services</NavLink>&nbps;
            <NavLink to="/Help">Help</NavLink>&nbps;
          </Nav>
        </Container>
      </Navbar>{" "}
    </div>
  );
};
