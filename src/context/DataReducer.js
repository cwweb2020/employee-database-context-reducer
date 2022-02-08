import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, EDIT_EMPLOYEE_CHOSEN, SHOW_EDIT_FORM } from "./types"

const reducer=(state,action)=>{
    switch(action.type){
         case ADD_EMPLOYEE:
            return {
                ...state,
                Allemployees:[...state.Allemployees,action.payload]
            }
            case DELETE_EMPLOYEE:
                return {    
                    ...state,
                Allemployees:state.Allemployees.filter(employee=>employee.id !== action.payload)
                }
            case SHOW_EDIT_FORM:
                return {
                   ...state,
                   isEdit:!state.isEdit   
                }   
            case EDIT_EMPLOYEE_CHOSEN:
               return {
                   ...state,
                 employeeChosen: action.payload
               } 
            case EDIT_EMPLOYEE:
             return {
                ...state,
                Allemployees:state.Allemployees.map( employee=>employee.id===action.payload.id?action.payload : employee )
            }                 


        default:
            return state
    }
}

export default reducer;
