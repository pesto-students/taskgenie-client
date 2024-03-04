import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonGroup = ({ children, ...props }) => {
  return <MuiToggleButtonGroup {...props}>{children}</MuiToggleButtonGroup>;
};

export default ToggleButtonGroup;
