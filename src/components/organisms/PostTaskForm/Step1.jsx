import { useState } from "react";
import PropTypes from "prop-types";
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
import { validateTask } from "../../../validation/validate";
import { TaskStep1Schema } from "../../../validation/schema/validationSchema";
const locationTypes = [
  { value: "in-person", label: "In Person" },
  { value: "remote", label: "Remote" },
];

const dateTypes = [
  { value: "on", label: "On" },
  { value: "before", label: "Before" },
  { value: "flexible", label: "Flexible" },
];

const Step1 = ({ formData, setFormData, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleTitleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 70) {
      // Update the title field in formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        title: inputValue,
      }));
      clearError("title");
    }
  };

  const handleLocationTypeChange = (newLocationType) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      locationType: newLocationType,
      location: newLocationType === "remote" ? null : prevFormData.location,
    }));
    clearError("location");
  };

  const handleDateTypeChange = (newDateType) => {
    const newDate = newDateType === "flexible" ? null : formData.date;
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateType: newDateType,
      date: newDate,
    }));
    clearError("date");
  };

  const handleOnSelectPlace = (place) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      location: place,
    }));
    clearError("location");
  };

  const handleOnDateSelect = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date,
    }));
    clearError("date");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, locationType, location, dateType, date } = formData;
    let validationObject = {
      title,
      locationType,
      location,
      dateType,
    };

    // Include date in validation only if it is not null
    if (date !== null) {
      validationObject.date = date.toDate();
    }
    const { isValid, errors } = await validateTask(
      TaskStep1Schema,
      validationObject
    );
    if (isValid) {
      // If validation succeeds, call onSubmit function to transition to Step 2
      onSubmit();
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
              value={formData.title}
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
              value={formData.locationType}
              onChange={handleLocationTypeChange}
            />
            {formData.locationType === "in-person" && (
              <PlaceAutocomplete
                name='location'
                placeholder='Enter the locality'
                onSelectPlace={handleOnSelectPlace}
                error={Boolean(errors?.location)}
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
              value={formData.dateType}
              onChange={handleDateTypeChange}
            />
            {(formData.dateType === "on" || formData.dateType === "before") && (
              <FormControl sx={{ textAlign: "center", marginTop: "1rem" }}>
                <DatePicker
                  name='date'
                  value={formData.date}
                  onDateSelect={handleOnDateSelect}
                  helperText={errors?.date}
                  error={Boolean(errors?.date)}
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

Step1.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func,
  onSubmit: PropTypes.func,
};
export default Step1;
