import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
// import Button from "../components/Button";
import BsModal from "../components/BootstrapModal";
import LoginForm from "./Login";
import Signup from "./Signup";
import Forgot from "./ForgotPassword";
import { useNavigate } from "react-router-dom";

export default function Pages({ viewModal, userData }) {
  const navigate = useNavigate();

  // Modal state
  const [show, setShow] = useState(false);
  const [currentModal, setCurrentModal] = useState("");

  // Open modal for login
  const handleLogin = () => {
    setCurrentModal("login");
    setShow(true);
  };

  // Open modal for signup
  const signupHandleLogin = () => {
    setCurrentModal("signup");
    setShow(true);
  };

  // Switch to signup form
  const switchToSignup = () => {
    setCurrentModal("signup");
  };

  // Switch to login form
  const switchToLogin = () => {
    setCurrentModal("login");
  };

  // Switch to forgot password form
  const switchToForgot = () => {
    setCurrentModal("forgot");
  };

  // Close modal
  const handleClose = () => {
    setShow(false);
  };

  // Handle login form submission
  const handleLogins = (loginDetails) => {
    // console.log("adddd...",userData);
    
    const isUser = userData?.filter(
      (user) => user.email === loginDetails.userName
    );
    const isPassword =
      isUser.length > 0 ? isUser[0].password === loginDetails.password : false;
      
    // console.log("admin", (userData?.find(
    //   (user) => user.email === loginDetails.userName
    // )));

    if (isUser.length <= 0) {
      return alert("Email Invalid");
    } else if (!isPassword) {
      return alert("Password Invalid");
    }

    handleClose();
    alert("Login Successful");

    if (isUser[0].name === "Admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  // Handle signup form submission
  const handleSignups = (signupDetails) => {
    handleClose();
    alert("Signup Successful");
  };

  // Handle forgot password form submission
  const handleForgot = (forgotDetails) => {
    handleClose();
    alert("Password Reset Successful");
  };

  // Fetch user data from db.json
  // useEffect(() => {
  //   fetch("db.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUserData(data.users || []);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  //login and signup
  useEffect(() => {
    if (viewModal === "Login") {
      handleLogin();
    } else {
      signupHandleLogin();
    }
  }, [viewModal]);

  return (
    <>
      {/* <h1>This is My Index Page</h1> */}

      {/* <Button title="Login" handleClick={handleLogin} />
      <Button title="Signup" handleClick={signupHandleLogin} /> */}

      {/* Modal */}
      {show && (
        <BsModal
          title={
            currentModal === "login"
              ? "Login"
              : currentModal === "signup"
              ? "Signup"
              : "Forgot Password"
          }
          body={
            currentModal === "login" ? (
              <LoginForm
                onLogin={handleLogins}
                onSwitchToSignup={switchToSignup}
                onSwitchToForgot={switchToForgot}
              />
            ) : currentModal === "signup" ? (
              <Signup
                onSignup={handleSignups}
                onSwitchToLogin={switchToLogin}
              />
            ) : (
              <Forgot onForgot={handleForgot} />
            )
          }
          show={show}
          close={handleClose}
        />
      )}
    </>
  );
}
