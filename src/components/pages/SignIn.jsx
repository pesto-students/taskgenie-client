import { InputAdornment } from "@mui/material";
import { useEffect } from "react";
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
} from "../atoms/index.js";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleButton from "../molecules/GoogleButton/index.jsx";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useSigninMutation, useGetUserProfileQuery } from "../../store/apiSlice.jsx";
import { useDispatch } from "react-redux";
import { setTokens } from "../../store/authSlice.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [signin, { isLoading }] = useSigninMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { data: profileStatus } = useGetUserProfileQuery();
  const notificationPosition = { vertical: "top", horizontal: "center" };
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
    const response = await signin(formData);
    if (response.error) {
      const error = response.error;
      const { data } = error;
      enqueueSnackbar(data.message, {
        variant: "error",
        anchorOrigin: notificationPosition,
      });
    } else {
      dispatch(
        setTokens({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
          user: response.data.user,
        })
      );
      enqueueSnackbar("Logged In Succesfully", {
        variant: "success",
        anchorOrigin: notificationPosition,
      });
    }
    if (profileStatus && !profileStatus.isSetupProfileComplete) {
      console.log("isSetupProfileComplete: ", profileStatus.isSetupProfileComplete);
      navigate("/setup-profile");
    } else {
      navigate("/");
    }
  };

  // useEffect(() => {
  //   if (isAuthenticated && profileStatus) {
  //     if (!profileStatus.isSetupProfileComplete) {
  //       navigate("/setup-profile");
  //     } else {
  //       navigate("/");
  //     }
  //   }
  // }, [isAuthenticated, profileStatus, navigate]);

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
