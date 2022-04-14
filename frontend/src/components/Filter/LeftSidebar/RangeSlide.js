import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
const Container=styled.div`
margin: "auto";
 display: "block";
 


`


const RangeSlide = () => {
  const [value, setValue] = useState([0, 1000]);
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
//   CheckBoxOutlineBlank
  return (
    <Container>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
      
      </Container>
  );
};

export default RangeSlide;
