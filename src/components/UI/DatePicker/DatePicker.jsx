import dayjs from "dayjs"; // Import Day.js library
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PropTypes from "prop-types";
export default function DatePickerElement({
  onDateSelect,
  defaultDate = dayjs(),
  ...props
}) {
  // Calculate min and max dates
  const minDate = dayjs(); // Today
  const maxDate = minDate.add(3, "month");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={defaultDate} // Set default date to today
        minDate={minDate} // Convert Day.js object to Date object
        maxDate={maxDate}
        onAccept={onDateSelect}
        {...props}
      />
    </LocalizationProvider>
  );
}

DatePickerElement.propTypes = {
  onDateSelect: PropTypes.func,
};
