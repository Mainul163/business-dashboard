
import axiosBaseUrl from './../../axiosBaseUrl/axiosBaseUrl';
import { POST_INCOMEDETAILS_DATA } from './IncomeDetailsActionType';


export const post_dataOfIncomeDetails=async(data)=>{
    console.log(data);
   const incomeInfo=await axiosBaseUrl.post('incomedetails',data).then(res=>res.data).catch(error=>console.log(error))
return{

    type:POST_INCOMEDETAILS_DATA,
    payload:incomeInfo
}
}