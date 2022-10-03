import { GET_INCOMEDETAILS_DATA } from "./IncomeDetailsActionType"

const incomeDetailsData={
    incomeDetails:[]
}


export const incomeDetails=(state = incomeDetailsData, action)=>{
 switch(action.type){
    case GET_INCOMEDETAILS_DATA:
    return { ...state, incomeDetails: action.payload };
    
    default:
        return state;
 }
}