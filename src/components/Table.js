import React from "react";
import Row from "./Row";

const Table = () => {
   
    
 

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
        
                <Row />
           
        </tbody>
      </table>
    </>
  );
};

export default Table;
