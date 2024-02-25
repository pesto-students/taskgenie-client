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
import ToggleButtonGroup from "../components/ToggleButtonGroup";
import ToggleButton from "../components/ToggleButton";
import SearchTextField from "../components/SearchTextField";
import { Stepper } from "../components/UI/Stepper";
import TextArea from "../components/UI/TextArea";
import { InputAdornment } from "@mui/material/";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import DatePicker from "../components/DatePicker";

const PostTask = () => {
  const [location, setLocation] = useState("remote");
  const [time, setTime] = useState("flexible");
  const [currentStep, setCurrentStep] = useState(0);

  const handleLocationChange = (event) => {
    console.log(event);
    setLocation(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleNext = () => {
    setCurrentStep(1);
  };

  const handleBack = () => {
    setCurrentStep(0);
  };

  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <>
      {currentStep === 0 ? (
        // First Step
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

                  {/* Date Pick */}
                  {time === "on" || time === "before" ? (
                    <FormControl
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <DatePicker />
                    </FormControl>
                  ) : null}

                  {/* Submit */}
                  <FormControl sx={{ marginTop: "2rem" }}>
                    <Button
                      variant='contained'
                      onClick={handleNext}
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
      ) : (
        // Second Step
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
              <FormContainer
                onSuccess={handleSubmit}
                defaultValues={{ description: "" }}
              >
                <Stack
                  gap={"1rem"}
                  alignItems={"center"}
                >
                  {/* Description */}

                  <FormControl>
                    <InputLabel>Task Details</InputLabel>
                    <TextArea
                      aria-label='Task Details'
                      minRows={7}
                      maxRows={7}
                    />
                  </FormControl>

                  <FormControl sx={{ marginTop: "2rem" }}>
                    <InputLabel>Budget</InputLabel>
                    <TextField
                      name='budget'
                      type='number'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CurrencyRupeeOutlinedIcon
                              sx={{ color: "rgb(0,0,0)" }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>

                  {/* Image upload */}

                  <FormControl sx={{ marginTop: "2rem" }}>
                    <Button
                      variant='outlined'
                      component='label'
                      sx={{
                        height: "5rem",
                        borderColor: "black",
                        color: "black",
                      }}
                    >
                      Add Photo
                      <input
                        accept='image/*'
                        hidden
                        type='file'
                      />
                      <AddAPhotoOutlinedIcon sx={{ color: "black" }} />
                    </Button>
                  </FormControl>

                  {/* Submit */}
                  <FormControl
                    sx={{ marginTop: "2rem", display: "flex", gap: "1rem" }}
                  >
                    <Button
                      variant='outlined'
                      sx={{ width: "100%" }}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      sx={{ width: "100%" }}
                    >
                      Get Quotes
                    </Button>
                  </FormControl>
                </Stack>
              </FormContainer>
            </Box>
          </Card>
        </Box>
      )}
    </>
  );
};

export default PostTask;
