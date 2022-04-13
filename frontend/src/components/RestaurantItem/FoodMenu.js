import styled from "styled-components";
import Searchbar from "../Searchbar/Searchbar";
import Foods from "./Foods";
import RangeSlide from "../LeftSidebar/RangeSlide";
import RatingSlide from "../LeftSidebar/RatingSlide";
import Footer from "../Footer/Footer";
import { Category } from "@material-ui/icons";
import { ListItemText } from "@material-ui/core";
import { useLocation } from "react-router-dom";
const Container = styled.div``;
const Side = styled.div`
  width: 120px;
`;
const Title = styled.h2`
  margin: 0;
  padding: 0;
  border:0
`;

const FilterContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ListItem=styled.div`
cursor: pointer;
`;
const FoodMenu = () => {
  const location=useLocation();
 const RestaurantName=location.pathname.split("/")[2]
  return (
    <Container>
      <Searchbar />
      <FilterContainer>
        <Filter>
          <Side>
            <RangeSlide />
          </Side>
  <Title>Catagories</Title> 
        <ListItem>
          <ListItemText primary='Pizza'/>
          <ListItemText primary='Pizza'/>
          <ListItemText primary='Pizza'/>
        </ListItem>
        </Filter>

        <Filter>
          <Foods />
        </Filter>
      </FilterContainer>
      <Footer />
    </Container>
  );
};

export default FoodMenu;
