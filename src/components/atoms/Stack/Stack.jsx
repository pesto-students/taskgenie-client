import MuiStack from "@mui/material/Stack";
import PropTypes from "prop-types";

const Stack = ({ children, ...props }) => {
  return <MuiStack {...props}>{children}</MuiStack>;
};
Stack.propTypes = {
  children: PropTypes.node,
};
export default Stack;
