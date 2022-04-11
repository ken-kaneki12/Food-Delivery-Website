import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import Home from "./components/Home";
import Register from "../src/components/auth/Register";
import ActivationEmail from "../src/components/auth/ActivationEmail"
import Login from "../src/components/auth/Login";
import Navbar from "./components/Navbar/Navbar";
import FoodMenu from "./components/RestaurantItem/FoodMenu";
import Cart from "./components/Cart/Cart";

import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
const dispatch=useDispatch()
const auth=useSelector(state=>state.token)
useEffect(()=>{
const userinfo=localStorage.getItem('userinfo')
console.log(userinfo.length)
if(userinfo.length>0){
  const getToken=async()=>{
   
    const res = await axios.post('http://localhost:5000/refreshToken')
    dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
  }
  getToken()
}
},[auth.isLogged,dispatch])

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activate/:activation_token" element={<ActivationEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view_menu" element={<FoodMenu/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
