import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Container=styled.div`

`

const Title=styled.div`
padding-right: 10px;
font-weight:500;
font-size:25px;
text-transform: lowercase;
`

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const auth=useSelector(state=>state.auth)
  const{user}=auth;
  const handleLogout = async () => {
    try {
        await axios.get('/logout')
        localStorage.removeItem('userinfo')
        window.location.href = "/";
    } catch (err) {
        window.location.href = "/";
    }
  }
//   console.log(user)
// let name=user.name;
// name=name.toLowerCase();
// console.log(name)

  return (
    <div>
    <Container>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <Title>{user.name}</Title>
      
      <Avatar alt={user.name} src={user.Avatar}  />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       
    
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}> <NavLink to='/'  onClick={handleLogout}>LOGOUT</NavLink></MenuItem>
      </Menu>
      </Container>
    </div>
  );
}