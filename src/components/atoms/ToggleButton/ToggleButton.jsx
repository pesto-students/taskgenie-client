import MuiToggleButton from "@mui/material/ToggleButton";
import PropTypes from "prop-types";

const ToggleButton = ({ children, ...props }) => {
  return <MuiToggleButton {...props}>{children}</MuiToggleButton>;
};

ToggleButton.propTypes = {
  children: PropTypes.node,
};
export default ToggleButton;
