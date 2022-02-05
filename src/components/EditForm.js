import React, { useState } from "react";
import { DataConsumer } from "../context/DataProvider";



const EditForm = () => {
    const { state: {employeeChosen}, editUserDefinitely } = DataConsumer();
    const [data, setData] = useState( employeeChosen )
  


    const handleChange = (e) => {
       setData({
              ...data,
                [e.target.name]: e.target.value
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
    }


  return (
    <>
     
      <h3>Edit employee</h3>
      <form className="form-control mt-5 p-4" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          required
          type="text"
          placeholder="name"
          className="form-control my-3"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          placeholder="lastname"
          className="form-control my-3"
          name="lastname"
          onChange={handleChange}
            value={data.lastname}
        />
        <label>Phone</label>
        <input
          required
          type="number"
          placeholder="phone"
          className="form-control my-3"
          name="phone"
          onChange={handleChange}
            value={data.phone}
        />
          <button className="btn btn-primary w-100 mt-4" type="submit" onClick={() => editUserDefinitely(data)}>
            Edit
          </button>
      </form>
    </>
  );
};

export default EditForm;
