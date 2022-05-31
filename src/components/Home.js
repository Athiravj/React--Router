import { useNavigate } from "react-router-dom"
export const Home = () =>{
    const navigate=useNavigate()
    return(
        <div className="home-content">
        <div>Home Page</div><br></br>
        <button onClick={()=> navigate('order-summary')}>Place Order</button>
        

        </div>
        
    )
   
}