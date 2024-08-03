import PropTypes from "prop-types"; // Import PropTypes
import MuiBox from "@mui/material/Box";

const Box = ({ children, ...props }) => {
  return <MuiBox {...props}>{children}</MuiBox>;
};

// Define prop types for the Box component
Box.propTypes = {
  children: PropTypes.node, // Require children to be valid React nodes
};

export default Box;
