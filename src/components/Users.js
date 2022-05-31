import { Outlet, useSearchParams } from "react-router-dom"
export const Users=()=>{
    const [SearchParams, setSearchParams] =useSearchParams()
    const showActiveUsers = SearchParams.get('filter')==='active'
    return(
        <div>
          <h2>User 1</h2>
          <h2>User 2</h2>
          <h2>User 3</h2>
          <Outlet/>
          <div>
              <button onClick={()=> setSearchParams({ filter : 'active'})}>Active Users</button>
              <button onClick={()=> setSearchParams({})}>Reset Filter</button>

          </div>
          {
              showActiveUsers ? <h2>Showing active users</h2> : <h2>showing all users</h2>
          }
        </div>
       
    )
    
}

//useSearchParams is to deal with the params , ie on cllicking removing or adding the search params
//setSearchParams is to add or remove the parameters