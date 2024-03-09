import PropTypes from "prop-types";
import MuiSelect from "@mui/material/Select";
import { MenuItem } from "@mui/material";
const Select = ({ value, onChange, options = [], ...props }) => {
  return (
    <MuiSelect
      value={value}
      onChange={onChange}
      fullWidth={true}
      {...props}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
Select.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.array,
};
export default Select;
