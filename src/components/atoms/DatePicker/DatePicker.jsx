import dayjs from "dayjs"; // Import Day.js library
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";
export default function DatePickerElement({
  onDateSelect,
  helperText,
  error,
  ...props
}) {
  // Calculate min and max dates
  const minDate = dayjs(); // Today
  const maxDate = minDate.add(3, "month");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        minDate={minDate} // Convert Day.js object to Date object
        maxDate={maxDate}
        onAccept={onDateSelect}
        format='DD/MM/YYYY' // Specify the date format
        slotProps={{
          textField: {
            error: error,
            helperText: helperText,
          },
        }}
        {...props}
      />
    </LocalizationProvider>
  );
}

DatePickerElement.propTypes = {
  onDateSelect: PropTypes.func.isRequired, // Function to handle date select, required
  defaultDate: PropTypes.object, // Default date, optional, default value is dayjs() object
  error: PropTypes.bool,
  helperText: PropTypes.string,
};
