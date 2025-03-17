import React, { useState } from "react";
import "./Table.css"
const AdminReport = () => {
  const [loanData, setLoanData] = useState([
    {
      id: 1,
      loanType: "Agriculture Loan",
      name: "Sarathi",
      contact: "9876543210",
      email: "sarathi9155@gmail.com",
      loanAmount: 50000,
      reason: "To purchase farming equipment",
      date: "2024-11-01",
    },
    {
      id: 2,
      loanType: "Business Loan",
      name: "Badhri",
      contact: "9871234567",
      email: "badhrinarayanan325@gmail.com",
      loanAmount: 200000,
      reason: "To expand my online business",
      date: "2024-11-05",
    },
    {
      id: 3,
      loanType: "Education Loan",
      name: "Nigunthan",
      contact: "7894561230",
      email: "nigunthan1209@gmail.com",
      loanAmount: 100000,
      reason: "To pursue higher studies",
      date: "2024-11-10",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newLoan, setNewLoan] = useState({
    id: "",
    loanType: "",
    name: "",
    contact: "",
    email: "",
    loanAmount: "",
    reason: "",
    date: "",
  });

  // Compute Summary
  const totalApplications = loanData.length;
  const totalLoanAmount = loanData.reduce((sum, loan) => sum + loan.loanAmount, 0);
  const loansByType = loanData.reduce((acc, loan) => {
    acc[loan.loanType] = (acc[loan.loanType] || 0) + 1;
    return acc;
  }, {});

  // Delete Loan Handler
  const handleDelete = (id) => {
    const updatedData = loanData.filter((loan) => loan.id !== id);
    setLoanData(updatedData);
    alert("Loan application deleted successfully!");
  };

  // Add Loan Handlers
  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setNewLoan({ ...newLoan, [name]: value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (
      !newLoan.id ||
      !newLoan.loanType ||
      !newLoan.name ||
      !newLoan.contact ||
      !newLoan.email ||
      !newLoan.loanAmount ||
      !newLoan.reason ||
      !newLoan.date
    ) {
      alert("All fields are required!");
      return;
    }
    setLoanData([...loanData, newLoan]);
    setNewLoan({
      id: "",
      loanType: "",
      name: "",
      contact: "",
      email: "",
      loanAmount: "",
      reason: "",
      date: "",
    });
    setShowAddForm(false);
    alert("New loan application added successfully!");
  };

  return (
    <div className="container mt-5">
      <h1 id="tablee" className="text-center">Admin Loan Report</h1>

      {/* Add Report Button */}
      <div className="text-center my-4">
        <button
          className="btn btn-outline-dark"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Close Add Form" : "Add Report"}
        </button>
      </div>

      {/* Add Report Form */}
      {showAddForm && (
        <div className="card p-3 mb-4">
          <h3 className="text-center">Add New Loan Application</h3>
          <form onSubmit={handleAddSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">ID</label>
              <input
                type="number"
                className="form-control"
                id="id"
                name="id"
                value={newLoan.id}
                onChange={handleAddInputChange}
                placeholder="Enter application ID"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loanType" className="form-label">Loan Type</label>
              <select
                className="form-select"
                id="loanType"
                name="loanType"
                value={newLoan.loanType}
                onChange={handleAddInputChange}
                required
              >
                <option value="" disabled>Select loan type</option>
                <option value="Agriculture Loan">Agriculture Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Education Loan">Education Loan</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newLoan.name}
                onChange={handleAddInputChange}
                placeholder="Enter applicant's name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">Contact</label>
              <input
                type="tel"
                className="form-control"
                id="contact"
                name="contact"
                value={newLoan.contact}
                onChange={handleAddInputChange}
                placeholder="Enter contact number"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={newLoan.email}
                onChange={handleAddInputChange}
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loanAmount" className="form-label">Loan Amount</label>
              <input
                type="number"
                className="form-control"
                id="loanAmount"
                name="loanAmount"
                value={newLoan.loanAmount}
                onChange={handleAddInputChange}
                placeholder="Enter loan amount"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">Reason</label>
              <textarea
                className="form-control"
                id="reason"
                name="reason"
                value={newLoan.reason}
                onChange={handleAddInputChange}
                placeholder="Enter loan reason"
                rows="3"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={newLoan.date}
                onChange={handleAddInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Summary Section */}
      <div className="mt-4">
        <h3>Summary</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Total Applications</h5>
                <p className="card-text">{totalApplications}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Total Loan Amount</h5>
                <p className="card-text">₹{totalLoanAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Applications by Type</h5>
                <ul className="list-unstyled">
                  {Object.entries(loansByType).map(([type, count]) => (
                    <li key={type}>
                      {type}: {count}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Table Section */}
      <div className="mt-5">
        <h3>Detailed Applications</h3>
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Loan Type</th>
              <th>Applicant Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Loan Amount</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loanData.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.loanType}</td>
                <td>{loan.name}</td>
                <td>{loan.contact}</td>
                <td>{loan.email}</td>
                <td>₹{loan.loanAmount.toLocaleString()}</td>
                <td>{loan.reason}</td>
                <td>{loan.date}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(loan.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminReport;
