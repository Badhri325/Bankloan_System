import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
function Header() {
    return (
      <>
       <section className="header">
        <div className="logo_container">
            <img className="logo" src={require("../../assets/bank_logo2.png")} alt="logo"/>
            <h1 className="vf" >VIRTUALFINANCE </h1>  
        </div>
        <section>
            <div className="add">
                <p className="lh-sm"> <a href="mailto:sarathi9155@gmail.com"><FaEnvelope /> sarathi9155@gmail.com</a></p>
                <p className="lh-sm"> <a href="tel://9159552150"><FaPhone /> 9159552150</a></p>    
            </div>
        </section>
    </section>
      </>
    );
  }
  export default Header;
  