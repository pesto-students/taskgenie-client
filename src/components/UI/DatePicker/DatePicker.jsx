import dayjs from "dayjs"; // Import Day.js library
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerElement({ ...props }) {
  // Calculate min and max dates
  const minDate = dayjs(); // Today
  const maxDate = minDate.add(3, "month");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        minDate={minDate} // Convert Day.js object to Date object
        maxDate={maxDate}
        {...props}
      />
    </LocalizationProvider>
  );
}
