import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate

function AdminNavbar({ onMenuClick, activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Toggle the menu open and close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle menu item click
  const handleMenuClick = (page) => {
    if (page === "Logout") {
      // Perform any logout logic here, like clearing tokens or session data
      console.log("Logging out...");
      navigate("/"); // Redirect to the login or home page
    } else {
      onMenuClick(page); // Call the parent function to handle other menu options
    }
    toggleMenu(); // Close the menu on selection
  };

  return (
    <>
      <nav className="menu-container">
        <div className="menu-bar d-flex justify-content-between align-items-center">
          <div
            className="menu-icon"
            style={{ color: "white" }}
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className={`menu-links ${isOpen ? "show-menu" : ""}`}>
          <span
            className={`menu-link ${activePage === "Home" ? "active" : ""}`}
            onClick={() => handleMenuClick("Home")}
          >
            Home
          </span>
          <span
            className={`menu-link ${activePage === "AddLoanDetails" ? "active" : ""}`}
            onClick={() => handleMenuClick("AddLoanDetails")}
          >
            AddLoanDetails
          </span>
          <span
            className={`menu-link ${activePage === "BusinessLoan" ? "active" : ""}`}
            onClick={() => handleMenuClick("BusinessLoan")}
          >
            BusinessLoan
          </span>
          <span
            className={`menu-link ${activePage === "EducationLoan" ? "active" : ""}`}
            onClick={() => handleMenuClick("EducationLoan")}
          >
            EducationLoan
          </span>
          <span
            className={`menu-link ${activePage === "AgricultureLoan" ? "active" : ""}`}
            onClick={() => handleMenuClick("AgricultureLoan")}
          >
            AgricultureLoan
          </span>
          <span
            className={`menu-link ${activePage === "AdminReport" ? "active" : ""}`}
            onClick={() => handleMenuClick("AdminReport")}
          >
            Report
          </span>
          <span
            className={`menu-link ${activePage === "PaymentDetails" ? "active" : ""}`}
            onClick={() => handleMenuClick("PaymentDetails")}
          >
            PaymentDetails
          </span>
          <span
            className={`menu-link ${activePage === "Message" ? "active" : ""}`}
            onClick={() => handleMenuClick("Message")}
          >
            Message
          </span>
          <span
            className={`menu-link ${activePage === "Logout" ? "active" : ""}`}
            onClick={() => handleMenuClick("Logout")}
          >
            Logout
          </span>
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
