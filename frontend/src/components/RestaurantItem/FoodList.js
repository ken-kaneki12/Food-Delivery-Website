
import {
  FavoriteBorderOutlined,
  RateReview,
  SearchOutlined,
  PreviewIcon,
  ShoppingCartOutlined,
  Pageview,
  PageviewOutlined,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 100%;
  z-index: 2;
`;
const FoodDetails=styled.div``
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const FoodList = ({ items }) => {


  return (
 <div >
    <Container >
      {/* <Circle /> */}
      <Image src={items.foodImg} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
      
        <NavLink to={`/SingleFood/${items.foodRestId}/${items.foodName}`}><PageviewOutlined/></NavLink>
         
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
    <FoodDetails>
    
    <p ><b color="green">{items.foodName}</b></p>
    
    {items.foodRating}

    </FoodDetails>
    </div>  
      
  );
};

export default FoodList ;