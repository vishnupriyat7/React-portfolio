import React from "react";
import "../styles/Navbar.css";
import brand_logo from "../assets/vishnu.jpeg";

function Navbar() {
  return (
    <div>
      <div className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src={brand_logo} alt="brand_logo" />
        </a>

        <div className="links">
          <a href="/">Home</a>
          <a href="/skills">Skills</a>
          <a href="/experience">Experience</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
