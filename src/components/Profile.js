import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const {user, isAuthenticated}=useAuth0();
    return (isAuthenticated &&(
    <div>
        <img src={user.picture} alt={user.name}/>
        <h6>{user.name}</h6>
        
        <p>Succesfuly logged</p>
    </div>)
    )
};

export default Profile;