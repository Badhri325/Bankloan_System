import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Table.css";

export default function BusinessLoan({ Bloanlist }) {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAction = (action) => {
    setModalMessage(`Status updated successfully to: ${action}`);
    setShowModal(true);
  };

  const Table = ({ Bloanlist }) => {
    return (
      <>
        <div className="tablee">
          <h1>Business Loan</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Business Name</th>
                <th>Business Address</th>
                <th>Business Established</th>
                <th>Loan Amount</th>
                <th>Loan Purpose</th>
                <th>Owner Name</th>
                <th>Owner Contact</th>
                <th>Owner Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Bloanlist?.map((bloan) => (
                <tr key={bloan.id}>
                  <td>{bloan.id}</td>
                  <td>{bloan.BusinessName}</td>
                  <td>{bloan.BusinessAddress}</td>
                  <td>{bloan.BusinessEstablished}</td>
                  <td>{bloan.LoanAmount}</td>
                  <td>{bloan.LoanPurpose}</td>
                  <td>{bloan.OwnerName}</td>
                  <td>{bloan.OwnerContact}</td>
                  <td>{bloan.OwnerAddress}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleAction("Accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleAction("Rejected")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <Table Bloanlist={Bloanlist} />
      </div>

      {/* Bootstrap Modal */}
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
