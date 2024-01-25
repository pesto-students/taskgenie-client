import React, { useState } from "react";
import { Box, TextField, Typography, FormGroup, Button } from "@mui/material";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box
      component='main'
      sx={{ textAlign: "center", marginTop: "4rem", padding: "0 2rem" }}
    >
      <Box>
        <Typography variant='h1'>Signin to your account</Typography>
      </Box>
      <Box sx={{ marginTop: "3rem" }}>
        <FormGroup sx={{ gap: "1.2rem" }}>
          <TextField
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button>
            <Typography variant='bodyLg'>Continue</Typography>
          </Button>
        </FormGroup>
      </Box>
      <Box>
        <Typography sx={{ margin: "10px 0" }}>OR</Typography>
        <FormGroup>
          <Button variant='outlined'>
            <Typography variant='bodyLg'>Login with google</Typography>
          </Button>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default SignIn;
