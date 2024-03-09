import PropTypes from "prop-types";
import MuiCardActions from "@mui/material/CardActions";

const CardActions = ({ children, ...props }) => {
  return <MuiCardActions {...props}>{children}</MuiCardActions>;
};

// Prop validation for CardActions component
CardActions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardActions;
