import { useState } from "react";
import "./Table.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EducationLoan({ Eloanlist }) {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAction = (action, courseName) => {
    setModalMessage(
      `Status for the course "${courseName}" updated successfully to: ${action}`
    );
    setShowModal(true);
  };

  const Table = ({ Eloanlist }) => (
    <div className="tablee">
      <h1>Education Loan</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>Institute Name</th>
            <th>Institute Address</th>
            <th>Course Duration</th>
            <th>Loan Amount</th>
            <th>Student Name</th>
            <th>Student Contact</th>
            <th>Student Address</th>
            <th>Status</th> {/* Added Status Column */}
          </tr>
        </thead>
        <tbody>
          {Eloanlist?.map((eloan) => (
            <tr key={eloan.id}>
              <td>{eloan.id}</td>
              <td>{eloan.CourseName}</td>
              <td>{eloan.InstituteName}</td>
              <td>{eloan.InstituteAddress}</td>
              <td>{eloan.CourseDuration}</td>
              <td>{eloan.LoanAmount}</td>
              <td>{eloan.StudentName}</td>
              <td>{eloan.StudentContact}</td>
              <td>{eloan.StudentAddress}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleAction("Accepted", eloan.CourseName)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleAction("Rejected", eloan.CourseName)}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div style={{ padding: "10px" }}>
        <Table Eloanlist={Eloanlist} />
      </div>

      {/* Modal for Success Message */}
      {showModal && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setShowModal(false)} // Close modal on background click
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Action Status</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
