import { useContext, createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const DataContext = createContext();

export const DataConsumer = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [Allemployees, setAllemployees] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [employeeChosen, setEmployeeChosen] = useState({});

  const addEmployee = (employee) => {
    setAllemployees([...Allemployees, { ...employee, id: uuid() }]);
    console.log(Allemployees);
  };

  // delete employee
  const deleteEmployee = (id) => {
    setAllemployees(Allemployees.filter((employee) => employee.id !== id));
  };

  // edit employee place
  const showEditForm = () => {
    setIsEdit(!isEdit);
  };

  const editEmployeefn = (employee) => {
    setEmployeeChosen(employee);
  };

  const editUserDefinitely = (employee) => {
    setAllemployees(
        Allemployees.map((e) => (e.id === employee.id ? employee : e))
    );
    setIsEdit(!isEdit);
    };

  return (
    <DataContext.Provider
      value={{
        Allemployees,
        isEdit,
        employeeChosen,
        addEmployee,
        deleteEmployee,
        showEditForm,
        editEmployeefn,
        editUserDefinitely
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
