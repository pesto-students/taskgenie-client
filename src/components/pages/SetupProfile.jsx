import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material/";
import Autocomplete from "@mui/material/Autocomplete";
import PlaceAutocomplete from "components/molecules/PlaceAutocomplete";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  InputLabel,
  Card,
  FormControl,
  TextField,
  ToggleButtonGroup,
} from "components/atoms";
// import { validateSetupProfile } from "../validation/validate";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import {
  useSetupProfileMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from "../../store/apiSlice.jsx";
import { logout } from "../../store/authSlice.jsx";

const SetUpProfile = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const { data: isSetupProfileComplete } = useGetUserProfileQuery({userId});
  const navigate = useNavigate();
  const [setupProfile, { isLoading }] = useSetupProfileMutation();
  const { enqueueSnackbar } = useSnackbar();
  const notificationPosition = { vertical: "top", horizontal: "center" };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const choiceTypes = [
    { value: "post-task", label: "Post Task" },
    { value: "find-task", label: "Find Task" },
  ];

  const [choice, setChoice] = useState("post-task");
  const [city, setCity] = useState(null);

  const handleChoiceTypeChange = (newChoice) => {
    setChoice(newChoice);
  };

  const handleOnSelectPlace = (place) => {
    setCity(place.label);
  };

  const handleClose = () => {
    dispatch(logout);
    navigate("/");
  };
  
  // useEffect(() => {
  //   if (profileStatus && profileStatus.isSetupProfileComplete) {
  //     navigate("/");
  //   }
  // }, [profileStatus, navigate]);
  

  const onSubmit = async ( formData ) => {
    const combinedData = {
      ...formData,
      city,
      isSetupProfileComplete: true // or whatever value you want to assign
    };
    console.log("submit Data::", combinedData);
    const response = await setupProfile(combinedData, userId);
    console.log(userId);
    console.log(response);
    // console.log(profileStatus);
    // console.log(profileStatus.isSetupProfileComplete);
    // if (response.error) {
    //   const error = response.error;
    //   const { data } = error;
    //   enqueueSnackbar(data.message, {
    //     variant: "error",
    //     anchorOrigin: notificationPosition,
    //   });
    // } else {
    //   enqueueSnackbar("Profile Set up successful", {
    //     variant: "success",
    //     anchorOrigin: notificationPosition,
    //   });
        navigate("/");
  };

  return (
    <>
      <Container>
        <Box sx={{ padding: "2rem 0" }}>
          {/* Header */}
          <Typography
            variant='h5'
            sx={{ fontWeight: "bold", color: "#8659d3" }}
          >
            TaskGenie
          </Typography>
        </Box>
        <Box component={"section"}>
          <Card sx={{ padding: "2rem 1rem", position: "relative" }}>
          <CloseOutlinedIcon 
            sx={{ 
                position: 'absolute', 
                top: '5px', 
                right: '5px', 
                cursor: 'pointer' }}
            onClick={handleClose} 
          />
            <Box component='header'>
              <Typography variant='h5'>Setup your account</Typography>
            </Box>
            <Box sx={{ mt: "1rem" }}>
              {/* Form1 */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  {/* First Name */}
                  <FormControl>
                    <InputLabel>First Name</InputLabel>
                    <Controller
                      name={"firstName"}
                      control={control}
                      rules={{ required: "First Name is required." }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type={"text"}
                          placeholder='Eg. Syntax'
                          sx={{
                            width: "100%",
                          }}
                          inputProps={{
                            maxLength: 20,
                          }}
                          error={Boolean(errors.firstName)}
                          helperText={errors?.firstName?.message}
                        />
                      )}
                    />
                  </FormControl>

                  {/* Last Name */}
                  <FormControl>
                    <InputLabel>Last Name</InputLabel>
                    <Controller
                      name={"lastName"}
                      control={control}
                      rules={{ required: "Last Name is required." }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          type={"text"}
                          inputProps={{
                            maxLength: 20,
                          }}
                          placeholder='Eg. Sculptors'
                          sx={{
                            width: "100%",
                          }}
                          error={Boolean(errors.lastName)}
                          helperText={errors?.lastName?.message}
                        />
                      )}
                    />
                  </FormControl>

                  {/* City */}
                  <FormControl>
                    <InputLabel>City</InputLabel>
                    <PlaceAutocomplete
                      locationType='locality'
                      onSelectPlace={handleOnSelectPlace}
                    />
                  </FormControl>

                  {/* Post/Find Task */}
                  <FormControl sx={{ marginTop: "2rem" }}>
                    <InputLabel
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      You want to?
                    </InputLabel>
                    <ToggleButtonGroup
                      name='choice'
                      value={choice}
                      defaultValue={choice}
                      options={choiceTypes}
                      onChange={handleChoiceTypeChange}
                      sx={{ justifyContent: "center", mt: "1rem" }}
                    ></ToggleButtonGroup>
                  </FormControl>

                  {/* Finish Setting up */}
                  <FormControl sx={{ marginTop: "2rem" }}>
                    <Button
                      variant='contained'
                      sx={{ width: "100%" }}
                      type='submit'
                      loading={isLoading}
                    >
                      Finish setting up!
                    </Button>
                  </FormControl>
                </Stack>
              </form>
            </Box>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default SetUpProfile;
