import { useAuth0 } from "@auth0/auth0-react"

const LoginButton= () =>{
    const{loginWithRedirect}= useAuth0();
        return(
            <button style={{ width:140 }} className='btn btn-success py-1 my-2 d-block mx-auto  ' onClick={() => loginWithRedirect()}>Login with google</button>
        )
}
export default LoginButton