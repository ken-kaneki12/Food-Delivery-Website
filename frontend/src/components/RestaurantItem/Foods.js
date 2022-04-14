import React,{useState,useEffect} from "react";
import axios from 'axios'
import styled from "styled-components";
import { popularFoods } from "../../data/data";
import FoodList from "./FoodList";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Foods = ({RestaurantName,filters,sort}) => {
  // console.log(RestaurantName,filters,sort)
  const[foods,setFoods]=useState([])
  const[status,setStatus]=useState('')
  
  useEffect(()=>{
    const getAllFoods=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
         const res=await axios.get('/getAllFoods',config)
          // console.log(res.data)
         setStatus(200)
         setFoods(res.data)
         }catch(err){
           setStatus(err.status)
         }  
     }
      getAllFoods()
  },[])

  return (
    <Container>
      {foods.map((item,pos) => (
        <FoodList items={item} key={pos} />
      ))}
    </Container>
  );
};

export default Foods;