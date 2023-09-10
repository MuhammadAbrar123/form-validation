import React, { useState ,useEffect } from "react";
import "./EditModal.css";

function EditModal({ show, handleClose, formData, onSave }) {
  const [editedData, setEditedData] = useState({ ...formData }); 

  const handleChange = (event) => {
    const { id, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (show && formData) {
      setEditedData({ ...formData });
    }
  }, [show, formData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (const field in editedData) {
      if (editedData[field] === "") {
        alert("All fields are required");
        return; 
      }
    }

    console.log("Edited Data:", editedData);

    onSave(editedData);

    
    handleClose();
  };

  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <>
      <div className={showHideClassName}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Data</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form id="data-form " className="w-50 ">
                <div className="mb-3">
                  <input
                    type="text"
                    maxLength="15"
                    onChange={handleChange}
                    value={editedData.name}
                    className="form-control "
                    id="name"
                    pattern="[A-Za-z ]*"
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
                    }}
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    pattern="[0-9]*"
                    onChange={handleChange}
                    value={editedData.age}
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^0-9]/g, "");
                    }}
                    id="age"
                    maxLength="3"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your age"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="education"
                    onChange={handleChange}
                    value={editedData.education}
                    maxLength="11"
                    pattern="[A-Za-z ]*"
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
                    }}
                    aria-describedby="emailHelp"
                    placeholder="Enter your Education"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    onChange={handleChange}
                    value={editedData.designation}
                    maxLength="10"
                    pattern="[A-Za-z ]*"
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
                    }}
                    aria-describedby="emailHelp"
                    placeholder="Enter your Designation"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    pattern="[0-9]*"
                    onChange={handleChange}
                    value={editedData.salary}
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^0-9]/g, "");
                    }}
                    id="salary"
                    maxLength="6"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your salary in PKR."
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    onChange={handleChange}
                    value={editedData.address}
                    maxLength="10"
                    pattern="[A-Za-z ]*"
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z ]/g, "");
                    }}
                    aria-describedby="emailHelp"
                    placeholder="Enter your City"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={handleClose}>
                Close
              </button>
              <button
                type="button"
                value="submit"
                name="submit"
                id="submit"
                className="btn btn-success justify-content-center"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
