import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';


const DatePicker = ({...props}) => {
    const [value, setValue] = useState(dayjs('2022-04-17'));
    return (
        <>
             <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MuiDatePicker
                    // label="Controlled picker"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    {...props}
                />
             </LocalizationProvider>
        </>
    )
}

export default DatePicker;