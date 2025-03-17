import React, { useState } from "react";
import Header from "../../components/landingPage/Header";
import UserNavbar from "./userPage/UserNavbar";
import UserHome from "./userPage/UserHome";
import Footer from "../../components/landingPage/Footer";
import UserProfile from "./userPage/UserProfile";
import ApplyLoan from "./userPage/UserApplyLoan";
import PaymentApp from "./userPage/UserPayment";
import UserLoanPage from "./userPage/UserLoanHistory";

const User = () => {
  const [activePage, setActivePage] = useState("Home"); // Track active page
  
  const handleMenuClick = (page) => {
    setActivePage(page);
    // toggleMenu(); // Close menu on selection
  };

  return (
    <div className="landing-container">
      <Header />
      <UserNavbar
        onMenuClick={handleMenuClick}
        activePage={activePage}
      />
      {/* Page Content */}
      <div className="page-content">
        {activePage === "Profile" && <UserProfile />}
        {activePage === "Home" && <UserHome />}
        {activePage === "ApplyLoan" && < ApplyLoan/>}
        {activePage === "LoanHistory" && <UserLoanPage/>}
        {activePage === "Payment" && <PaymentApp />}
      </div>
      <Footer />
    </div>
  );
};

export default User;
