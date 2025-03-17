import React, { useState } from "react";
import "./UserLoanHistory.css";

export default function UserLoanPage() {
  // Loan history data
  const [loanHistory] = useState([
    {
      id: 1,
      loanType: "Business Loan",
      loanAmount: "500,000",
      loanStatus: "Approved",
      appliedDate: "2023-12-01",
      statusUpdateDate: "2023-12-05",
    },
    {
      id: 2,
      loanType: "Personal Loan",
      loanAmount: "200,000",
      loanStatus: "Rejected",
      appliedDate: "2023-11-15",
      statusUpdateDate: "2023-11-20",
    },
    {
      id: 3,
      loanType: "Education Loan",
      loanAmount: "1,000,000",
      loanStatus: "Approved",
      appliedDate: "2023-10-10",
      statusUpdateDate: "2023-10-15",
    },
    {
      id: 4,
      loanType: "Car Loan",
      loanAmount: "300,000",
      loanStatus: "Pending",
      appliedDate: "2023-09-05",
      statusUpdateDate: "N/A",
    },
    {
      id: 5,
      loanType: "Home Loan",
      loanAmount: "2,500,000",
      loanStatus: "Rejected",
      appliedDate: "2023-08-20",
      statusUpdateDate: "2023-08-25",
    },
    {
      id: 6,
      loanType: "Medical Loan",
      loanAmount: "700,000",
      loanStatus: "Approved",
      appliedDate: "2023-07-15",
      statusUpdateDate: "2023-07-20",
    },
    {
      id: 7,
      loanType: "Agriculture Loan",
      loanAmount: "700,000",
      loanStatus: "Approved",
      appliedDate: "2023-03-10",
      statusUpdateDate: "2023-03-18",
    },
  ]);

  return (
    <div className="loan-history">
      <h2 className="fw-bold py-3">Loan History</h2>
      <table className="loan-table bg-light">
        <thead>
          <tr>
            <th>Id</th>
            <th>Loan Type</th>
            <th>Loan Amount</th>
            <th>Status</th>
            <th>Applied Date</th>
            <th>Status Update Date</th>
          </tr>
        </thead>
        <tbody>
          {loanHistory.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.loanType}</td>
              <td>{loan.loanAmount}</td>
              <td
                className={
                  loan.loanStatus === "Approved"
                    ? "status-approved"
                    : loan.loanStatus === "Rejected"
                    ? "status-rejected"
                    : "status-pending" // For pending status
                }
              >
                {loan.loanStatus}
              </td>

              <td>{loan.appliedDate}</td>
              <td>{loan.statusUpdateDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
