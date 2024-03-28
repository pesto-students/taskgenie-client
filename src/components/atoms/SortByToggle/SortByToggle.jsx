import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButton as MuiToggleButton,
} from "@mui/material";

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)(() => ({
  display: "flex",
  flexDirection: "column",
}));
const StyledMuiToggleButton = styled(MuiToggleButton)(() => ({}));

const SortByToggle = ({ options, value, onChange }) => {
  return (
    <StyledMuiToggleButtonGroup
      value={value}
      exclusive
      aria-label='Sort Tasks by'
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <StyledMuiToggleButton
          value={value}
          key={value}
          size='small'
          aria-label={label}
        >
          {label}
        </StyledMuiToggleButton>
      ))}
    </StyledMuiToggleButtonGroup>
  );
};

SortByToggle.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SortByToggle;
