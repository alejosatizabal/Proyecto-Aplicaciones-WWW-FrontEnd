import react from "react";
import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton= () =>{
    const{logout}= useAuth0();
        return(
            <button style={{ width:140 }} className='btn btn-success py-1 my-2 d-block mx-auto  ' onClick={() => logout()}>Logout</button>
        )
}
export default LogoutButton