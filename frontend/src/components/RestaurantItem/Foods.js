import React,{useState,useEffect} from "react";
import axios from 'axios'
import styled from "styled-components";
import FoodList from "./FoodList";
import { useParams } from "react-router-dom";



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
  const {Restaurant}=useParams()
  // console.log(Restaurant)
  useEffect(()=>{
    const getAllFoods=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
         const res=await axios.get(`/getAllFoods?restId=${Restaurant}`,config)
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