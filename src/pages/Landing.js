import React, { useEffect, useState } from "react";
import Header from "../components/landingPage/Header";
import Navbar from "../components/landingPage/Navbar";
import Home from "../components/landingPage/Home";
import About from "../components/landingPage/About";
import Services from "../components/landingPage/Services";
import Contact from "../components/landingPage/Contact";
import Pages from "./index";
import Footer from "../components/landingPage/Footer";

const Landing = () => {
  const [activePage, setActivePage] = useState("Home"); // Track active page
  const [menu, setMenu] = useState("");
  const [jsonData, setJsonData] = useState([]);

  const handleMenuClick = (page) => {
    setActivePage(page);

  };
  const handleButtonClick=(name)=>{
    console.log("menu in landing...",name);
    if (menu === name) {
      setMenu(""); // Reset the state first
      setTimeout(() => {
        setMenu(name); // Update it again
      }, 0); // Slight delay ensures React processes it as a new state update
    } else {
      setMenu(name); // Normal update
    }
  } 


  //json useeffect function
  useEffect(() =>{
    fetch("db.json")
    .then((response) =>{
      if(!response.ok){
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) =>{
      console.log("data in json",data);
      console.log("user data in json",data.users);
      console.log("services data in json",data.services);
      setJsonData(data);
    })
    .catch((error)=>console.log(error));
  },[]);


  return (
    <div>
      <Header />
      <Navbar
        onMenuClick={handleMenuClick}
        activePage={activePage}
        onButtonClick={handleButtonClick}
      />
      {/* Page Content */}
      <div className="page-content">
        {activePage === "Home" && <Home />}
        {activePage === "About" && <About />}
        {activePage === "Services" && <Services serviceList={jsonData?.services}/>}
        {activePage === "Contact" && <Contact />}
        {(menu === "Login" || menu === "Signup") && <Pages viewModal={menu} userData={jsonData.users} />}
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
