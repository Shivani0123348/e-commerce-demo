import react, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
const Products=()=>{
  const[products,Setproducts]=useState([]);
  useEffect(()=>{
  getProducts(); // whenever the page will get reload it will return all the product which are in the list.
  },[])

  const getProducts=async ()=>{
    let  result= await fetch("http://localhost:300/product");

    result= await result.json();
    Setproducts(result);
  }

  const deleteProduct= async(id)=>{

    let result=await fetch(`http://localhost:300/product/${id}`,{
       method:"DELETE"
    });

    result= await result.json();
   
    if(result)
   {
     getProducts(); // product delete hone ke baad jab refresh karenge to automatically delted product ko hta ke saare product ko dikhayega
   }
    
  }

  const searching= async(event)=>{
     let key=event.target.value
     if(key) // agr key andar koi value ho to yeh chalao otherwise else chalao
     {
      let result= await fetch(`http://localhost:300/search/${key}`)

     result=await result.json();

     if(result){
          Setproducts(result);
     }
     }

     else {
         getProducts();
     }
  }
    return (

        <div className="Product-lists">
          
            <h3>Product list</h3>
            <input type="text" placeholder="Search Product" className="search-input" onChange={searching}/>    
       <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
       
       </ul>

       {

        products.length>0 ? products.map((item,index)=>
       
        <ul>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li>
          <button type="button" onClick={()=>deleteProduct(item._id)}>DELETE</button>
          <Link to={"/update/"+item._id}>Update</Link></li>
        
       </ul>
         
        )
         :<h1>NO result found</h1>  
       }

       
        </div>
    )
}
export default Products;