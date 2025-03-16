import react,{useState}  from "react";
import {useNavigate} from "react-router-dom";
const AddProduct=()=>{
    const[name,setName]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[company,setCompany]=useState("");
    const[error,setError]=useState(false);
     const navigate=useNavigate();
    const Adding=async()=>{  // in this particular lie we are fetching a data.
   if(!name||!price||!category||!company){
      setError(true);
      return false;
   }
        let result=await fetch("http://localhost:300/add",{
            method:"post",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json"
            }

        });

        result= await result.json();

      
        navigate("/")
    }
    return(
        <div className="Addproduct">
  
<input type="text" placeholder="name" className="inputbox" onChange={(e)=>{setName(e.target.value)}} value={name}/>
   {error&&!name&&<span className="input-valid">Enter Valid Name</span>}
<input type="text" placeholder="price" className="inputbox" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
   {error&&!price&&<span>Enter Valid Name</span>}  
<input type="text" placeholder="category" className="inputbox"onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
   {error&&!category&&<span>Enter Valid Name</span>}
<input type="text" placeholder="company" className="inputbox" onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
   {error&&!company&&<span>Enter Valid Name</span>}    
          <button type="button" onClick={Adding} className="app-button">AddProduct</button>
        </div>
    )
}

export default AddProduct;
