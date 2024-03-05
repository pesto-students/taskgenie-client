import { Box } from "@mui/material";
import PropTypes from "prop-types";

const FormControl = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      style={{ width: "100%" }}
    >
      {children}
    </Box>
  );
};
FormControl.propTypes = {
  children: PropTypes.node,
};
export default FormControl;
