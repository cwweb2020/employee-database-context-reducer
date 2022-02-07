import React from "react";
import { DataConsumer } from "../context/DataProvider";
import { BsFillPencilFill } from 'react-icons/bs';
import { ImBin2 } from 'react-icons/im';

const Row = () => {
  const { state:{Allemployees}, showEditForm, editEmployeefn,deleteEmployee } = DataConsumer();

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
        <td className="text-capitalize">{e.lastname}</td>
        <td>{e.phone}</td>
       
        <td>
        <BsFillPencilFill 
          className="me-2"
          onClick={() => handleEdit(e)}
        />

        <ImBin2 
          className="ms-3"
          onClick={() => handleDelete(e.id)}
          
        />

        </td>
      </tr>
      ))
      : <tr><td colSpan="5" className="text-center">No data</td></tr>
    }
    </>
  );
};

export default Row;
