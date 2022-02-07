import React, { useState } from "react";
import { DataConsumer } from "../context/DataProvider";
import Button from '@material-ui/core/Button';



const Form = () => {
   const { addEmployee } = DataConsumer()
   
    const [employee, setEmployee] = useState({
        name: "",
        lastname: "",
        phone : "",
    })

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        })
    }
   
    const handleSubmit = (e) => {
        e.preventDefault()
        addEmployee(employee)
        e.target.reset()
    }


  return (
    <>
     
      <h3>Add employee</h3>
      <form className="form-control mt-5 p-4 form-total" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          required
          type="text"
          placeholder="name"
          className="form-control my-3"
          name="name"
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          placeholder="lastname"
          className="form-control my-3"
          name="lastname"
          onChange={handleChange}
        />
        <label>Phone</label>
        <input
          required
          type="number"
          placeholder="phone"
          className="form-control my-3"
          name="phone"
          onChange={handleChange}
        />
         <Button className="mt-4 w-100" variant="contained" color="primary" type="submit">
              Add
         </Button>
          {/* <button className="btn btn-primary w-100 mt-4" type="submit">
            Add
          </button> */}
      </form>
    </>
  );
};

export default Form;
