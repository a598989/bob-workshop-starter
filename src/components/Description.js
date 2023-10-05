import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";

function Description() {

  const [diceResult, setDiceResult] = useState(null);
  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1; 
    setDiceResult(result); 
  };

  return (
    <>
      <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
        <Typography variant="h6" gutterBottom color="#3f51b5">
          This is me
        </Typography>
        <Typography>
          Dett er en side av meg. Det er faktisk meg på bildet der oppe. Assumet du mitt gender?
          Jeg skårte 4 mot Liverpool.
        </Typography>
      </Box>

      <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
        <Typography variant="h6" gutterBottom color="#3f51b5">
          Jeg er den beste
        </Typography>
        <Typography>
          William kan ikke lage dette :D
        </Typography>
      </Box>

      {/* Dice roll button and result */}
      <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3} textAlign="center">
      <Typography variant="h6" gutterBottom color="#3f51b5">
          Vil du spille et terningspill?
        </Typography>
        <Button variant="contained" color="primary" onClick={rollDice}>
          Roll the Dice
        </Button>
        {diceResult !== null && (
          <Typography variant="h6" mt={2}>
            You rolled a {diceResult}
          </Typography>
        )}
      </Box>
    </>
  );
}

export default Description;
