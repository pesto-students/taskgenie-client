import MuiContainer from "@mui/material/Container";
import PropTypes from "prop-types";

const Container = ({ children, ...props }) => {
  return <MuiContainer {...props}>{children}</MuiContainer>;
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
