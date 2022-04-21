import React,{MouseEvent} from "react";
import styled from "styled-components";
import { AccountCircleOutlined, Search,ShoppingCartTwoTone } from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

import axios from 'axios'
const Container = styled.div`
 
   background-color: #f1f0f063;
   height: 70px;
  
`;
const Cart=styled.div``
const Wrapper = styled.div`
padding-left:25px;
 padding-top:20px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;
const RightSidebar = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-left: 20px;
  padding-right: 25px;
`;
const Auth=styled.div`
display: flex;
`;
const ProfileIcon=styled.div`
display: flex;
padding-bottom: 10px;
`
const Navbar = () => {
const cart=useSelector(state=>state.cart);
const{cartItems}=cart;
const  cartSize = Object.keys(cartItems).length;


const auth=useSelector(state=>state.auth);
const{user,isLogged}=auth

const handleLogout = async () => {
  try {
      await axios.get('/logout')
      localStorage.removeItem('userinfo')
      window.location.href = "/";
  } catch (err) {
      window.location.href = "/";
  }
}


const userLink=()=>{
  
 

  return <div>
      <ProfileIcon>
     <NavLink to='#'>
 
     <Avatar alt={user.name} src={user.avatar} /> 
     </NavLink>

    <RightSidebar> 
          <NavLink to='/'  onClick={handleLogout}><h5>LOGOUT</h5></NavLink>
          </RightSidebar> 

     </ProfileIcon>
  </div>
}

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
          <NavLink to='/RestaurantList' ><h5>FOOD SWIPE</h5></NavLink>
          </Logo>
          {/* <SearchContainer>
            <Input />
            <Search style={{color:'gray',fontSize:15}} />
          </SearchContainer> */}
        </Left>
        {/* <Center>center</Center> */}
        <Right>
        {
             isLogged?userLink():
             <Auth>
           <RightSidebar> 
          <NavLink to='/register'><h5>REGISTER</h5></NavLink>
          </RightSidebar> 
          <RightSidebar> 
          <NavLink to='/login'><h5>LOGIN</h5></NavLink>
          </RightSidebar> 
          </Auth>
    
           }
       

           <RightSidebar>
     

  
           <NavLink to='/sample'><h5>sample</h5></NavLink>
      

  
   </RightSidebar>
          <RightSidebar>
     
            <Badge badgeContent={cartSize-1} color="primary">
         
              <NavLink to='/cart'><ShoppingCartTwoTone fontSize="large" style = {{ marginBottom:8}}/></NavLink>
             
            </Badge>
         
          </RightSidebar>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
