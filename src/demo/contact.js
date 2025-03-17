import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Contact() {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Validation rules
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!contactDetails.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    } else if (!nameRegex.test(contactDetails.name)) {
      newErrors.name = "Please enter a valid name (only characters allowed).";
      isValid = false;
    }

    if (!contactDetails.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(contactDetails.email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    if (!contactDetails.phone) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(contactDetails.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number (6-9 start).";
      isValid = false;
    }

    if (!contactDetails.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "e58b04f5-75e6-4004-8277-deb430f9de89");
    formData.append("name", contactDetails.name);
    formData.append("email", contactDetails.email);
    formData.append("phone", contactDetails.phone);
    formData.append("message", contactDetails.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setContactDetails({ name: "", email: "", phone: "", message: "" });
        setShowModal(true);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section id="contact">
        <h2 className="text-center fw-bold">Contact</h2>
        <div className="contact_mode">
          <section className="contact_us">
            <h3>Contact Us</h3>
            <p>
              <span>Address:</span> Vaishnavi Tech Park, Bengaluru – 560103
            </p>
            <p>
              <span>Phone:</span> <a href="tel://9159552150">+91 9159552150</a>
            </p>
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:sarathi9155@gmail.com">sarathi9155@gmail.com</a>
            </p>
            <p>
              <span>Website:</span> <a href="#">virtualfinance.com</a>
            </p>
            <a
              href="https://www.google.com/maps/place/Vaishnavi+Tech+Park"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-map-marker" style={{ fontSize: "46px" }}></i>
              Location
            </a>
          </section>

          <section className="contact_msg">
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter name"
                  onChange={handleChange}
                  value={contactDetails.name}
                />
                <div className="text-danger">{errors.name}</div>
              </div>
              <div className="mb-3 mt-3">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={contactDetails.email}
                />
                <div className="text-danger">{errors.email}</div>
              </div>
              <div className="mb-3">
                <label>Phone:</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Enter phone"
                  onChange={handleChange}
                  value={contactDetails.phone}
                />
                <div className="text-danger">{errors.phone}</div>
              </div>
              <div className="mb-3">
                <label>Message:</label>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  onChange={handleChange}
                  value={contactDetails.message}
                ></textarea>
                <div className="text-danger">{errors.message}</div>
              </div>
              <button type="submit" className="btn btn-outline-dark">
                Send Message
              </button>
            </form>

            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <h2>Form Submitted Successfully!</h2>
                  <button onClick={() => setShowModal(false)} className="btn btn-primary">
                    Close
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}

export default Contact;
