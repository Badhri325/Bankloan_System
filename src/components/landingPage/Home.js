import React, { useEffect, useState } from "react";

import About from "./About";
import Contact from "./Contact";
import "./Home.css";
import Services from "./Services";

function Home() {
  const [jsonData, setJsonData] = useState([]);

  //json useeffect function
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
        console.log("user data in json", data.users);
        console.log("services data in json", data.services);
        setJsonData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <section id="home" className="dashbord py-5">
        <div class="container pt-5 mt-5 hometext">
          <h1 className="mt-5 display-1 py-3 fw-bold">WELCOME TO VIRTUALFINANCE </h1>
          <h2>Apply for your Business loan in Minutes.</h2>
        </div>
      </section>
      <About />
      <Services serviceList={jsonData?.services} />
      <Contact />
    </>
  );
}
export default Home;
