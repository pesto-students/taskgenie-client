import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "../components/UI";
import { validateSetupProfile } from "../validation/validate";

const SetUpProfile = () => {

    const choiceTypes = [
        {value: "post-task", label: "Post Task"},
        {value: "find-task", label: "Find Task"},
    ];

    const [choice, setChoice] = useState('post-task')
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChoiceTypeChange = (newChoice) =>{
        setChoice(newChoice);
      }
    
    const handleFirstNameChange = (event) => {
        if(event.target.value.length < 20){
            setFirstName(event.target.value);
            clearError("firstName");
        }
    };
    
    const handleLastNameChange = (event) => {
        if(event.target.value.length < 20){
            setLastName(event.target.value);
            clearError("firstName");
        }
    };

    const handleOnSelectPlace = (place) => {
        console.log(place);
        setCity(place);
        clearError("city");
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        // Validate form data
        const { isValid, errors } = await validateSetupProfile({
            firstName,
            lastName,
            city,
            choice,
        });
    
        if (isValid) {
            // Prepare form data
            const formData = {
                firstName,
                lastName,
                city: location.label,
                choice,
            };
    
            try {
                // Send POST request to backend
                const res = await fetch('/api/setup-profile', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
    
                // Check if request was successful
                if (res.ok) {
                    // Handle successful response
                    // navigate('/mytasks');
                    console.log('Form submitted successfully!');
                } else {
                    // Handle unsuccessful response
                    console.error('Failed to submit form:', res.statusText);
                }
            } catch (error) {
                // Handle fetch error
                console.error('Error while submitting form:', error);
            }
        } else {
            // Set form validation errors
            setErrors(errors);
        }
    }


    const clearError = (field) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    };

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

                            <form 
                                onSubmit={handleSubmit}
                            >
                                <Stack gap={'1rem'} alignItems={'center'}>

                                    {/* First Name */}
                                    <FormControl>
                                        <InputLabel>First Name</InputLabel>
                                        <TextField 
                                            name = 'firstName' 
                                            type = 'text'
                                            value = {firstName}
                                            required
                                            onChange = {handleFirstNameChange}
                                            placeholder='Eg. Syntax' 
                                            sx={{
                                                width: '100%',
                                            }} />
                                    </FormControl>

                                    {/* Last Name */}
                                    <FormControl>
                                        <InputLabel>Last Name</InputLabel>
                                        <TextField 
                                            name = 'lastName' 
                                            type = 'text'
                                            value = {lastName}
                                            required
                                            onChange = {handleLastNameChange}
                                            placeholder='Eg. Sculptors'
                                            sx={{
                                                width: '100%',
                                            }}
                                        />
                                    </FormControl>
                                    
                                    {/* City */}
                                    <FormControl>
                                        <InputLabel>City</InputLabel>
                                        <PlaceAutocomplete
                                            name='city'
                                            onSelectPlace={handleOnSelectPlace}
                                        />
                                    </FormControl>
                                    

                                    {/* Post/Find Task */}
                                    <FormControl sx={{marginTop: '2rem'}}>
                                        <InputLabel sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>You want to?</InputLabel>
                                        <ToggleButtonGroup
                                            value={choice}
                                            defaultValue={choice}
                                            options={choiceTypes}
                                            onChange={handleChoiceTypeChange}
                                            sx={{justifyContent:'center', mt:'1rem'}}
                                        >
                                        </ToggleButtonGroup>
                                    </FormControl>

                                    {/* Finish Setting up */}
                                    <FormControl sx={{ marginTop: "2rem" }}>
                                        <Button
                                        variant='contained'
                                        sx={{ width: "100%" }}
                                        type='submit'
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
