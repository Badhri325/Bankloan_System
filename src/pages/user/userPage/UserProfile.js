import React, { useState } from "react";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    loanType: "",
    loanAmount: "",
    loanTenure: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editableData, setEditableData] = useState(profileData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditableData(profileData); // Populate editableData with current profileData
    }
  };

  const handleSave = () => {
    setProfileData(editableData);
    setIsEditing(false);
  };

  return (
    <div className="container mt-4">
      <h2>Profile Information</h2>
      <div className=" p-4">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={editableData.name}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not in edit mode
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={editableData.email}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not in edit mode
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={editableData.phone}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not in edit mode
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address:</label>
          <textarea
            className="form-control"
            name="address"
            value={editableData.address}
            onChange={handleChange}
            disabled={!isEditing} // Disable textarea when not in edit mode
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Type:</label>
          <input
            type="text"
            className="form-control"
            name="loanType"
            value={editableData.loanType}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not in edit mode
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Amount:</label>
          <input
            type="text"
            className="form-control"
            name="loanAmount"
            value={editableData.loanAmount}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not in edit mode
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Loan Tenure:</label>
          <input
            type="text"
            className="form-control"
            name="loanTenure"
            value={editableData.loanTenure}
            onChange={handleChange}
            disabled={!isEditing} // Disable input when not in edit mode
          />
        </div>
        <div>
          {isEditing ? (
            <div>
              <button className="btn btn-primary me-2" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={toggleEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={toggleEdit}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
