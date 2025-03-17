import { useState } from "react";

export default function LoginForm({ onLogin, onSwitchToSignup,onSwitchToForgot }) {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  // Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password Validation Regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,16}$/;

  // Handle changes in the input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    // Clear the specific error when user starts typing in the respective field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error for the current field
    }));
  };

  // Validate form inputs
  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Validate email
    if (!loginDetails.userName) {
      newErrors.userName = "Email is Requried";
      formIsValid = false;
    } else if (!emailRegex.test(loginDetails.userName)) {
      newErrors.userName = "Please enter a valid email address";
      formIsValid = false;
    }

    // Check if password field is empty

    if (!loginDetails.password) {
      newErrors.password = "Password is Requried";
      formIsValid = false;
    } else if (!passwordRegex.test(loginDetails.password)) {
      newErrors.password =
        "Password must be 8-16 characters long, include at least one uppercase letter,LowerCase,Symbol,number";
      formIsValid = false;
    }
    setErrors(newErrors);
    return formIsValid;
  };

  // Handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Validate the form before calling the parent handler
    if (validateForm()) {
      onLogin(loginDetails);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control mb-3"
            name="userName"
            value={loginDetails.userName}
            onChange={handleLoginChange}
          />
          {errors.userName && (
            <div className="text-danger">{errors.userName}</div>
          )}
        </div>

        <div>
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control mb-3"
            name="password"
            value={loginDetails.password}
            onChange={handleLoginChange}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        <button onClick={onSwitchToForgot} className="btn btn-link mb-2">Forgot Password?</button>
        <button type="submit" className="btn btn-outline-dark w-100 ">
          Login
        </button>
        <p className="form-label">
          Doesn't Have a Account Click Here{" "}
          <button className="btn btn-link " onClick={onSwitchToSignup}>Signup</button>{" "}
        </p>
      </form>
    </div>
  );
}