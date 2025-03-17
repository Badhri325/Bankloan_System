import React, { useState } from "react";

const EducationLoanForm = () => {
  const [educationLoanDetails, seteducationLoanDetails] = useState({
    courseName: "",
    instituteName: "",
    instituteAddress: "",
    courseDuration: "",
    loanAmount: "",
    loanPurpose: "",
    aadharNumber:"",
    panNumber:"",
    accountNumber:"",
    ifscCode:"",
    studentName: "",
    studentContact: "",
    studentEmail: "",
    studentAddress: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    seteducationLoanDetails({ ...educationLoanDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error on input change
  };

  const aadtharregex = /^[2-9]{1}[0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/; // Aadhaar regex
  const panregex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/; // PAN regex
  const acnumregex = /^[0-9]{9,18}$/; // Account number regex
  const ifcsregex = /^[A-Z]{4}0[A-Z0-9]{6}$/; // IFSC regex
  
  const validateStep = () => {
    const stepErrors = {};
    if (step === 1) {
      if (!educationLoanDetails.courseName) stepErrors.courseName = "Course name is required.";
      if (!educationLoanDetails.instituteName) stepErrors.instituteName = "Institute name is required.";
      if (!educationLoanDetails.instituteAddress) stepErrors.instituteAddress = "Institute address is required.";
      if (!educationLoanDetails.courseDuration || isNaN(educationLoanDetails.courseDuration)) {
        stepErrors.courseDuration = "Enter a valid course duration in years.";
      }
    }
    if (step === 2) {
      if (!educationLoanDetails.loanAmount || isNaN(educationLoanDetails.loanAmount)) {
        stepErrors.loanAmount = "Enter a valid loan amount.";
      }
      if (!educationLoanDetails.loanPurpose) {
        stepErrors.loanPurpose = "Loan purpose is required.";
      }
      if (!educationLoanDetails.aadharNumber || !aadtharregex.test(educationLoanDetails.aadharNumber)) {
        stepErrors.aadharNumber = "Enter a valid Aadhaar Number (12 digits, optional spaces).";
      }
      if (!educationLoanDetails.panNumber || !panregex.test(educationLoanDetails.panNumber)) {
        stepErrors.panNumber = "Enter a valid PAN Number (e.g., ABCDE1234F).";
      }
      if (!educationLoanDetails.accountNumber || !acnumregex.test(educationLoanDetails.accountNumber)) {
        stepErrors.accountNumber = "Enter a valid Account Number (9 to 18 digits).";
      }
      if (!educationLoanDetails.ifscCode || !ifcsregex.test(educationLoanDetails.ifscCode)) {
        stepErrors.ifscCode = "Enter a valid IFSC Code (e.g., SBIN0001234).";
      }      
    }
    
    if (step === 3) {
      if (!educationLoanDetails.studentName) stepErrors.studentName = "Student's name is required.";
      if (!educationLoanDetails.studentContact || !/^\d{10}$/.test(educationLoanDetails.studentContact)) {
        stepErrors.studentContact = "Enter a valid 10-digit contact number.";
      }
      if (!educationLoanDetails.studentEmail || !/^[\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/.test(educationLoanDetails.studentEmail)) {
        stepErrors.studentEmail = "Enter a valid email address.";
      }
      if (!educationLoanDetails.studentAddress) stepErrors.studentAddress = "Residential address is required.";
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
    seteducationLoanDetails({
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
      console.log("Form Submitted", educationLoanDetails);
      alert("Education Loan Application Submitted Successfully!");
      clearForm();
      
      // Add logic to send data to the server
    }
  };
  

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {/* Step 1: Course & Institute Details */}
        {step === 1 && (
          <>
            <h3>Course & Institute Details</h3>
            <div className="mb-3">
              <label htmlFor="courseName" className="form-label">Course Name</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                name="courseName"
                value={educationLoanDetails.courseName}
                onChange={handleChange}
                placeholder="Enter the course name"
              />
              {errors.courseName && <small className="text-danger">{errors.courseName}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="instituteName" className="form-label">Institute Name</label>
              <input
                type="text"
                className="form-control"
                id="instituteName"
                name="instituteName"
                value={educationLoanDetails.instituteName}
                onChange={handleChange}
                placeholder="Enter the institute name"
              />
              {errors.instituteName && <small className="text-danger">{errors.instituteName}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="instituteAddress" className="form-label">Institute Address</label>
              <input
                type="text"
                className="form-control"
                id="instituteAddress"
                name="instituteAddress"
                value={educationLoanDetails.instituteAddress}
                onChange={handleChange}
                placeholder="Enter institute address"
              />
              {errors.instituteAddress && <small className="text-danger">{errors.instituteAddress}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="courseDuration" className="form-label">Course Duration (Years)</label>
              <input
                type="number"
                className="form-control"
                id="courseDuration"
                name="courseDuration"
                value={educationLoanDetails.courseDuration}
                onChange={handleChange}
                placeholder="Enter duration of the course"
              />
              {errors.courseDuration && (
                <small className="text-danger">{errors.courseDuration}</small>
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
                value={educationLoanDetails.loanAmount}
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
                value={educationLoanDetails.loanPurpose}
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
              value={educationLoanDetails.aadharNumber}
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
              value={educationLoanDetails.panNumber}
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
              value={educationLoanDetails.accountNumber}
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
              value={educationLoanDetails.ifscCode}
              placeholder="Enter the IFSC Code" 
              />
              {errors.ifscCode && <small className="text-danger">{errors.ifscCode}</small>}
            </div>
          </>
        )}

        {/* Step 3: Student's Personal Details */}
        {step === 3 && (
          <>
            <h3>Student's Personal Details</h3>
            <div className="mb-3">
              <label htmlFor="studentName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="studentName"
                name="studentName"
                value={educationLoanDetails.studentName}
                onChange={handleChange}
                placeholder="Enter student's full name"
              />
              {errors.studentName && <small className="text-danger">{errors.studentName}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="studentContact" className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                id="studentContact"
                name="studentContact"
                value={educationLoanDetails.studentContact}
                onChange={handleChange}
                placeholder="Enter contact number"
              />
              {errors.studentContact && <small className="text-danger">{errors.studentContact}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="studentEmail" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="studentEmail"
                name="studentEmail"
                value={educationLoanDetails.studentEmail}
                onChange={handleChange}
                placeholder="Enter email address"
              />
              {errors.studentEmail && <small className="text-danger">{errors.studentEmail}</small>}
            </div>
            <div className="mb-3">
              <label htmlFor="studentAddress" className="form-label">Residential Address</label>
              <input
                type="text"
                className="form-control"
                id="studentAddress"
                name="studentAddress"
                value={educationLoanDetails.studentAddress}
                onChange={handleChange}
                placeholder="Enter residential address"
              />
              {errors.studentAddress && <small className="text-danger">{errors.studentAddress}</small>}
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

export default EducationLoanForm;
