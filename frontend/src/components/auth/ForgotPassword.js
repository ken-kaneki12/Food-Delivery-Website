import React,{useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './css/style.css'
import p1 from "./img/register_img/wave.png";
import p2 from "./img/register_img/bg.svg";
import p3 from "./img/register_img/avatar.svg";
import './js/main';

const initialState={
  email:'',
  err:'',
  success:''
}



const ForgotPassword = () => {  
  const[email,setEmail]=useState('');
const[data,setData]=useState(initialState)
const[status,setStatus]=useState(' ');
const[error,setError]=useState({});

const forgotPass=async(e)=>{
  e.preventDefault();
  try{
    const config={
      headers:{
       "Content-Type": "application/json",
      }
    }
    
    const {data}=await axios.post('/forgotpassword',{
      email
    },config);
   

    setStatus(200);

     window.alert("Email send");
    // navigate("/");
    
  }catch(err){
      // console.log(err.response.data)
   setStatus(err.response.status)
    setError(err.response.data)
    
  }
}




  return (
  <>
  
  <img className="wave" src={p1} alt=" " />
      <div className="container">
        <div className="img">
          <img src={p2} alt=" " />
        </div>
        <div className="login-content">
    
        
          <form onSubmit={forgotPass}  >
          
            <img src={p3} alt=" " />
            <h2 className="title">Welcome</h2>

            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
              
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
           

      
            <input type="submit" className="btn" value="VERIFY YOUR EMAIL"  />
          

          </form>
        </div>
      </div>
  </>
  )
}

export default ForgotPassword