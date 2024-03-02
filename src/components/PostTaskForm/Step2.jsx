import React, { useState } from "react";
import { Box, FormControl, Button, TextField, InputLabel } from "../UI";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
const Step2 = ({ onSubmit, onPreviousStep, formData }) => {
  const [taskDetails, setTaskDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState({});

  const handleTaskDetailsChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 500) {
      // Assuming max length is 500 characters
      setTaskDetails(inputValue);
      clearError("taskDetails");
    }
  };

  const handleBudgetChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue <= 99000) {
      // Maximum budget allowed is 99,000
      setBudget(inputValue);
      clearError("budget");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!taskDetails) {
      validationErrors.taskDetails = "Task details are required";
    }
    if (!budget) {
      validationErrors.budget = "Budget is required";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, proceed to the next step
      onSubmit({ taskDetails, budget });
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
          <InputLabel>Task Details</InputLabel>
          <TextField
            name='taskDetails'
            multiline
            rows={4}
            value={taskDetails}
            onChange={handleTaskDetailsChange}
            error={Boolean(errors.taskDetails)}
            helperText={errors.taskDetails}
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
            value={budget}
            onChange={handleBudgetChange}
            error={Boolean(errors.budget)}
            helperText={errors.budget}
            fullWidth
            variant='outlined'
            inputProps={{
              max: 99000, // Maximum budget allowed is 99,000
            }}
            InputProps={{
              startAdornment: <CurrencyRupeeOutlinedIcon color='primary' />,
            }}
          />
        </FormControl>
        {/* Buttons */}
        <FormControl sx={{ marginTop: "2rem" }}>
          <Button
            variant='outlined'
            onClick={onPreviousStep}
          >
            Back
          </Button>
          <Button
            variant='contained'
            sx={{ marginLeft: "1rem" }}
            type='submit'
          >
            Get Quotes
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Step2;
