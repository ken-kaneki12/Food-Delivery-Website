import React from "react";
import styled from "styled-components";
import { Search,ShoppingCartTwoTone } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import {NavLink} from "react-router-dom";

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
const MenuItem = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-left: 20px;
  padding-right: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
          <NavLink to='/logo' ><h5>FOOD SWIPE</h5></NavLink>
          </Logo>
          {/* <SearchContainer>
            <Input />
            <Search style={{color:'gray',fontSize:15}} />
          </SearchContainer> */}
        </Left>
        {/* <Center>center</Center> */}
        <Right>
          <MenuItem>
          <NavLink to='/register'><h5>REGISTER</h5></NavLink>
 
          </MenuItem>
          <MenuItem>
          <NavLink to='/login'><h5>LOGIN</h5></NavLink>
          </MenuItem>
          <MenuItem>
     
            <Badge badgeContent={4} color="primary">
         
              <NavLink to='/cart'><ShoppingCartTwoTone fontSize="large" style = {{ marginBottom:8}}/></NavLink>
             
            </Badge>
         
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
