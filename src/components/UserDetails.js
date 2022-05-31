import { useParams } from "react-router-dom"
export const UserDetails=()=>{
    const params = useParams()
    const usersId = params.usersId
    return(
        <div>Details about user {usersId}</div>
    )
}