import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  Button,
  TextField,
  InputLabel,
  Stack,
} from "components/atoms";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { validateTask } from "../../../validation/validate";
import { TaskStep2Schema } from "../../../validation/schema/validationSchema";
const Step2 = ({ onSubmit, onPrevious, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const handleDescriptionChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 500) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        description: inputValue,
      }));
      clearError("description");
    }
  };

  const handleBudgetChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue <= 99000) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        budget: inputValue,
      }));
      clearError("budget");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { description, budget } = formData;

    const { isValid, errors } = await validateTask(TaskStep2Schema, {
      description,
      budget,
      imageUrls: [],
    });
    if (isValid) {
      // If validation succeeds, call onSubmit function to transition to Step
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
        {/* Task Details */}
        <FormControl sx={{ marginTop: "1rem" }}>
          <InputLabel>Description</InputLabel>
          <TextField
            name='description'
            multiline
            rows={4}
            value={formData.description}
            onChange={handleDescriptionChange}
            error={Boolean(errors.description)}
            helperText={errors.description}
            fullWidth
            variant='outlined'
            inputProps={{
              maxLength: 500, // Maximum 500 characters allowed
            }}
          />
        </FormControl>
        {/* Budget */}
        <FormControl sx={{ marginTop: "1rem" }}>
          <InputLabel>Budget</InputLabel>
          <TextField
            name='budget'
            type='number'
            value={formData.budget}
            onChange={handleBudgetChange}
            error={Boolean(errors.budget)}
            helperText={errors.budget}
            fullWidth
            variant='outlined'
            inputProps={{
              min: 100,
              max: 99000, // Maximum budget allowed is 99,000
            }}
            InputProps={{
              startAdornment: <CurrencyRupeeOutlinedIcon color='primary' />,
            }}
          />
        </FormControl>
        {/* Buttons */}
        <FormControl sx={{ marginTop: "2rem" }}>
          <Stack
            direction='row'
            gap={1}
          >
            <Button
              variant='outlined'
              onClick={onPrevious}
              sx={{ flex: 1 }}
            >
              Back
            </Button>
            <Button
              variant='contained'
              sx={{ flex: 1 }}
              type='submit'
            >
              Get Quotes
            </Button>
          </Stack>
        </FormControl>
      </form>
    </Box>
  );
};
Step2.propTypes = {
  onSubmit: PropTypes.func,
  onPrevious: PropTypes.func,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func,
};
export default Step2;
