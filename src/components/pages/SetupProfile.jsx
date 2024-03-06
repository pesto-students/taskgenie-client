import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputAdornment } from "@mui/material/";
import { FormContainer } from "react-hook-form-mui";
import Autocomplete from '@mui/material/Autocomplete';
import PlaceAutocomplete from "../components/PlaceAutocomplete";
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
} from "../components/atoms";
// import { validateSetupProfile } from "../validation/validate";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useSetupProfileMutation, useGetUserProfileQuery } from "../../store/apiSlice.jsx";

const SetUpProfile = () => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const navigate = useNavigate();
    const [setupProfile, { isLoading }] = useSetupProfileMutation();
    const { data: userProfile } = useGetUserProfileQuery
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
        {value: "post-task", label: "Post Task"},
        {value: "find-task", label: "Find Task"},
    ];

    // const [choice, setChoice] = useState('post-task')
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [city, setCity] = useState(null);
    // const [errors, setErrors] = useState({});

    // const handleChoiceTypeChange = (newChoice) =>{
    //     setChoice(newChoice);
    //   }
    
    // const handleFirstNameChange = (event) => {
    //     if(event.target.value.length < 20){
    //         setFirstName(event.target.value);
    //         clearError("firstName");
    //     }
    // };
    
    // const handleLastNameChange = (event) => {
    //     if(event.target.value.length < 20){
    //         setLastName(event.target.value);
    //         clearError("firstName");
    //     }
    // };

    // const handleOnSelectPlace = (place) => {
    //     console.log(place);
    //     setCity(place);
    //     clearError("city");
    // };

    useEffect(() => {
        if (userProfile && userProfile.isSetupProfileComplete) {
          navigate('/');
        }
      }, [userProfile, navigate]);

    const onSubmit = async (formData) => {
        const response = await setupProfile(formData);
        if (response.error) {
          const error = response.error;
          const { data } = error;
          enqueueSnackbar(data.message, {
            variant: "error",
            anchorOrigin: notificationPosition,
          });
        } else {
          enqueueSnackbar("Profile Set up successful", {
            variant: "success",
            anchorOrigin: notificationPosition,
          });
        }
    };


    // const onSubmit = async(e) => {
    //     e.preventDefault();

    //     // Validate form data
    //     const { isValid, errors } = await validateSetupProfile({
    //         firstName,
    //         lastName,
    //         city,
    //         choice,
    //     });
    
    //     if (isValid) {
    //         // Prepare form data
    //         const formData = {
    //             firstName,
    //             lastName,
    //             city: location.label,
    //             choice,
    //         };
    


    // const clearError = (field) => {
    //     setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    // };

    return (
        <>
            <Container>
                <Box sx={{ padding: '2rem 0' }}>

                    {/* Header */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: "#8659d3" }}>TaskGenie</Typography>
                </Box>
                <Box component={"section"}>
                    <Card sx={{ padding: '2rem 1rem' }}>
                        <Box component='header'>
                            <Typography variant='h5'>Setup your account</Typography>
                        </Box>
                        <Box sx={{ mt: '1rem' }}>

                            {/* Form1 */}

                            <form onSubmit={handleSubmit(onSubmit)} >
                                <Stack gap={'1rem'} alignItems={'center'}>

                                    {/* First Name */}
                                    <FormControl>
                                        <InputLabel>First Name</InputLabel>
                                        <Controller
                                            name = {"firstName"}
                                            control={control}
                                            rules={{ required: "First Name is required." }}
                                            render={({ field}) => (
                                                <TextField 
                                                    {...field}
                                                    type ={"text"}
                                                    // onChange = {handleFirstNameChange}
                                                    placeholder='Eg. Syntax' 
                                                    sx={{
                                                        width: '100%',
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
                                            name = {"lastName"}
                                            control={control}
                                            rules={{ required: "Last Name is required." }}
                                            render={({ field}) => (
                                            <TextField
                                                {...field}
                                                type = {"text"}
                                                // onChange = {handleLastNameChange}
                                                placeholder='Eg. Sculptors'
                                                sx={{
                                                    width: '100%',
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
                                        <Controller
                                            name = {"city"}
                                            control={control}
                                            rules={{ required: "City is required." }}
                                            render={({ field}) => (
                                            <PlaceAutocomplete
                                                {...field}
                                                // onSelectPlace={handleOnSelectPlace}
                                            />
                                            )}
                                        />
                                    </FormControl>
                                    

                                    {/* Post/Find Task */}
                                    <FormControl sx={{marginTop: '2rem'}}>
                                        <InputLabel sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>You want to?</InputLabel>
                                        <Controller
                                            name = {"choice"}
                                            control={control}
                                            rules={{ required: "Select your choice" }}
                                            render={({ field}) => (
                                            <ToggleButtonGroup
                                                {...field}
                                                value={choice}
                                                defaultValue={choice}
                                                options={choiceTypes}
                                                // onChange={handleChoiceTypeChange}
                                                sx={{justifyContent:'center', mt:'1rem'}}
                                            >
                                            </ToggleButtonGroup>
                                            )}
                                        />
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
                </Box >
            </Container >
        </>
    )
}

export default SetUpProfile;
