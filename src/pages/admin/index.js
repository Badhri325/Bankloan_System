import React, { useState,useEffect } from "react";
import Header from "../../components/landingPage/Header";
import AdminNavbar from "./adminPage/AdminNavbar";
import AdminHome from "./adminPage/AdminHome";
import AddLoanDetails from "./adminPage/AddLoanDetails";
import AdminReport from "./adminPage/AdminReport";
import AdminPaymentDetails from "./adminPage/AdminPayment";
import AdminMessage from "./adminPage/AdminMessage";
import Footer from "../../components/landingPage/Footer";
// import Report from "./adminPage/Reportt";
import BusinessLoan from "./adminPage/Businessloan";
import EducationLoan from "./adminPage/Educationloan";
import AgricultureLoan from "./adminPage/Agricultureloan";

const Admin = () => {
  const [jsonData, setJsonData] = useState([]);
  const [activePage, setActivePage] = useState("Home"); // Track active page
  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    fetch("db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data in json", data);
        console.log("table data in json", data.table);
        console.log("Businessloan data in json", data.table.businessloan);

        setJsonData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="landing-container">
      <Header />
      <AdminNavbar
        onMenuClick={handleMenuClick}
        activePage={activePage}
      />
      {/* Page Content */}
      <div className="page-content">
        {activePage === "Home" && <AdminHome />}
        {activePage === "AddLoanDetails" && <AddLoanDetails />}
        {activePage === "BusinessLoan" && <BusinessLoan Bloanlist={jsonData.table.businessloan}/>}
        {activePage === "EducationLoan" && <EducationLoan Eloanlist={jsonData.table.educationloan}/>}
        {activePage === "AgricultureLoan" && <AgricultureLoan Aloanlist={jsonData.table.agricultureloan}/>}
        {activePage === "AdminReport" && <AdminReport/>}
        {/* {activePage === "AdminReport" && <Report Reportlist={jsonData.report}/>} */}
        {activePage === "PaymentDetails" && <AdminPaymentDetails paymentlist={jsonData.paymentdetails} />}
        {activePage === "Message" && <AdminMessage msglist={jsonData.Message}/>}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
