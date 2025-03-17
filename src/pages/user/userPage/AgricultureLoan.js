import React, { useState } from "react";

const AgricultureLoanForm = () => {
  const [agricultureLoanDetails, setagricultureLoanDetails] = useState({
    farmName: "",
    farmSize: "",
    cropType: "",
    location: "",
    loanAmount: "",
    loanPurpose: "",
    aadharNumber:"",
    panNumber:"",
    accountNumber:"",
    ifscCode:"",
    farmerName: "",
    farmerContact: "",
    farmerEmail: "",
    farmerAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setagricultureLoanDetails({ ...agricultureLoanDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const aadtharregex = /^[2-9]{1}[0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/; // Aadhaar regex
  const panregex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN regex
  const acnumregex = /^[0-9]{9,18}$/; // Account number regex
  const ifcsregex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC regex
  const validateStep = () => {
    const stepErrors = {};
    if (step === 1) {
      if (!agricultureLoanDetails.farmName) stepErrors.farmName = "Farm name is required.";
      if (!agricultureLoanDetails.farmSize || isNaN(agricultureLoanDetails.farmSize)) {
        stepErrors.farmSize = "Enter a valid farm size in acres.";
      }
      if (!agricultureLoanDetails.cropType) stepErrors.cropType = "Crop type is required.";
      if (!agricultureLoanDetails.location) stepErrors.location = "Location is required.";
    }
    if (step === 2) {
      if (!agricultureLoanDetails.loanAmount || isNaN(agricultureLoanDetails.loanAmount)) {
        stepErrors.loanAmount = "Enter a valid loan amount.";
      }
      if (!agricultureLoanDetails.loanPurpose) stepErrors.loanPurpose = "Loan purpose is required.";
      if (!agricultureLoanDetails.aadharNumber || !aadtharregex.test(agricultureLoanDetails.aadharNumber)) {
        stepErrors.aadharNumber = "Enter a valid Aadhaar Number (12 digits, optional spaces).";
      }
      if (!agricultureLoanDetails.panNumber || !panregex.test(agricultureLoanDetails.panNumber)) {
        stepErrors.panNumber = "Enter a valid PAN Number (e.g., ABCDE1234F).";
      }
      if (!agricultureLoanDetails.accountNumber || !acnumregex.test(agricultureLoanDetails.accountNumber)) {
        stepErrors.accountNumber = "Enter a valid Account Number (9 to 18 digits).";
      }
      if (!agricultureLoanDetails.ifscCode || !ifcsregex.test(agricultureLoanDetails.ifscCode)) {
        stepErrors.ifscCode = "Enter a valid IFSC Code (e.g., SBIN0001234).";
      } 
    }
    if (step === 3) {
      if (!agricultureLoanDetails.farmerName) stepErrors.farmerName = "Farmer's name is required.";
      if (!agricultureLoanDetails.farmerContact || !/^\d{10}$/.test(agricultureLoanDetails.farmerContact)) {
        stepErrors.farmerContact = "Enter a valid 10-digit contact number.";
      }
      if (!agricultureLoanDetails.farmerEmail || !/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(agricultureLoanDetails.farmerEmail)) {
        stepErrors.farmerEmail = "Enter a valid email address.";
      }
      if (!agricultureLoanDetails.farmerAddress) stepErrors.farmerAddress = "Residential address is required.";
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0; // Validation passes if no errors
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const clearForm = () => {
    setagricultureLoanDetails({
      courseName: "",
      instituteName: "",
      instituteAddress: "",
      courseDuration: "",
      loanAmount: "",
      loanPurpose: "",
      aadharNumber: "",
      panNumber: "",
      accountNumber: "",
      ifscCode: "",
      studentName: "",
      studentContact: "",
      studentEmail: "",
      studentAddress: "",
    });
    setErrors({});
    setStep(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form Submitted", agricultureLoanDetails);
      alert("Agriculture Loan Application Submitted Successfully!");
      // Add logic to send data to the server
      clearForm()
      
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Step 1: Farm & Crop Details */}
        {step === 1 && (
          <>
            <h3>Farm & Crop Details</h3>
            <div className="mb-3">
              <label htmlFor="farmName" className="form-label">Farm Name</label>
              <input
                type="text"
                className="form-control"
                id="farmName"
                name="farmName"
                value={agricultureLoanDetails.farmName}
                onChange={handleChange}
                placeholder="Enter the farm name"
              />
              {errors.farmName && <small className="text-danger">{errors.farmName}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="farmSize" className="form-label">Farm Size (in acres)</label>
              <input
                type="number"
                className="form-control"
                id="farmSize"
                name="farmSize"
                value={agricultureLoanDetails.farmSize}
                onChange={handleChange}
                placeholder="Enter farm size in acres"
              />
              {errors.farmSize && <small className="text-danger">{errors.farmSize}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="cropType" className="form-label">Crop Type</label>
              <input
                type="text"
                className="form-control"
                id="cropType"
                name="cropType"
                value={agricultureLoanDetails.cropType}
                onChange={handleChange}
                placeholder="Enter the type of crop"
              />
              {errors.cropType && <small className="text-danger">{errors.cropType}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={agricultureLoanDetails.location}
                onChange={handleChange}
                placeholder="Enter farm location"
              />
              {errors.location && <small className="text-danger">{errors.location}</small>}
            </div>
          </>
        )}

        {/* Step 2: Loan Details */}
        {step === 2 && (
          <>
            <h3>Loan Details</h3>
            <div className="mb-3">
              <label htmlFor="loanAmount" className="form-label">Loan Amount</label>
              <input
                type="number"
                className="form-control"
                id="loanAmount"
                name="loanAmount"
                value={agricultureLoanDetails.loanAmount}
                onChange={handleChange}
                placeholder="Enter the loan amount"
              />
              {errors.loanAmount && <small className="text-danger">{errors.loanAmount}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="loanPurpose" className="form-label">Purpose of Loan</label>
              <textarea
                className="form-control"
                id="loanPurpose"
                name="loanPurpose"
                value={agricultureLoanDetails.loanPurpose}
                onChange={handleChange}
                rows="3"
                placeholder="Describe the purpose of the loan"
              />
              {errors.loanPurpose && <small className="text-danger">{errors.loanPurpose}</small>}
            </div>

            {/* KYC Details */}
            <h3>KYC Details</h3>
            <div className="mb-3">
              <label htmlFor="aadharNumber">Aadhar Card Number</label>
              <input
              type="number"
              className="form-control"
              id="aadharNumber"
              name="aadharNumber"
              onChange={handleChange}
              value={agricultureLoanDetails.aadharNumber}
              placeholder="Enter the Aadhar Number" 
              />
              {errors.aadharNumber && <small className="text-danger">{errors.aadharNumber}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="panNumber">Pan Card Number</label>
              <input
              type="text"
              className="form-control"
              id="panNumber"
              name="panNumber"
              onChange={handleChange}
              value={agricultureLoanDetails.panNumber}
              placeholder="Enter the Pan Card Number" 
              />
              {errors.panNumber && <small className="text-danger">{errors.panNumber}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="accountNumber">Account Number</label>
              <input
              type="number"
              className="form-control"
              id="accountNumber"
              name="accountNumber"
              onChange={handleChange}
              value={agricultureLoanDetails.accountNumber}
              placeholder="Enter the Account Number" 
              />
              {errors.accountNumber && <small className="text-danger">{errors.accountNumber}</small>}
            </div>
            <div>
              <label htmlFor="ifscCode">IFSC Code</label>
              <input
              type="text"
              className="form-control"
              id="ifscCode"
              name="ifscCode"
              onChange={handleChange}
              value={agricultureLoanDetails.ifscCode}
              placeholder="Enter the IFSC Code" 
              />
              {errors.ifscCode && <small className="text-danger">{errors.ifscCode}</small>}
            </div>
          </>
        )}

        {/* Step 3: Farmer's Personal Details */}
        {step === 3 && (
          <>
            <h3>Farmer's Personal Details</h3>
            <div className="mb-3">
              <label htmlFor="farmerName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="farmerName"
                name="farmerName"
                value={agricultureLoanDetails.farmerName}
                onChange={handleChange}
                placeholder="Enter farmer's full name"
              />
              {errors.farmerName && <small className="text-danger">{errors.farmerName}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="farmerContact" className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                id="farmerContact"
                name="farmerContact"
                value={agricultureLoanDetails.farmerContact}
                onChange={handleChange}
                placeholder="Enter contact number"
              />
              {errors.farmerContact && <small className="text-danger">{errors.farmerContact}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="farmerEmail" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="farmerEmail"
                name="farmerEmail"
                value={agricultureLoanDetails.farmerEmail}
                onChange={handleChange}
                placeholder="Enter email address"
              />
              {errors.farmerEmail && <small className="text-danger">{errors.farmerEmail}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="farmerAddress" className="form-label">Residential Address</label>
              <input
                type="text"
                className="form-control"
                id="farmerAddress"
                name="farmerAddress"
                value={agricultureLoanDetails.farmerAddress}
                onChange={handleChange}
                placeholder="Enter residential address"
              />
              {errors.farmerAddress && <small className="text-danger">{errors.farmerAddress}</small>}
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-between mt-4">
          {step > 1 && (
            <button type="button" className="btn btn-secondary" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 3 ? (
            <button type="button" className="btn btn-primary" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Submit Application
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AgricultureLoanForm;
