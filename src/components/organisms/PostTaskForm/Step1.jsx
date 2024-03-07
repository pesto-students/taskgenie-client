import { useState } from "react";
import dayjs from "dayjs";
import {
  Box,
  Button,
  DatePicker,
  Stack,
  InputLabel,
  TextField,
  FormControl,
  ToggleButtonGroup,
} from "components/atoms";
import PlaceAutocomplete from "../../molecules/PlaceAutocomplete";
import { validateStep1 } from "../../../validation/validate";

const locationTypes = [
  { value: "in-person", label: "In Person" },
  { value: "remote", label: "Remote" },
];

const dateTypes = [
  { value: "on", label: "On" },
  { value: "before", label: "Before" },
  { value: "flexible", label: "Flexible" },
];

const Step1 = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [locationType, setLocationType] = useState("in-person");
  const [location, setLocation] = useState("");
  const [dateType, setDateType] = useState("on");
  const [date, setDate] = useState(dayjs());
  const [errors, setErrors] = useState({});

  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 70) {
      setTitle(inputValue);
      clearError("title");
    }
  };

  const handleLocationTypeChange = (newLocationType) => {
    setLocationType(newLocationType);
    if (newLocationType === "remote") {
      setLocation(null);
    }
    clearError("location");
  };

  const handleDateTypeChange = (newDateType) => {
    setDateType(newDateType);
    if (newDateType === "flexible") {
      setDate(dayjs());
    }
    clearError("date");
  };

  const handleOnSelectPlace = (place) => {
    setLocation(place);
    clearError("location");
  };

  const handleOnDateSelect = (date) => {
    setDate(date);
    clearError("date");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = await validateStep1({
      title,
      locationType,
      location,
      dateType,
      date: date?.toDate(),
    });
    if (isValid) {
      // If validation succeeds, call onSubmit function to transition to Step 2
      onSubmit({
        title,
        locationType,
        location,
        dateType,
        date: date?.toDate(),
      });
    } else {
      setErrors(errors);
    }
  };

  const clearError = (field) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Stack
          gap={"0.5rem"}
          alignItems={"center"}
        >
          {/* Task Title */}
          <FormControl>
            <InputLabel>What needs to be done?</InputLabel>
            <TextField
              name='title'
              type='text'
              value={title}
              onChange={handleTitleChange}
              placeholder='Enter the title of task here'
              sx={{ width: "100%" }}
              error={Boolean(errors.title)}
              helperText={errors?.title}
            />
          </FormControl>
          {/* Task Location */}
          <FormControl sx={{ marginTop: "1rem" }}>
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
                error={Boolean(errors.location)}
                helperText={errors?.location}
                sx={{ marginTop: "1rem" }}
              />
            )}
          </FormControl>
          {/* Task Date */}
          <FormControl sx={{ marginTop: "1rem" }}>
            <InputLabel>When do you need this done?</InputLabel>
            <ToggleButtonGroup
              name='dateType'
              options={dateTypes}
              defaultValue={dateType}
              onChange={handleDateTypeChange}
            />
            {(dateType === "on" || dateType === "before") && (
              <FormControl sx={{ textAlign: "center", marginTop: "1rem" }}>
                <DatePicker
                  name='date'
                  onDateSelect={handleOnDateSelect}
                  error={Boolean(errors.date)}
                  helperText={errors?.date}
                />
              </FormControl>
            )}
          </FormControl>

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
