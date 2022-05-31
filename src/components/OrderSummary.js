import React from "react";
import { useNavigate } from "react-router-dom"
 export const OrderSummary=()=>{
    const navigate=useNavigate()
     return(
         <div className="order-summary">
             <button onClick={()=> navigate('/')}>back</button><br></br>
             Order confirmed !
         </div>
     )
 }