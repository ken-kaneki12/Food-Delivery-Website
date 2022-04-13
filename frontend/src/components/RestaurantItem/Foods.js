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

const Foods = () => {
  const[foods,setFoods]=useState([])
  const[status,setStatus]=useState('')
  const getAllFoods=async()=>{
   try{ 
      const config={
          headers:{
           "Content-Type": "application/json",
          }
        }
      const res=await axios.get('http://localhost:5000/getAllFoods',config)
      // console.log(res.data)
      setStatus(200)
      setFoods(res.data)
      }catch(err){
        setStatus(err.status)
      }  
  }
  useEffect(()=>{
      getAllFoods()
  },[])

  return (
    <Container>
      {foods.map((item) => (
        <FoodList item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Foods;