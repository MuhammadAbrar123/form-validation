import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.css";
import "datatables.net";
import "datatables.net-responsive";
import DataTable from "datatables.net-dt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import "./Tables.css";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";

const Tables = ({ tableData, setTableData }) => {
  const [selectedRowData, setSelectedRowData] = useState(null);
  const tableRef = useRef(null);
  const tableInstanceRef = useRef(null);
  const [editingRowData, setEditingRowData] = useState(null); 
  const [isEditing, setIsEditing] = useState(false)

  const handleRowDelete = (rowDataToDelete) => {
    const updatedTableData = tableData.filter((dataItem) => dataItem !== rowDataToDelete);
    setTableData(updatedTableData);
  };

  const handleAction = (action, rowData) => {
    console.log("Action:", action);
    console.log("Row Data:", rowData);

    if (rowData) {
      if (action === "delete") {
      //   const parents = $(this).parentsUntil("table");
      // const parentNode = parents[parents.length - 1];

      // if (parentNode === tableInstanceRef.current) {
      //   const instance = tableInstanceRef.current;
      //   const rowIndex = instance.row($(this).closest("tr")).index();
      //   instance.row(rowIndex).remove();
      //   instance.draw();
      //   handleRowDelete(rowData);
      //   tableData = tableData.filter((data) => data !== rowData);
      // }else{
      //     console.log(parentNode)
      //   }
      const tableee= [...tableData];
      tableee.splice(tableee.indexOf(rowData), 1);
      setTableData(tableee);
  }
       else if (action === "view") {
        openModal(rowData);
      }else if (action === "edit") {
        openEditModal(rowData);
        setEditingRowData(rowData);
      }
    } else {
      console.log("Row Data is undefined or null.");
    }
  };

  const openEditModal=(rowData)=>{
    setIsEditing(true);
    
  }
  
  

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setEditingRowData(null);
  };

  const saveEditedData = (editedData) => {
    const dataIndex = tableData.findIndex((dataItem) => dataItem === editingRowData);
  
    if (dataIndex !== -1) {
      const updatedTableData = [...tableData];
      updatedTableData[dataIndex] = editedData;
  
      setTableData(updatedTableData);
  
      closeEditModal();
    }
  };
  
  useEffect(() => {
    const $table = $("#example");
    const instance = $table.DataTable({
      data: tableData,
      columns: [
      
        { data: "name" },
        { data: "age" },
        { data: "education" },
        { data: "designation" },
        { data: "salary" },
        { data: "address" },
        {
          data: null,
          render: (data, type, row) => {
            return type === "display"
              ? `
              <div>
              
              <button class="action-button delete-button btn btn-danger" data-action="delete">Delete</button>
              <button class="action-button edit-button btn btn-primary" data-action="edit">Edit</button>
              <button class="action-button view-button btn btn-info" data-action="view">View</button>
              </div>`
              : data;
          },
        },
      ],
      destroy: true,
      paging: true,
      searching: true,
      scrollX: true,
      ordering:true,
      select: true,
    
      scrollY: "200px",
      responsive: true,
      rowCallback: function (row, data) {
        $(row).find(".action-button").data("rowData", data);
      },
    });
    tableInstanceRef.current = instance;
$table.off("click", ".action-button");
    $table.on("click", ".action-button", function () {
      const action = $(this).data("action");
      const rowIndex = instance.row($(this).closest("tr")).index();
      const rowData = instance.row(rowIndex).data();
      handleAction(action, rowData);
     
    });
    

    

    return () => {
      instance.destroy();
    };
  }, [tableData]);

  useEffect(() => {
    if (tableInstanceRef.current) {
      tableInstanceRef.current.clear().rows.add(tableData).draw();
    }
  }, [tableData]);

  return (
    <>
      <table ref={tableRef} id="example" className="display" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Education</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.education}</td>
              <td>{data.designation}</td>
              <td>{data.salary}</td>
              <td>{data.address}</td>
              <td>{/* <ActionsColumn handleAction={handleAction} rowData={data} /> */}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRowData && <ViewModal showModal={true} onCloseModal={closeModal} rowData={selectedRowData} />}
      {isEditing && (
        <EditModal
         
          show={openEditModal}
          handleClose={closeEditModal}
          formData={editingRowData}
          onSave={saveEditedData}
        />
      )}
    </>
  );
};

export default Tables;
