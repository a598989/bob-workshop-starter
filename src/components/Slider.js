import React, { useState } from "react";
import { Typography, Box, Slider as MuiSlider } from "@mui/material";

function Slider() {
  const [sliderValue, setSliderValue] = useState(0);
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
       Hvor glad er du i dag?
      </Typography>
      <MuiSlider
        aria-label="Hvor glad er du i dag?"
        value={sliderValue}
        onChange={handleChange}
      />
      <Typography>
        Slider Value: {sliderValue}
      </Typography>
      <MuiSlider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}

export default Slider;
