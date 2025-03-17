import React, { useState } from "react";
import "./UserPayment.css";

const PaymentApp = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    loanId: "",
    amount: "",
    paymentMethod: "Net Banking",
    cardNumber: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Example already paid loan data
  const paidLoans = [
    { loanType: "Business Loan", amount: "₹1,00,000", date: "2024-10-10" },
    { loanType: "Education Loan", amount: "₹50,000", date: "2024-05-15" },
    { loanType: "Agriculture Loan", amount: "₹75,000", date: "2024-08-20" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear field-specific errors on change
  };

  const validateForm = () => {
    const fieldErrors = {};
    const { loanId, amount, paymentMethod, cardNumber, cvv } = paymentDetails;

    if (!loanId.trim()) {
      fieldErrors.loanId = "Loan ID is required.";
    }

    if (!amount || parseFloat(amount) <= 0) {
      fieldErrors.amount = "Enter a valid amount greater than 0.";
    }

    if (paymentMethod === "Credit Card") {
      if (!cardNumber || cardNumber.length !== 16 || isNaN(cardNumber)) {
        fieldErrors.cardNumber = "Enter a valid 16-digit credit card number.";
      }

      if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
        fieldErrors.cvv = "Enter a valid 3-digit CVV.";
      }
    }

    return fieldErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldErrors = validateForm();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    // On successful validation
    setMessage("Payment successful!");
    setErrors({});
    setPaymentDetails({
      loanId: "",
      amount: "",
      paymentMethod: "Net Banking",
      cardNumber: "",
      cvv: "",
    });
  };

  return (
    <>
      <div id="payment">
        <div className="payment-app">
          <h2>Bank Loan Payment</h2>
          <form onSubmit={handleSubmit} className="payment-form">
            <div className="form-group">
              <label htmlFor="loanId">Loan ID:</label>
              <input
                type="text"
                id="loanId"
                name="loanId"
                value={paymentDetails.loanId}
                onChange={handleChange}
                placeholder="Enter your Loan ID"
              />
              {errors.loanId && (
                <small className="text-danger">{errors.loanId}</small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount (₹):</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={paymentDetails.amount}
                onChange={handleChange}
                placeholder="Enter the amount to pay"
              />
              {errors.amount && (
                <small className="text-danger">{errors.amount}</small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={paymentDetails.paymentMethod}
                onChange={handleChange}
              >
                <option value="Net Banking">Select Payment Method</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Credit Card">Credit Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>

            {paymentDetails.paymentMethod === "Credit Card" && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Credit Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                    placeholder="Enter your 16-digit card number"
                    maxLength="16"
                  />
                  {errors.cardNumber && (
                    <small className="text-danger">{errors.cardNumber}</small>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV:</label>
                  <input
                    type="password"
                    id="cvv"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleChange}
                    placeholder="Enter your 3-digit CVV"
                    maxLength="3"
                  />
                  {errors.cvv && (
                    <small className="text-danger">{errors.cvv}</small>
                  )}
                </div>
              </>
            )}

            <button type="submit" className="btn btn-outline-dark">
              Pay Now
            </button>
          </form>
          {message && (
            <p
              className={`message ${
                message === "Payment successful!"
                  ? "text-success"
                  : "text-danger"
              }`}
            >
              {message}
            </p>
          )}
        </div>
        <div className="paymenthistory">
          <h3>Payment History</h3>
          <table className="loan-table bg-light">
            <thead>
              <tr>
                <th>Loan Type</th>
                <th>Amount Paid</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {paidLoans.map((loan, index) => (
                <tr key={index}>
                  <td>{loan.loanType}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentApp;
