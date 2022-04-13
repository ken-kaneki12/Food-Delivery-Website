import React from 'react'
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled.div`
flex: 1;
padding:3px;
height: 70vh;
position: relative;
`;
const Img = styled.img`
width: 100%;
height: 100%;
//crop image use object-fit
object-fit: cover;
`;
const Info = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center; 
justify-content: center; 
`;
const Title = styled.h1`
color:white;
padding-bottom: 20px;
`;
const Button = styled.button`
border: none;
padding: 7px;
background-color:lightgrey;
cursor: pointer;
transition: all 1.5s ease; 

`;
const RestList = ({restaurant}) => {
  return (
  
<Container>
      <Img src={restaurant.img} />
      <Info>
        <Title>{restaurant.res_name}</Title>
        <Button>
        <NavLink to={`/RestaurantMenu/${restaurant.res_id}`}>VIEW MENU</NavLink>
      </Button>
      </Info>
    </Container>

  )
}

export default RestList