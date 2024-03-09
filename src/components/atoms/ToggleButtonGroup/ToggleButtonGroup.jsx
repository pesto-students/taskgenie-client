import { useState } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import {
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const StyledToggleGroup = styled(MUIToggleButtonGroup)(() => {
  return {};
});
const ToggleButtonGroup = ({ options, defaultValue, onChange, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const handleChange = (_, newValue) => {
    setSelectedValue(newValue);
    onChange(newValue);
  };
  return (
    <StyledToggleGroup
      color='primary'
      value={selectedValue}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
      {...props}
    >
      {options.map((option) => {
        return (
          <ToggleButton
            key={option.value}
            value={option.value}
          >
            {option.label}
          </ToggleButton>
        );
      })}
    </StyledToggleGroup>
  );
import { useState } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import {
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const StyledToggleGroup = styled(MUIToggleButtonGroup)(() => {
  return {};
});
const ToggleButtonGroup = ({ options, defaultValue, onChange, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const handleChange = (_, newValue) => {
    setSelectedValue(newValue);
    onChange(newValue);
  };
  return (
    <StyledToggleGroup
      color='primary'
      value={selectedValue}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
      {...props}
    >
      {options.map((option) => {
        return (
          <ToggleButton
            key={option.value}
            value={option.value}
          >
            {option.label}
          </ToggleButton>
        );
      })}
    </StyledToggleGroup>
  );
};
ToggleButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};
export default ToggleButtonGroup;