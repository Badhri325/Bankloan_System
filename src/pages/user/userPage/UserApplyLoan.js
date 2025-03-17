import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./UserApplyLoan.css";
import BusinessLoanForm from "./BusinessLoan";
import EducationLoanForm from "./EducationLoan";
import AgricultureLoanForm from "./AgricultureLoan";
// import BsForm from "../../../components/BootstrapModal";

const LoanCard = ({ title, detail, description, modalTarget }) => (
  <section className="loan-item ">
    <div className="detail">
      <p>{detail}</p>
    </div>
    <div className="loan-details">
      <h3>{title}</h3>
      <p className="text-center">{description}</p>
      <button
        type="button"
        className="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target={`#${modalTarget}`}
      >
        Apply Now
      </button>
    </div>
  </section>
);

const Modal = ({ id, title, content }) => (
  <div className="modal" id={id} data-bs-backdrop="static">
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        {/* Modal Body */}
        <div className="modal-body" style={{ textAlign: "start" }}>
          <section>{content}</section>
        </div>
        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);

const UserApplyedLoan = () => {
  return (
    <>
      {/* Services */}
      <section id="loan_details" className="services_style">
        <div>
          <h2 className="py-3">Loan Apply</h2>
        </div>
        <main>
          {/* Business Loan */}
          <LoanCard
            title="Business Loan"
            detail="loan Amount Approved Min-$5,00,000 Max-$25,00,000, Repayment Period 10 Years, rate of interest per Annum 13% "
            description="Every business needs constant capital to ensure expansion and long-term sustainability."
            modalTarget="businessLoanModal"
          />
          <Modal
            id="businessLoanModal"
            title="Business Loan Form"
            content={
              <div>
                <BusinessLoanForm />
              </div>
            }
          />

          {/* Education Loan */}
          <LoanCard
            title="Education Loan"
            detail="loan Amount Approved Min-$5,00,000 Max-$10,00,000, Repayment Period 5 Years, rate of interest per Annum 8% "
            description="We offer instant education loans to students pursuing higher education in India and abroad."
            modalTarget="educationLoanModal"
          />
          <Modal
            id="educationLoanModal"
            title="Education Loan Form"
            content={
              <div>
                <EducationLoanForm />
              </div>
            }
          />

          {/* Agriculture Loan */}
          <LoanCard
            title="Agriculture Loan"
            detail="loan Amount Approved Min-$1,00,000 Max-$7,00,000, Repayment Period 5 Years, rate of interest per Annum 5% "
            description="Check eligibility, features, benefits, interest rates, best offers and apply online to get instant approval."
            modalTarget="agricultureLoanModal"
          />
          <Modal
            id="agricultureLoanModal"
            title="Agriculture Loan Form"
            content={
              <div>
                <AgricultureLoanForm />
              </div>
            }
          />
        </main>
      </section>
    </>
  );
};

export default UserApplyedLoan;
