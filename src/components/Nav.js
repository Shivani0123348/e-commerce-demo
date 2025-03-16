import {Link, useNavigate} from "react-router-dom";
import React  from "react";


const Nav=()=>{
    const auth= localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{

        localStorage.clear();
          navigate("/sign")
    }
    return(
        <div className="nav-links">
          {auth ? <ul className="nav-ul">
          <li> <Link to="/">Product</Link></li>
          <li> <Link to="/add">Add Product</Link></li>
           <li> <Link to="/update/:id">Update Product</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="sign">Logout{(JSON.parse(auth).name)}</Link></li> 
        </ul>:
           <ul className="nav-ul nav-right">
            <li><Link to="/sign">Sign-Up</Link></li>
            <li><Link to="/login">Log in</Link></li>
            </ul>
            }  
        </div>
    );
}

export default  Nav;

