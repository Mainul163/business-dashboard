
import errorMessage from '../../components/message/ErrorMessage';
import successMessage from '../../components/message/SuccessMessage';
import axiosBaseUrl from './../../axiosBaseUrl/axiosBaseUrl';
import { GET_INCOMEDETAILS_DATA, POST_INCOMEDETAILS_DATA } from './IncomeDetailsActionType';



//******************** get income details data ************************* */

export const get_dataOfIncomeDetails=async()=>{
    
    const incomeGetDataInfo=await axiosBaseUrl.get('incomedetails').then(res=>res).catch(error=>console.log(error))
    if(incomeGetDataInfo.status===200){
   
     return{
 
        type:GET_INCOMEDETAILS_DATA,
        payload:incomeGetDataInfo?.data
    }
    }else{
     errorMessage(`server status ${incomeGetDataInfo?.statusText}`)
    }

 }

//******************** post income details data ************************* */


export const post_dataOfIncomeDetails=async(data)=>{
    
   const incomeInfo=await axiosBaseUrl.post('incomedetails',data).then(res=>res).catch(error=>console.log(error))
  console.log(incomeInfo);
   if(incomeInfo.status===200){
    successMessage('your income details information submit successfully')
   }else{
    errorMessage(`server status ${incomeInfo?.statusText}`)
   }
return{

    type:POST_INCOMEDETAILS_DATA,
    payload:incomeInfo
}
}