import React, { useState , useRef} from "react";
import "./Modals.css";
import Tables from "./Tables";

function Modals({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    education: "",
    designation: "",
    salary: "",
    address: "",
  });

  const [tableData, setTableData] = useState([]);
  const tableInstanceRef = useRef(null);
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
 
  
  const handleSubmit = (event) => {
    event.preventDefault();

    for (const field in formData) {
      if (formData[field] === "") {
        alert("All fields are required");
        return; // Don't proceed if any field is empty
      }
    }

    console.log("Form Data:", formData);

   

    setFormData({
      name: "",
      age: "",
      education: "",
      designation: "",
      salary: "",
      address: "",
    });

    const newData = {
        name: formData.name,
        age: formData.age,
        education: formData.education,
        designation: formData.designation,
        salary: formData.salary,
        address: formData.address,
      };

      setTableData((prevTableData) => [...prevTableData, newData]);

    if (tableInstanceRef.current) {
        tableInstanceRef.current.clear().rows.add(tableData).draw();
      }
  };

  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <>
      <div className={showHideClassName}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Input Data here</h5>
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
                    value={formData.name}
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
                    value={formData.age}
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
                    value={formData.education}
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
                    value={formData.designation}
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
                    value={formData.salary}
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
                    value={formData.address}
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
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Tables tableData={tableData} setTableData={setTableData} /> 
      
         </>
  );
}

export default Modals;
