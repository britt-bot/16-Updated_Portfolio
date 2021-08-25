import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import Logo from "../images/logo4.png";
import RbNavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default function Navbar() {
  return (
    <RbNavBar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Link className="navbar-brand" to="/">
        HOME
      </Link>

      <RbNavBar.Toggle />
      <RbNavBar.Collapse>
        <Nav className="mr-auto">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || 
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" 
              ? "nav-link active" 
              : "nav-link"
              }
            >
              Projects + Skills
            </Link>
          <Nav>
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact" 
                ? "nav-link active" 
                : "nav-link"
              }
            >
              Contact + Resume
            </Link>
          </Nav>
        </Nav>
      </RbNavBar.Collapse>
    </RbNavBar>
  );
};
