import React, { useEffect } from "react"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
const Login=()=>{
  const[email,Setemail]=useState("");
  const[password,Setpassword]=useState("");
  const navigate=useNavigate();

  useEffect(()=>{  // this is use becoz user can also not go with login page byu using direct url.
    const auth=localStorage.getItem("user");
    if(auth){
        navigate("/");
    }
  },[])
  const loggedin= async ()=>{ // thias method ias used for Api integeration.
    let result= await fetch("http://localhost:300/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    });

    result= await result.json();
    console.warn(result);

    if(result.name){
         localStorage.setItem("user",JSON.stringify(result));
         navigate("/");
    }

    else {
        alert("please enter correct name");
       
    }
  }
   return (
    <div className="login">
       <input type="text" className="inputlogin"placeholder="email" value={email} onChange={(e)=>{Setemail(e.target.value)}}/>
       <input type="password" className="inputlogin" placeholder="password" value={password} onChange={(e)=>{Setpassword(e.target.value)}}/>
       <button type="button" className="app-button" onClick={loggedin}>Login</button>
    </div>
   )
}

export default Login;