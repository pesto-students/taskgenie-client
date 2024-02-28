import { useState } from "react";
import {
  Box,
  Button,
  DatePicker,
  Stack,
  InputLabel,
  TextField,
  FormControl,
  ToggleButtonGroup,
} from "../UI";
import PlaceAutocomplete from "../PlaceAutocomplete";
import { PostTaskStep1 } from "../../validation/validationSchema";
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
  const [title, setTitle] = useState("");
  const [locationType, setLocationType] = useState("in-person");
  const [location, setLocation] = useState(null);
  const [dateType, setDateType] = useState("on");
  const [date, setDate] = useState(null);
  const [errors, setErrors] = useState({});

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleLocationTypeChange = (newLocationType) => {
    setLocationType(newLocationType);
    if (newLocationType === "remote") {
      setLocation(null);
    }
  };
  const handleDateTypeChange = (newDateType) => {
    setDateType(newDateType);
    if (newDateType === "flexible") {
      setDate(null);
    }
  };
  const handleOnSelectPlace = (place) => {
    setLocation(place);
  };
  const handleOnDateSelect = (date) => {
    const formattedDate = new Date(date.$y, date.$M, date.$D); // Create a JavaScript Date object
    setDate(formattedDate);
  };

  const validateForm = async () => {
    try {
      // Validate form data against the schema
      await PostTaskStep1.validate(
        {
          title,
          location,
          date,
        },
        { abortEarly: false }
      ); // Validate all fields, don't abort on first error
      return true;
    } catch (validationErrors) {
      // If validation fails, set the errors state to display error messages
      console.log("catching", validationErrors);
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const isValid = await validateForm();

    if (isValid) {
      // If validation passes, submit the form
      console.log(
        `submitting Title:${title}, Location Type: ${locationType}, Location:${location}, Date Type:${dateType}, Date:${date?.toISOString()}`
      );
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
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
              value={title}
              onChange={handleTitleChange}
              placeholder='Enter the title of task here'
              sx={{ width: "100%" }}
            />
          </FormControl>
          {/* Task Location */}
          <FormControl
            sx={{
              marginTop: "2rem",
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
            <FormControl sx={{ textAlign: "center" }}>
              <DatePicker
                name='date'
                onDateSelect={handleOnDateSelect}
              />
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
