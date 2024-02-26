import { InputAdornment } from "@mui/material";
import React from "react";
import { FormContainer } from "react-hook-form-mui";
import {
  Box,
  Card,
  Stack,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Container,
  Button,
} from "../components/UI";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleButton from "../components/GoogleButton";
function SignIn() {
  return (
    <>
      `{" "}
      <Container>
        <Box sx={{ padding: "2rem 0" }}>
          <Typography
            variant='h5'
            sx={{ fontWeight: "bold", color: "#8659d3" }}
          >
            TaskGenie
          </Typography>
        </Box>
        <Box component={"section"}>
          <Card sx={{ padding: "2rem 1rem" }}>
            <Box component='header'>
              <Typography variant='h4'>Hello.</Typography>
              <Typography variant='subtitle2'>Welcome Back</Typography>
            </Box>
            <Box sx={{ mt: "1rem" }}>
              <FormContainer
                defaultValues={{ email: "", password: "" }}
                onSuccess={(data) => console.log(data)}
              >
                <Stack
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  {/* Email */}
                  <FormControl>
                    <InputLabel>Email</InputLabel>
                    <TextField
                      name='email'
                      required
                      type={"email"}
                      placeholder='Enter Email'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <EmailOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: "100%" }}
                    />
                  </FormControl>
                  {/* Password */}
                  <FormControl>
                    <InputLabel>Password</InputLabel>
                    <TextField
                      name='password'
                      required
                      type={"password"}
                      placeholder='Enter Password'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <LockOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                      sx={{ width: "100%" }}
                    />
                  </FormControl>
                  {/* Submit */}
                  <FormControl sx={{ marginTop: "2rem" }}>
                    <Button
                      variant='contained'
                      type='submit'
                      sx={{ width: "100%" }}
                    >
                      Sign In
                    </Button>
                  </FormControl>
                  <Typography>Or</Typography>
                  <GoogleButton type='signin'></GoogleButton>
                </Stack>
              </FormContainer>
            </Box>
          </Card>
        </Box>
      </Container>
      `
    </>
  );
}

export default SignIn;
