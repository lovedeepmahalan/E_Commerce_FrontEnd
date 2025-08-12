import {api} from "../../Config/ApiConfig"
import {CREATE_PAYMENT_FAILURE,CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST} from "./ActionType"

export const createPayment=(orderId)=>async(dispatch)=>{
    dispatch({type:CREATE_PAYMENT_REQUEST})
    try{
        console.log("Order id for payment is ::",orderId)
        const {data} =await api.post(`/api/payments/${orderId}`);
        console.log("payment link url is :: ",data.payment_Link_Url)
        if(data.payment_Link_Url){
            window.location.href=data.payment_Link_Url;
        }
    }catch(error){
        dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.mesage})
    }
}

export const updatePayment=(reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_PAYMENT_REQUEST})
    try{
        const {data} =await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);

       console.log("update paymnent :- ",data)
    }catch(error){
        dispatch({type:UPDATE_PAYMENT_FAILURE,payload:error.mesage})
    }
}

