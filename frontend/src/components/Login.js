import React,{useState} from 'react';
import axios from 'axios';
 import '../css/style.css';
import p1 from "../img/register_img/wave.png";
import p2 from "../img/register_img/bg.svg";
import p3 from "../img/register_img/avatar.svg";
import '../js/main';
import { useNavigate } from 'react-router-dom'
const Login = () => {
const navigate = useNavigate();
// const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
// const[confirm_password,setConfirm_password]=useState('');
const[error,setError]=useState(false);
const[loading,setLoading]=useState(false);
const loginUser=async(e)=>{
  e.preventDefault();
  try{
    const config={
      headers:{
       "Content-Type": "application/json",
      }
    }
    setLoading(true)
    const {data}=await axios.post('http://localhost:5000/login',{
      email,
      password
    },config);
    console.log(data);
    console.log(data.status)
    localStorage.setItem('userinfo',JSON.stringify(data))
 
    setLoading(false)
    window.alert("Login Success");
    navigate("/");
    
  }catch(error){
  setError(error.response.data.message)
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
          <form onSubmit={loginUser}>
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
            <input type="submit" className="btn" value="Login" />
          </form>
        </div>
      </div>
  </>
  )
}

export default Login