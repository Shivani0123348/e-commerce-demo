import react from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent=()=>{
    const auth= localStorage.getItem('user');// if user has something then we can show all the private component
    return auth?<Outlet/>:<Navigate to="/sign"/>// else navigate to sign up page.
}

export default PrivateComponent;