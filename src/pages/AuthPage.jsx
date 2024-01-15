import { Box, TextField, Typography, Button, FormGroup } from "@mui/material";
import React, { useState } from "react";

const AuthPage = () => {
  // Display Signup button if user is not already registered,
  // false: signin form, true: signup form
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create user if type of form is signup, or perform authentication if
  // type of form is signin
  const handleAuthenticationAction = () => {
    console.log("signin or signup");
  };
  return (
    <>
      <Box
        component='header'
        sx={{ textAlign: "center" }}
      >
        <Typography
          variant='display'
          sx={{ textAlign: "center" }}
        >
          TaskGenie
        </Typography>
      </Box>
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
      </Box>
    </>
  );
};

export default AuthPage;
