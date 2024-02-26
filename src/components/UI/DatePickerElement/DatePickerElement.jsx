import React from "react";
import { DatePickerElement as ReactHookDatePicker } from "react-hook-form-mui";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const DatePickerElement = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <ReactHookDatePicker {...props} /> */}
    </LocalizationProvider>
  );
};

export default DatePickerElement;
