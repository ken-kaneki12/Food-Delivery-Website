import React from 'react';
import{Outlet,Navigate} from 'react-router-dom';

import { useSelector } from "react-redux";
import Login from '../components/auth/Login';
const AuthOutlet = () => {
const auth=useSelector(state=>state.auth);
const{user,isLogged}=auth
// const isLogged=false

  return isLogged? <Outlet/>: <Navigate to="/login"/> ;
  
  
}

export default AuthOutlet