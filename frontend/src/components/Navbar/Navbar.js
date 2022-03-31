import React from "react";
import styled from "styled-components";
import { Search,ShoppingCartTwoTone } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  height: 50px;
   background-color: #f1f0f063;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
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
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
          <NavLink to='/logo' >FOOD SWIPE</NavLink>
          </Language>
          {/* <SearchContainer>
            <Input />
            <Search style={{color:'gray',fontSize:15}} />
          </SearchContainer> */}
        </Left>
        {/* <Center>center</Center> */}
        <Right>
          <MenuItem>
          <NavLink to='/register'>REGISTER</NavLink>
 
          </MenuItem>
          <MenuItem>
          <NavLink to='/login'>LOGIN</NavLink>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartTwoTone/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
