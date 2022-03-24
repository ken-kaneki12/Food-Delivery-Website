import React from "react";
import Home from "./components/Home";
import Register from "./components/Register";
import { Routes,Route } from "react-router-dom";
function App() {
return(
  <>
   {/* <Home/> */}
   <Routes>
     <Route path="/" element={<Home/>} />
       {/* <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/login" element={<Login/>} />  */}  
      <Route path="/register" element={<Register/>} />  
  
   </Routes> 
  </>
)
}

export default App;
