import axios from 'axios';
import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import RestList from './RestList';
const Container=styled.div`
//display 3 restaurant at one row
display: grid;
grid-template-columns: repeat(3, 1fr);
padding:20px;
justify-content: space-between;

/* height: 100vh;  */
`;
   
const Rest = () => {
  const[status,setStatus]=useState('');
  const[rest,setRest]=useState([]);
  useEffect(()=>{
    const getAllRest=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
         const res=await axios.get('/getAllRest',config)
          // console.log(res.data)
         setStatus(200)
         setRest(res.data)
         }catch(err){
           setStatus(err.status)
         }  
     }
      getAllRest()
  },[])


  return (
    <Container>

     {rest.map((restaurant)=>(
     <RestList restaurant={restaurant} key={restaurant.id}/> 
       
    ))} 
 
  </Container>
  )
}

export default Rest