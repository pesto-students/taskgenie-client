import React from "react";
import { Box, TextField } from "@mui/material";
const singIn = () => {
  return (
    <Box className='signIn-wrapper'>
      <TextField label='Email' />
      <TextField label='Password' />
    </Box>
  );
};

export default singIn;
