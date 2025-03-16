import {useEffect, useState} from "react"
import { useParams, useNavigate} from "react-router-dom";
const Updateproduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    const params=useParams();
    const navigate=useNavigate();
   useEffect(()=>{
    console.warn(params);
    getProductDetails();
   },[]) 
   
   const getProductDetails=async ()=>{
     
    let result= await fetch(`http://localhost:300/product/${params.id}`);

   result = await  result.json();

 setCategory(result.category);
 setName(result.name);
 setPrice(result.price);
 setCompany(result.company);
   }

   const Adding= async()=>{

    let result= fetch(`http://localhost:300/product/${params.id}`,{
      method:"put",
      body:JSON.stringify({name,category,price,company}),
      headers:{
        "Content-type":"application/json"
      }
    })
       navigate("/");
   }
    return(
        <div className="Addproduct">
 
<input type="text" placeholder="name" className="inputbox" onChange={(e)=>{setName(e.target.value)}} value={name}/>
  
<input type="text" placeholder="price" className="inputbox" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
  
<input type="text" placeholder="category" className="inputbox"onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
  
<input type="text" placeholder="company" className="inputbox" onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
  
          <button type="button" onClick={Adding} className="app-button">UpdateProduct</button>
        </div>
    )
}

export default Updateproduct;