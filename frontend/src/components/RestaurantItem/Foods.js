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
  return (
    <Container>
      {popularFoods.map((item) => (
        <FoodList item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Foods;