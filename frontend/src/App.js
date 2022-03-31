import React from "react";
import Home from "./components/Home";

import Register from "../src/components/auth/Register";

import Foods from "./components/RestaurantItem/Foods";
import Login from "../src/components/auth/Login";
import Navbar from "./components/Navbar/Navbar";
import FoodMenu from "./components/RestaurantItem/FoodMenu";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view_menu" element={<FoodMenu/>} />
      </Routes>
    </>
  );
}

export default App;
