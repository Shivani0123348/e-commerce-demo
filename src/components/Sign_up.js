import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
const Sign_up=()=>{
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
     const navigate = useNavigate();
      useEffect(()=>{  // this is use becoz user can also not go with login page byu using direct url.
         const auth=localStorage.getItem("user");
         if(auth){
             navigate("/");
         }
       },[])
    const collectData = async()=>{
        console.warn(name,password,email);
              
           let result =await  fetch("http://localhost:300/register",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"
            },
        });

        result= await result.json();
         console.warn(result);

        localStorage.setItem('user',JSON.stringify(result));

        if(result){
            navigate("/");
        }
    }
    return(
        <div className="sign-up-div">
         <input className="inputbox" type="text" 
         value={name} onChange={(e)=>{setName(e.target.value)}}placeholder="Enter Name" /> 
         <input className="inputbox" type="text" 
          value={email} onChange={(e)=>{setEmail(e.target.value)}}placeholder="Email" /> 
         <input className="inputbox" type="Password" 
          value={password} onChange={(e)=>{setPassword(e.target.value)}}placeholder="Password" /> 
         <button onClick={collectData}className="app-button" type="button">Sign Up</button>
        </div>
    )
}

export default Sign_up;


