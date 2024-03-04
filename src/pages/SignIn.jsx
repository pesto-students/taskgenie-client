import { InputAdornment } from "@mui/material";
import React from "react";
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
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useSigninMutation } from "../store/apiSlice";
const SignIn = () => {
  const [signin, { isLoading, isError, error }] = useSigninMutation();
  const { enqueueSnackbar } = useSnackbar();

  // Using useForm hook
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (formData) => {
    console.log("signin with", formData);
    const response = await signin(formData);
    try {
      if (isError) {
        enqueueSnackbar(error.status, { variant: "error" });
      } else if (response.error) {
        console.log("error occuer", response.error);
        enqueueSnackbar(response.error.data.message, { variant: "error" });
      } else {
        enqueueSnackbar("Logged-in Successfully", { variant: "success" });
      }
    } catch (error) {
      console.log("errorr signin", error);
    }
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  {/* Email */}
                  <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Controller
                      name={"email"}
                      control={control}
                      rules={{ required: "Email is required." }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type={"email"}
                          placeholder='Enter Email'
                          autoComplete={"username"}
                          fullWidth
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <EmailOutlinedIcon />
                              </InputAdornment>
                            ),
                          }}
                          error={Boolean(errors.email)}
                          helperText={errors?.email?.message}
                        />
                      )}
                    />
                  </FormControl>
                  {/* Password */}
                  <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Controller
                      name={"password"}
                      control={control}
                      rules={{ required: "Password is required." }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type={"password"}
                          placeholder='Enter Password'
                          inputProps={{
                            maxLength: 32,
                          }}
                          autoComplete={"new-password"}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <LockOutlinedIcon />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            width: "100%",
                          }}
                          error={Boolean(errors.password)}
                          helperText={errors?.password?.message}
                        />
                      )}
                    />
                  </FormControl>
                  {/* Submit */}
                  <FormControl sx={{ marginTop: "2rem" }}>
                    <Button
                      variant='contained'
                      type='submit'
                      sx={{
                        width: "100%",
                      }}
                      loading={isLoading}
                    >
                      Sign In
                    </Button>
                  </FormControl>
                  <Typography>Or</Typography>
                  <GoogleButton type='signin'></GoogleButton>
                </Stack>
              </form>
            </Box>
          </Card>
        </Box>
      </Container>
      `
    </>
  );
};

export default SignIn;
