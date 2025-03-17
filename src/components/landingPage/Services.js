import React, { useState } from "react"; // Fix redundant import
import "./Services.css";
import ServiceCard from "../ServiceCard";

const Services = ({ serviceList }) => {
  console.log("service list in comp...", serviceList);

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Function to show the modal
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginRedirect = () => {
    // Redirect to login page or handle login functionality
    // window.location.href = "/login"; // Example redirection
  };

  return (
    <section id="services" className="services_style">
      <div>
        <h2>High Performance Services For All Industries</h2>
      </div>
      <main>
        {serviceList?.map((service) => (
          <ServiceCard
            key={service.id}
            services={service}
            onButtonClick={handleButtonClick}
          />
        ))}
      </main>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Required</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>You must log in before applying for a loan.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    handleLoginRedirect(); // Call the navigation function
                    handleCloseModal(); // Close the modal
                  }}
                >
                  Log In
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal backdrop for Bootstrap */}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </section>
  );
};

export default Services;
