import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import PropTypes from "prop-types";

const ToggleButtonGroup = ({ children, ...props }) => {
  return <MuiToggleButtonGroup {...props}>{children}</MuiToggleButtonGroup>;
};

ToggleButtonGroup.propTypes = {
  children: PropTypes.node,
};

export default ToggleButtonGroup;
