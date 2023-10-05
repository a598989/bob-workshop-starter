import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <><Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#3f51b5">
        This is me
      </Typography>
      <Typography>
        Dett er en side av meg. Det er faktisk meg på bildet der oppe. Assumet du mitt gender?
        Jeg skårte 4 mot liverpool.
      </Typography>
    </Box>
    
    <Box py={5} bgcolor="#e8eaf6" borderRadius={3} boxShadow={3} mt={4} px={3}>
        <Typography variant="h6" gutterBottom color="#3f51b5">
          Jeg er den beste
        </Typography>
        <Typography>
          William kan ikke lage dette :D
        </Typography>
      </Box></>
  );
}

export default Description;
