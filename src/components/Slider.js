import React, { useState } from "react";
import { Typography, Box, Slider as MuiSlider } from "@mui/material";

function Slider() {
  // State to manage the slider value
  const [sliderValue, setSliderValue] = useState(0);

  // Function to handle slider value change
  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        This is me
      </Typography>
      <Typography>
        Dette er en side av meg. Det er faktisk meg på bildet der oppe. Assumerer du mitt kjønn?
        Jeg scoret 4 mot Liverpool.
      </Typography>
      <MuiSlider
        aria-label="Kor glad er du?"
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
