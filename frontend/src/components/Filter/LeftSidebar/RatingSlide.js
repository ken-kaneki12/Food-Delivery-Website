import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
const Container=styled.div`
margin: "auto";
 display: "block";
 width: "fit-content";

`


const RatingSlide = () => {
  const [value, setValue] = useState([0, 5]);
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
//   CheckBoxOutlineBlank
  return (
    <Container>
      <Typography id="range-slider" gutterBottom>
       Rating
      </Typography>
      <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
       {value[0]} /- and {value[1]} /-
      </Container>
  );
};

export default RatingSlide;
