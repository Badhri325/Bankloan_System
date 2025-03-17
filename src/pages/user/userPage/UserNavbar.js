import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function UserNavbar({ onMenuClick, activePage }) {
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
      navigate("/"); // Navigate to the home or login page
    } else {
      onMenuClick(page); // Set active page in parent component
    }
    toggleMenu(); // Close the menu on selection
  };

  return (
    <>
      <nav className="menu-container">
        <div className="menu-bar d-flex justify-content-between align-items-center">
          <div className="menu-icon" style={{ color: "white" }} onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className={`menu-links ${isOpen ? "show-menu" : ""}`}>
          <span
            className={`menu-link ${activePage === "Profile" ? "active" : ""}`}
            onClick={() => handleMenuClick("Profile")}
          >
            Profile
          </span>
          <span
            className={`menu-link ${activePage === "Home" ? "active" : ""}`}
            onClick={() => handleMenuClick("Home")}
          >
            Home
          </span>
          <span
            className={`menu-link ${activePage === "ApplyLoan" ? "active" : ""}`}
            onClick={() => handleMenuClick("ApplyLoan")}
          >
            Apply Loan
          </span>
          <span
            className={`menu-link ${activePage === "LoanHistory" ? "active" : ""}`}
            onClick={() => handleMenuClick("LoanHistory")}
          >
            Loan History
          </span>
          <span
            className={`menu-link ${activePage === "Payment" ? "active" : ""}`}
            onClick={() => handleMenuClick("Payment")}
          >
            Payment
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

export default UserNavbar;
