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
import { useNavigate } from 'react-router-dom';
import {dispatchLogin} from '../redux/actions/authAction';
import {useDispatch} from 'react-redux'

const Login = () => {  


const navigate = useNavigate();
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const[error,setError]=useState({});
const[success,setSuccess]=useState(true);
const[status,setStatus]=useState(' ');
const dispatch=useDispatch()

 const notify = (data,status) => {
   if(status===200){
    toast.success('LOG IN SUCCESS',{
      position: 'top-center'
    });

   }else{
  toast.error(data,{
    position: 'top-center'
  });
 }
}

const loginUser=async(e)=>{
  e.preventDefault();
  try{
    const config={
      headers:{
       "Content-Type": "application/json",
      }
    }
    
    const {data}=await axios.post('/login',{
      email,
      password
    },config);
    // console.log(data);
    // console.log(data.status)
    localStorage.setItem('userinfo',JSON.stringify(data));
    setStatus(200);
    dispatch(dispatchLogin())
     window.alert("Login Success");
    navigate("/");
    
  }catch(err){
      // console.log(err.response.data)
   setStatus(err.response.status)
    setError(err.response.data)
    
  }
}

// async function registerUser(event) {
// event.preventDefault()
//  const response = await axios.post('http://localhost:5000/register', {
 
    
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//           name,
//           email,
//           password,
//           confirm_password
//       }),
//   })

//   const data = await response.json();
//    console.log(data);
//  if(response.status===422 || !data){
//      window.alert('Invalid Registration');
//      console.log('Invalid Registration');
//  } else{
//      window.alert("Registration Success");
//      console.log("Registration Success");
//      navigate('/login');
//  }
//   }
  return (
  <>
  
  <img className="wave" src={p1} alt=" " />
      <div className="container">
        <div className="img">
          <img src={p2} alt=" " />
        </div>
        <div className="login-content">
       
        
       
        
          <form onSubmit={loginUser} >
          <ToastContainer />
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
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                
                <input
                  name="password"
            
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <br />
            <input type="submit" className="btn" value="Login"  onClick={()=>notify(error,status)}/>
            <div className='sample'>
        <h6>Don't Have an Account?</h6>
       <span> <NavLink to='/register'>REGISTER</NavLink></span>
      
        </div>
        
        <span > <NavLink to='/forgotpassword' style={{color: "red",fontWeight:"500",fontSize:"20px",paddingLeft:"100px"}}>Forgot Password</NavLink></span>
          </form>
        </div>
      </div>
  </>
  )
}

export default Login