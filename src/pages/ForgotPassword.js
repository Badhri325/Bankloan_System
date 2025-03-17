import React, { useState } from "react";

function Forgot({ closeModal }) {
  const [showEmail, setShowEmail] = useState(true); // Toggles between Email and Password forms

  const [forgotDetails, setForgotDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForgotDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    })); // Clear errors for the current input
  };

  // Validate fields
  const validateFields = () => {
    let newErrors = {};
    let valid = true;

    if (showEmail) {
      // Email validation
      if (!forgotDetails.email) {
        newErrors.email = "Email is required";
        valid = false;
      } else if (!emailRegex.test(forgotDetails.email)) {
        newErrors.email = "Enter a valid email";
        valid = false;
      }
    } else {
      // Password validation
      if (!forgotDetails.password) {
        newErrors.password = "Password is required";
        valid = false;
      }
      if (!forgotDetails.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
        valid = false;
      } else if (forgotDetails.password !== forgotDetails.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle Email Form Submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      setShowEmail(false); // Proceed to Password form if email is valid
    }
  };

  // Handle Password Form Submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      alert("Password Reset Successful");
      
      if (closeModal) {
        closeModal(); // Simulate modal close
      }
    }
  };

  return (
    <div className="forgot-container">
      {showEmail ? (
        <form onSubmit={handleEmailSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={forgotDetails.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <button type="submit" className="btn btn-outline-dark mt-2">
            Next
          </button>
        </form>
      ) : (
        <form onSubmit={handlePasswordSubmit}>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={forgotDetails.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={forgotDetails.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <div className="text-danger">{errors.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="btn btn-outline-dark mt-2">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Forgot;