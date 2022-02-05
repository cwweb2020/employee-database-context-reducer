import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss"
import Form from './components/Form';
import Table from './components/Table';
import EditForm from './components/EditForm';

import { DataConsumer } from './context/DataProvider';



function App() {
  const { state:{isEdit} } = DataConsumer();
  return (
    <>
     
       <section className="total-section">
        <div className="wrapper">
          <div className="container1">
          {
            isEdit ? <EditForm /> : <Form />
          }
          </div>
          <div className="container2">

             <Table />

          </div>
        </div>
      </section>
    
    </>
  );
}

export default App;
