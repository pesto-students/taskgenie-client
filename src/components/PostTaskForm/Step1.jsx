import React, { useState } from "react";
import {
  Box,
  Button,
  DatePickerElement,
  Stack,
  InputLabel,
  TextField,
  FormControl,
  ToggleButtonGroup,
} from "../UI";
import PlaceAutocomplete from "../PlaceAutocomplete";

const locationTypes = [
  { value: "in-person", label: "In Person" },
  { value: "remote", label: "Remote" },
];

const dateTypes = [
  { value: "on", label: "On" },
  { value: "before", label: "Before" },
  { value: "flexible", label: "Flexible" },
];

const Step1 = () => {
  const [locationType, setLocationType] = useState("in-person");
  const [dateType, setDateType] = useState("on");

  const handleLocationTypeChange = (newLocationType) => {
    setLocationType(newLocationType);
  };

  const handleDateTypeChange = (newDateType) => {
    setDateType(newDateType);
  };

  const handleOnSelectPlace = (place) => {
    console.log("Selected Place:", place);
  };

  return (
    <Box>
      <form>
        <Stack
          gap={"1rem"}
          alignItems={"center"}
        >
          {/* Task Title */}
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
          {/* Task Location */}
          <FormControl
            sx={{
              marginTop: "2rem",
              width: "100%",
              "& .MuiFormControl-root": {
                width: "100%",
              },
            }}
          >
            <InputLabel>Where is it located?</InputLabel>

            <ToggleButtonGroup
              name='locationType'
              options={locationTypes}
              defaultValue={locationType}
              onChange={handleLocationTypeChange}
            />

            {locationType === "in-person" && (
              <PlaceAutocomplete
                name='location'
                onSelectPlace={handleOnSelectPlace}
                sx={{
                  marginTop: "1rem",
                }}
              />
            )}
          </FormControl>
          {/* Task Date */}
          <FormControl
            sx={{
              marginTop: "2rem",
              width: "100%",
              "& .MuiFormControl-root": {
                width: "100%",
              },
            }}
          >
            <InputLabel>When do you need this done?</InputLabel>

            <ToggleButtonGroup
              name='dateType'
              options={dateTypes}
              defaultValue={dateType}
              onChange={handleDateTypeChange}
            />
          </FormControl>
          {/* Date Pick */}
          {(dateType === "on" || dateType === "before") && (
            <FormControl>
              <DatePickerElement name='date' />
            </FormControl>
          )}

          <FormControl sx={{ marginTop: "2rem" }}>
            <Button
              variant='contained'
              sx={{ width: "100%" }}
              type='submit'
            >
              Next
            </Button>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

export default Step1;
