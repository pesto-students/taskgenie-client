import {
  Box,
  TextField,
  Typography,
  Button,
  FormGroup,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import SignIn from "../components/Authentication/signIn";
import SignUp from "../components/Authentication/SignUp";
const AuthPage = () => {
  // Display Signup button if user is not already registered,
  // false: signin form, true: signup form
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Create user if type of form is signup, or perform authentication if
  // type of form is signin
  const handleSignIn = () => {
    // Todo: Handle Signin
  };
  const handleSignUp = () => {
    // Todo: Handle Signup
  };
  return (
    <>
      <Container
        maxWidth='sm'
        component='header'
        sx={{ textAlign: "center" }}
      >
        <Typography
          variant='display'
          sx={{ textAlign: "center" }}
        >
          TaskGenie
        </Typography>
        {isSignUpForm ? (
          <SignUp onSignUp={handleSignUp} />
        ) : (
          <SignIn onSignIn={handleSignIn} />
        )}
      </Container>
    </>
  );
};

export default AuthPage;
