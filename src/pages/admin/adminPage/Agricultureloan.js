import { useState } from "react";
import "./Table.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AgricultureLoan({ Aloanlist }) {
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handle action to update the loan status
  const handleAction = (action, farmName) => {
    setModalMessage(
      `Status for the loan related to farm "${farmName}" updated successfully to: ${action}`
    );
    setShowModal(true);
  };

  // Table component to render loan list
  const Table = ({ Aloanlist }) => (
    <div className="tablee">
      <h1>Agriculture Loan</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Farm Name</th>
            <th>Farm Size</th>
            <th>Crop Type</th>
            <th>Location</th>
            <th>Loan Amount</th>
            <th>Farmer Name</th>
            <th>Farmer Contact</th>
            <th>Farmer Address</th>
            <th>Status</th> {/* Added Status Column */}
          </tr>
        </thead>
        <tbody>
          {Aloanlist?.map((aloan) => (
            <tr key={aloan.id}>
              <td>{aloan.id}</td>
              <td>{aloan.FarmName}</td>
              <td>{aloan.FarmSize}</td>
              <td>{aloan.CropType}</td>
              <td>{aloan.Location}</td>
              <td>{aloan.LoanAmount}</td>
              <td>{aloan.FarmerName}</td>
              <td>{aloan.FarmerContact}</td>
              <td>{aloan.FarmerAddress}</td>
              <td>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => handleAction("Accepted", aloan.FarmName)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleAction("Rejected", aloan.FarmName)}
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
        <Table Aloanlist={Aloanlist} />
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
