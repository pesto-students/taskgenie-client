import { useState } from "react";
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
import { FormContainer, ToggleButtonGroupElement } from "react-hook-form-mui";
import PlaceAutocomplete from "../PlaceAutocomplete";
const locationTypes = [
  { id: "in-person", label: "In Person" },
  { id: "remote", label: "Remote" },
];
const dateTypes = [
  { id: "on", label: "On" },
  { id: "before", label: "Before" },
  { id: "flexible", label: "Flexible" },
];
const Step1 = ({ onSubmit }) => {
  const [dateType, setDateType] = useState("on");
  const [locationType, setLocationType] = useState("in-person");
  const [Location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleLocationTypeChange = (_, val) => {
    setLocationType(val);
  };
  const handleDateTypeChange = (_, val) => {
    setDateType(val);
  };
  const onSubmitStep1 = (data) => {
    console.log("on submit step1", data);
    //onSubmit(data);
  };
  return (
    <Box>
      <FormContainer
        defaultValues={{
          title: "",
          locationType: "in-person",
          location: "",
          dateType: "on",
          date: Date.now(),
        }}
        onSuccess={(data) => {
          onSubmitStep1(data);
        }}
      >
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
              exclusive={true}
              options={locationTypes}
              onChange={handleLocationTypeChange}
            />

            {locationType === "in-person" && <PlaceAutocomplete />}
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
              exclusive={true}
              options={dateTypes}
            />
          </FormControl>

          {/* Date Pick */}
          {dateType === "on" || dateType === "before" ? (
            <FormControl>
              <DatePickerElement name='date' />
            </FormControl>
          ) : null}

          {/* Submit */}
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
      </FormContainer>
    </Box>
  );
};

export default Step1;
