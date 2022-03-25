import React from 'react'
import styled from 'styled-components'
import { restObj } from '../data/data'
import RestList from './RestList'
const Container=styled.div`
display: flex;
padding:20px;
justify-content: space-between;
 /* width: 100%;  */
/* height: 100vh;  */
`;
   
const Rest = () => {
  return (
    <Container>

     {restObj.map((restaurant)=>(
     <RestList restaurant={restaurant} key={restaurant.id}/> 
       
    ))} 
 
  </Container>
  )
}

export default Rest