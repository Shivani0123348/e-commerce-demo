import react from "react"
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Sign_up from "./components/Sign_up";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import Updateproduct from "./components/Updateproduct";
function App() {
  return (
   <div className="App">
    <BrowserRouter>
     <Nav  />
     <Routes>

      <Route element={<PrivateComponent/>}> /**from here */
      <Route path="/" element={<Products/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/update/:id" element={<Updateproduct/>}/>
      <Route path="/logout" element={<h1>log-out</h1>}/>
      <Route path="/profile" element={<h1>Profile</h1>}/>
    
      </Route>//*to here these are all protected routes */

      <Route path="/sign" element={<Sign_up/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
     </BrowserRouter>
     <Footer />
     </div>
  );
}

export default App;  
