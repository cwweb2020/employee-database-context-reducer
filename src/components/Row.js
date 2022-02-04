import React from "react";
import { DataConsumer } from "../context/DataProvider";

const Row = () => {
  const { Allemployees, deleteEmployee, showEditForm, editEmployeefn } = DataConsumer();

 const handleDelete = (id) => {
      deleteEmployee(id);
  };

  // edit employee
  const handleEdit = (employee) => {
    showEditForm();
    editEmployeefn(employee);
  }

  return (
    <>
    {
     Allemployees.length > 0 ? Allemployees.map((e, index) => (
   
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td className="text-capitalize">{e.name}</td>
        <td>{e.lastname}</td>
        <td>{e.phone}</td>
       
        <td>
            <button className="btn btn-primary me-2" onClick={()=> handleEdit(e)}>Edit</button>
            <button className="btn btn-danger" onClick={()=> handleDelete(e.id)}>Delete</button>
        </td>
      </tr>
      ))
      : <tr><td colSpan="5" className="text-center">No data</td></tr>
    }
    </>
  );
};

export default Row;
