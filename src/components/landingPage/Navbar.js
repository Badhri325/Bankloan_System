import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
  function Navbar({ onButtonClick, onMenuClick, activePage }) {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu open and close state
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    // Handle menu item click
    const handleMenuClick = (page) => {
      if (page === "Login" || page === "Signup") {
        onButtonClick(page);
      } else {
        onMenuClick(page); // Set active page in parent component
      }
      toggleMenu(); // Close the menu on selection
    };

    return (
      <>
        {/* <h1>Navbar</h1> */}
        <nav className="menu-container">
          <div className="menu-bar d-flex justify-content-between align-items-center">
            <div className="menu-icon" style={{color:"white"}} onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          {/* Ensure correct use of template literals and className */}
          <div className={`menu-links ${isOpen ? "show-menu" : ""}`}>
            <span
              className={`menu-link ${activePage === "Home" ? "active" : ""}`}
              onClick={() => handleMenuClick("Home")}
            >
              Home
            </span>
            <span
              className={`menu-link ${activePage === "About" ? "active" : ""}`}
              onClick={() => handleMenuClick("About")}
            >
              About
            </span>
            <span
              className={`menu-link ${activePage === "Services" ? "active" : ""}`}
              onClick={() => handleMenuClick("Services")}
            >
              Services
            </span>
            <span
              className={`menu-link ${activePage === "Contact" ? "active" : ""}`}
              onClick={() => handleMenuClick("Contact")}
            >
              Contact
            </span>
            <span
              className={`menu-link ${activePage === "Login" ? "active" : ""}`}
              onClick={() => handleMenuClick("Login")}
            >
              Login
            </span>
            <span
              className={`menu-link ${activePage === "Signup" ? "active" : ""}`}
              onClick={() => handleMenuClick("Signup")}
            >
              Signup
            </span>
          </div>
        </nav>
      </>
    );
  }

export default Navbar;
