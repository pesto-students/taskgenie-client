import React, { useState } from "react";
import Card from "../components/Card";
import TextField from "../components/TextField";
import Container from "../components/Container";
import Typography from "../components/Typography";
import Button from "../components/Button";
// import { HiOutlinePhotograph } from "react-icons/hi";
import Box from "../components/Box";
import { FormContainer } from "react-hook-form-mui";
import FormControl from "../components/FormControl";
import InputLabel from "../components/InputLabel";
import Stack from "../components/Stack";
import Navbar from "../components/Navbar";
import ToggleButtonGroup from "../components/ToggleButtonGroup";
import ToggleButton from "../components/ToggleButton";
import { GrLocation } from "react-icons/gr";
import SearchTextField from "../components/SearchTextField";
import { Step } from "@mui/material";
import { Stepper } from "../components/UI/Stepper";
const PostTask = () => {
  const [location, setLocation] = useState("remote");
  const [time, setTime] = useState("flexible");
  const [currentStep, setCurrentStep] = useState(0);
  const handleLocationChange = (event, newLocation) => {
    setLocation(newLocation);
  };

  const handleTimeChange = (event, newTime) => {
    setLocation(newTime);
  };

  return (
    <>
      <Box sx={{ padding: "0 1.2rem" }}>
        {/* Stepper */}
        <Box sx={{ margin: "2rem 0" }}>
          <Stepper
            steps={2}
            currentStep={currentStep}
          />
        </Box>
        {/* Main */}
        <Card sx={{ padding: "1rem" }}>
          <Box sx={{ mt: "1rem" }}>
            <FormContainer defaultValues={{ title: "" }}>
              <Stack
                gap={"1rem"}
                alignItems={"center"}
              >
                {/* Title */}

                <FormControl>
                  <InputLabel>What needs to be done?</InputLabel>
                  <TextField
                    name='title'
                    required
                    type='text'
                    placeholder='Enter the title of task here'
                    sx={{ width: "100%" }}
                  />
                </FormControl>

                <FormControl sx={{ marginTop: "2rem" }}>
                  <InputLabel>Where is it located?</InputLabel>
                  <ToggleButtonGroup
                    value={location}
                    onChange={handleLocationChange}
                    sx={{ justifyContent: "center" }}
                  >
                    <ToggleButton value='in-person'>In Person</ToggleButton>
                    <ToggleButton value='remote'>Remote</ToggleButton>
                  </ToggleButtonGroup>
                  {/* <SearchTextField>Search Location</SearchTextField> */}
                </FormControl>

                <FormControl sx={{ marginTop: "2rem" }}>
                  <InputLabel>When do you need this done?</InputLabel>
                  <ToggleButtonGroup
                    value={time}
                    onChange={handleTimeChange}
                    sx={{ justifyContent: "center" }}
                  >
                    <ToggleButton value='on'>On</ToggleButton>
                    <ToggleButton value='before'>Before</ToggleButton>
                    <ToggleButton value='flexible'>Flexible</ToggleButton>
                  </ToggleButtonGroup>
                </FormControl>

                {/*  */}

                {/* Submit */}
                <FormControl sx={{ marginTop: "2rem" }}>
                  <Button
                    variant='contained'
                    type='submit'
                    sx={{ width: "100%" }}
                  >
                    Next
                  </Button>
                </FormControl>
              </Stack>
            </FormContainer>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default PostTask;
