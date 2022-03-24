import React,{useState} from 'react';
 import '../css/style.css';
import p1 from "../img/register_img/wave.png";
import p2 from "../img/register_img/bg.svg";
import p3 from "../img/register_img/avatar.svg";
import '../js/main'

import { useNavigate } from 'react-router-dom'
const Register = () => {
const navigate = useNavigate();
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[confirm_password,setConfirm_password]=useState('');

async function registerUser(event) {
event.preventDefault()
 const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
    
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          name,
          email,
          password,
          confirm_password
      }),
  })

  const data = await response.json();
   console.log(data);
 if(response.status===422 || !data){
     window.alert('Invalid Registration');
     console.log('Invalid Registration');
 } else{
     window.alert("Registration Success");
     console.log("Registration Success");
     navigate('/login');
 }
  }
  return (
  <>
  
    <img className="wave" src= {p1} alt=" "/>
  <div className="container">
    <div className="img">
      <img src={p2} alt=" "/>
    </div>
    <div className="login-content">
      <form onSubmit={registerUser}>
        <img src={p3}alt=" "/>
        <h2 className="title">Welcome</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            {/* <h5>Username</h5> */}
            <input 
         
            type="text" 
            className="input"  
            placeholder='Name'
            name="name"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            {/* <h5>Email</h5> */}
            <input 
             name="email"
            id="email"
            type="email" 
            className="input" 
            placeholder='Email' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
           

            />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            {/* <h5>Password</h5> */}
            <input
             name="password"
        
             type="password"
              className="input" 
              placeholder='Password' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

              />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            {/* <h5>Password</h5> */}
            <input 
            name='confirm_password'
            id="confirm_password"
            type="password"
             className="input" 
              placeholder='Confirm Password'
              value={confirm_password}
              onChange={(e)=>setConfirm_password(e.target.value)}
              />
          </div>
        </div>
        <br />
        <input type="submit" className="btn" value="Register" />
      </form>
    </div>
  </div>
  </>
  )
}

export default Register