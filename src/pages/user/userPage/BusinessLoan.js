import React, { useState } from "react";

const BusinessLoanForm = () => {
  const [businessLoanDetails, setbusinessLoanDetails] = useState({
    businessName: "",
    businessType: "",
    businessAddress: "",
    businessEstablished: "",
    loanAmount: "",
    loanPurpose: "",
    aadharNumber:"",
    panNumber:"",
    accountNumber:"",
    ifscCode:"",
    ownerName: "",
    ownerContact: "",
    ownerEmail: "",
    ownerAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setbusinessLoanDetails({ ...businessLoanDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error on input change
  };


  const aadtharregex = /^[2-9]{1}[0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/; // Aadhaar regex
  const panregex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN regex
  const acnumregex = /^[0-9]{9,18}$/; // Account number regex
  const ifcsregex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC regex
  const validateStep = () => {
    const stepErrors = {};
    if (step === 1) {
      if (!businessLoanDetails.businessName) stepErrors.businessName = "Business name is required.";
      if (!businessLoanDetails.businessType) stepErrors.businessType = "Business type is required.";
      if (!businessLoanDetails.businessAddress) stepErrors.businessAddress = "Business address is required.";
      if (!businessLoanDetails.businessEstablished || isNaN(businessLoanDetails.businessEstablished)) {
        stepErrors.businessEstablished = "Enter a valid year.";
      }
    }
    if (step === 2) {
      if (!businessLoanDetails.loanAmount || isNaN(businessLoanDetails.loanAmount)) {
        stepErrors.loanAmount = "Enter a valid loan amount.";
      }
      if (!businessLoanDetails.loanPurpose) stepErrors.loanPurpose = "Loan purpose is required.";
      if (!businessLoanDetails.aadharNumber || !aadtharregex.test(businessLoanDetails.aadharNumber)) {
        stepErrors.aadharNumber = "Enter a valid Aadhaar Number (12 digits, optional spaces).";
      }
      if (!businessLoanDetails.panNumber || !panregex.test(businessLoanDetails.panNumber)) {
        stepErrors.panNumber = "Enter a valid PAN Number (e.g., ABCDE1234F).";
      }
      if (!businessLoanDetails.accountNumber || !acnumregex.test(businessLoanDetails.accountNumber)) {
        stepErrors.accountNumber = "Enter a valid Account Number (9 to 18 digits).";
      }
      if (!businessLoanDetails.ifscCode || !ifcsregex.test(businessLoanDetails.ifscCode)) {
        stepErrors.ifscCode = "Enter a valid IFSC Code (e.g., SBIN0001234).";
      } 
    }
    if (step === 3) {
      if (!businessLoanDetails.ownerName) stepErrors.ownerName = "Owner's name is required.";
      if (!businessLoanDetails.ownerContact || !/^\d{10}$/.test(businessLoanDetails.ownerContact)) {
        stepErrors.ownerContact = "Enter a valid 10-digit contact number.";
      }
      if (!businessLoanDetails.ownerEmail || !/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(businessLoanDetails.ownerEmail)) {
        stepErrors.ownerEmail = "Enter a valid email address.";
      }
      if (!businessLoanDetails.ownerAddress) stepErrors.ownerAddress = "Residential address is required.";
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0; // If no errors, validation passes
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const clearForm = () => {
    setbusinessLoanDetails({
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
      console.log("Form Submitted", businessLoanDetails);
      alert("Application Submitted Successfully!");
      // Add logic to send data to the server
      clearForm();
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Step 1: Business Details */}
        {step === 1 && (
          <>
            <h3>Business Details</h3>
            <div className="mb-3">
              <label htmlFor="businessName" className="form-label">Business Name</label>
              <input
                type="text"
                className="form-control"
                id="businessName"
                name="businessName"
                value={businessLoanDetails.businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
              />
              {errors.businessName && <small className="text-danger">{errors.businessName}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="businessType" className="form-label">Business Type</label>
              <select
                className="form-select"
                id="businessType"
                name="businessType"
                value={businessLoanDetails.businessType}
                onChange={handleChange}
              >
                <option value="" disabled>Select type of business</option>
                <option value="sole">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="corporation">Corporation</option>
                <option value="LLC">LLC</option>
              </select>
              {errors.businessType && <small className="text-danger">{errors.businessType}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="businessAddress" className="form-label">Business Address</label>
              <input
                type="text"
                className="form-control"
                id="businessAddress"
                name="businessAddress"
                value={businessLoanDetails.businessAddress}
                onChange={handleChange}
                placeholder="Enter business address"
              />
              {errors.businessAddress && <small className="text-danger">{errors.businessAddress}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="businessEstablished" className="form-label">Year Established</label>
              <input
                type="number"
                className="form-control"
                id="businessEstablished"
                name="businessEstablished"
                value={businessLoanDetails.businessEstablished}
                onChange={handleChange}
                placeholder="Enter the year your business was established"
              />
              {errors.businessEstablished && (
                <small className="text-danger">{errors.businessEstablished}</small>
              )}
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
                value={businessLoanDetails.loanAmount}
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
                value={businessLoanDetails.loanPurpose}
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
              value={businessLoanDetails.aadharNumber}
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
              value={businessLoanDetails.panNumber}
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
              value={businessLoanDetails.accountNumber}
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
              value={businessLoanDetails.ifscCode}
              placeholder="Enter the IFSC Code" 
              />
              {errors.ifscCode && <small className="text-danger">{errors.ifscCode}</small>}
            </div>
          </>
        )}

        {/* Step 3: Owner's Personal Details */}
        {step === 3 && (
          <>
            <h3>Owner's Personal Details</h3>
            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="ownerName"
                name="ownerName"
                value={businessLoanDetails.ownerName}
                onChange={handleChange}
                placeholder="Enter owner's full name"
              />
              {errors.ownerName && <small className="text-danger">{errors.ownerName}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="ownerContact" className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                id="ownerContact"
                name="ownerContact"
                value={businessLoanDetails.ownerContact}
                onChange={handleChange}
                placeholder="Enter contact number"
              />
              {errors.ownerContact && <small className="text-danger">{errors.ownerContact}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="ownerEmail" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="ownerEmail"
                name="ownerEmail"
                value={businessLoanDetails.ownerEmail}
                onChange={handleChange}
                placeholder="Enter email address"
              />
              {errors.ownerEmail && <small className="text-danger">{errors.ownerEmail}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="ownerAddress" className="form-label">Residential Address</label>
              <input
                type="text"
                className="form-control"
                id="ownerAddress"
                name="ownerAddress"
                value={businessLoanDetails.ownerAddress}
                onChange={handleChange}
                placeholder="Enter residential address"
              />
              {errors.ownerAddress && <small className="text-danger">{errors.ownerAddress}</small>}
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

export default BusinessLoanForm;
