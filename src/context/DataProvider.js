import { useContext, createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

import reducer from "./DataReducer";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, EDIT_EMPLOYEE_CHOSEN, SHOW_EDIT_FORM } from "./types";

const DataContext = createContext();

export const DataConsumer = () => useContext(DataContext);

 const initialState = {
     Allemployees: [],
     isEdit: false,
     employeeChosen: {},
 }

 const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  // const [Allemployees, setAllemployees] = useState([]);
  // const [isEdit, setIsEdit] = useState(false);
  // const [employeeChosen, setEmployeeChosen] = useState({});

  const addEmployee = (employee) => {
    // setAllemployees([...Allemployees, { ...employee, id: uuid() }]);
    // console.log(Allemployees);
     dispatch({
        type: ADD_EMPLOYEE,
        payload: { ...employee, id: uuid() }
     })
  };

  // delete employee
  const deleteEmployee = (id) => {
    // setAllemployees(Allemployees.filter((employee) => employee.id !== id));
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: id
    })
  };

  // edit employee place
  const showEditForm = () => {
    // setIsEdit(!isEdit);
    dispatch({
      type: SHOW_EDIT_FORM
    })
  };

  const editEmployeefn = (employee) => {
    // setEmployeeChosen(employee);
    dispatch({
        type: EDIT_EMPLOYEE_CHOSEN,
        payload: employee
    })
  };

  const editUserDefinitely = (employee) => {
    // setAllemployees(
    //     Allemployees.map((e) => (e.id === employee.id ? employee : e))
    // );
    // setIsEdit(!isEdit);
    dispatch({
        type: EDIT_EMPLOYEE,
        payload: employee
    }) 
    showEditForm();
    };

  return (
    <DataContext.Provider
      value={{
        state,
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
