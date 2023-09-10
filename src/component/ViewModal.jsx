import React, { useState } from "react";
import "./ViewModal.css";

const ViewModal = ({ showModal, onCloseModal, rowData }) => {
  const [activeSection, setActiveSection] = useState("personal");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      {showModal && (
        <div className="modal  " tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-bg-primary">
                <h5 className="modal-title">{rowData.name}</h5>
                <button type="button close" className="close" onClick={onCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid mb-2">
                  <div className="row">
                    <div className="col-4">
                      <button
                        className={`btn btn-success ${activeSection === "personal" ? "active" : ""}`}
                        onClick={() => handleSectionClick("personal")}
                      >
                        Personal
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        className={`btn btn-info ${activeSection === "personal" ? "active" : ""}`}
                        onClick={() => handleSectionClick("educational")}
                      >
                        Educational
                      </button>
                    </div>
                    <div className="col-4">
                      <button
                        className={`btn btn-danger ${activeSection === "personal" ? "active" : ""}`}
                        onClick={() => handleSectionClick("professional")}
                      >
                        Professional
                      </button>
                    </div>
                  </div>
                </div>
                {activeSection === "personal" && (
                  <div className="mt-2">
                    <table className="table table-info table-striped mx-3 ">
                      <tr>
                        <td style={{fontWeight:'800'}}>Name:</td> <td>{rowData.name}</td>
                      </tr>
                      <tr>
                        <td style={{fontWeight:'800'}}>
                        Age: 
                        </td>
                        <td>
                          {rowData.age}
                        </td>
                      </tr>
                      <tr>
                        <td style={{fontWeight:'800'}}>
                          Address:
                        </td>
                        <td>
                          {rowData.address}
                        </td>
                      </tr>
                    </table>

                   
                  </div>
                )}
                {activeSection === "educational" && (
                  <div>
                     <table className="table table-info table-striped mx-3 ">
                      <tr>
                        <td style={{fontWeight:'800'}}>Education:</td> <td>{rowData.education}</td>
                      </tr>
                      
                    </table>
                  </div>
                )}
                {activeSection === "professional" && (
                  <div>
                     <table className="table table-info table-striped mx-3 ">
                      <tr>
                        <td style={{fontWeight:'800'}}>Designation:</td> <td>{rowData.designation}</td>
                      </tr>
                      <tr>
                        <td style={{fontWeight:'800'}}>
                        Salary: 
                        </td>
                        <td>
                          {rowData.salary}
                        </td>
                      </tr>
                     
                    </table>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={onCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ViewModal;
