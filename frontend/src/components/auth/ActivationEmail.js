import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ActivationEmail = () => {
    const{activation_token}=useParams()
    const[status,setStatus]=useState(' ');
    const[error,setError]=useState(' ');
    // console.log(activation_token)
    useEffect(()=>{
      if(activation_token){
          const activationEmail=async()=>{
              try{
                const config={
                    headers:{
                     "Content-Type": "application/json",
                    }
                  }
              
                  const res=await axios.post('/activeEmail',{activation_token})
                    setStatus(200)
              }catch(err){
                  setStatus(err.response.status)
                  setError(err.response.data)
              }
          }
          activationEmail()
      }
    },[activation_token])
  return (
    <div>ActivationEmail</div>
  )
}

export default ActivationEmail