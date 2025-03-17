import React, { useState } from "react";
// import "./Table.css";
const AdminLoanPanel = () => {
  const [loanData, setLoanData] = useState({
    loanType: "",
    interestRate: "",
    maxLoanAmount: "",
    minLoanAmount: "",
    repaymentPeriod: "",
    description: "",
  });

  const [loans, setLoans] = useState([
    {
      loanType: "Agriculture Loan",
      interestRate: "5",
      maxLoanAmount: "1000000",
      minLoanAmount: "10000",
      repaymentPeriod: "24 Months",
      description: "A loan to support agricultural businesses.",
    },
    {
      loanType: "Business Loan",
      interestRate: "10",
      maxLoanAmount: "5000000",
      minLoanAmount: "50000",
      repaymentPeriod: "36 Months",
      description: "A loan to help businesses grow and expand.",
    },
  ]); // Default loan details

  const [editIndex, setEditIndex] = useState(null); // Track index of the loan being edited
  const [errors, setErrors] = useState({}); // Validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData({ ...loanData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const validate = () => {
    const validationErrors = {};
    if (!loanData.loanType) validationErrors.loanType = "Loan type is required.";
    if (!loanData.interestRate || isNaN(loanData.interestRate)) {
      validationErrors.interestRate = "Enter a valid interest rate.";
    }
    if (!loanData.maxLoanAmount || isNaN(loanData.maxLoanAmount)) {
      validationErrors.maxLoanAmount = "Enter a valid maximum loan amount.";
    }
    if (!loanData.minLoanAmount || isNaN(loanData.minLoanAmount)) {
      validationErrors.minLoanAmount = "Enter a valid minimum loan amount.";
    }
    if (!loanData.repaymentPeriod) {
      validationErrors.repaymentPeriod = "Repayment period is required.";
    }
    if (!loanData.description) validationErrors.description = "Description is required.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (editIndex !== null) {
        // Update existing loan
        const updatedLoans = loans.map((loan, index) =>
          index === editIndex ? loanData : loan
        );
        setLoans(updatedLoans);
        setEditIndex(null); // Reset edit mode
      } else {
        // Add new loan
        setLoans([...loans, loanData]);
      }

      // Clear form
      setLoanData({
        loanType: "",
        interestRate: "",
        maxLoanAmount: "",
        minLoanAmount: "",
        repaymentPeriod: "",
        description: "",
      });
      alert(editIndex !== null ? "Loan details updated successfully!" : "Loan details added successfully!");
    }
  };

  const handleEdit = (index) => {
    setLoanData(loans[index]);
    setEditIndex(index); // Set edit mode
  };

  const handleDelete = (index) => {
    const updatedLoans = loans.filter((_, i) => i !== index);
    setLoans(updatedLoans);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{color:"  rgb(4, 11, 76)"}}>Admin Loan Management Panel</h1>

      {/* Loan Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="loanType" className="form-label">Loan Type</label>
          <input
            type="text"
            className="form-control"
            id="loanType"
            name="loanType"
            value={loanData.loanType}
            onChange={handleChange}
            placeholder="e.g., Agriculture Loan, Business Loan"
          />
          {errors.loanType && <small className="text-danger">{errors.loanType}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="interestRate" className="form-label">Interest Rate (%)</label>
          <input
            type="number"
            className="form-control"
            id="interestRate"
            name="interestRate"
            value={loanData.interestRate}
            onChange={handleChange}
            placeholder="Enter interest rate"
          />
          {errors.interestRate && <small className="text-danger">{errors.interestRate}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="maxLoanAmount" className="form-label">Maximum Loan Amount</label>
          <input
            type="number"
            className="form-control"
            id="maxLoanAmount"
            name="maxLoanAmount"
            value={loanData.maxLoanAmount}
            onChange={handleChange}
            placeholder="Enter maximum loan amount"
          />
          {errors.maxLoanAmount && <small className="text-danger">{errors.maxLoanAmount}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="minLoanAmount" className="form-label">Minimum Loan Amount</label>
          <input
            type="number"
            className="form-control"
            id="minLoanAmount"
            name="minLoanAmount"
            value={loanData.minLoanAmount}
            onChange={handleChange}
            placeholder="Enter minimum loan amount"
          />
          {errors.minLoanAmount && <small className="text-danger">{errors.minLoanAmount}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="repaymentPeriod" className="form-label">Repayment Period (in months)</label>
          <input
            type="text"
            className="form-control"
            id="repaymentPeriod"
            name="repaymentPeriod"
            value={loanData.repaymentPeriod}
            onChange={handleChange}
            placeholder="e.g., 12, 24, 36"
          />
          {errors.repaymentPeriod && <small className="text-danger">{errors.repaymentPeriod}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={loanData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter loan details or description"
          />
          {errors.description && <small className="text-danger">{errors.description}</small>}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-outline-dark">
            {editIndex !== null ? "Update Loan Details" : "Add Loan Details"}
          </button>
        </div>
      </form>

      {/* Loan Details Table */}
      {loans.length > 0 && (
        <div className="mt-5">
          <h3 className="text-center">Available Loan Details</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Loan Type</th>
                <th>Interest Rate (%)</th>
                <th>Max Loan Amount</th>
                <th>Min Loan Amount</th>
                <th>Repayment Period</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={index}>
                  <td>{loan.loanType}</td>
                  <td>{loan.interestRate}</td>
                  <td>{loan.maxLoanAmount}</td>
                  <td>{loan.minLoanAmount}</td>
                  <td>{loan.repaymentPeriod}</td>
                  <td>{loan.description}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminLoanPanel;
