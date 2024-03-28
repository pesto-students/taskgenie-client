import MuiTypography from "@mui/material/Typography";
import PropTypes from "prop-types";

const Typography = ({ children, ...props }) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

Typography.propTypes = {
  children: PropTypes.node,
};
export default Typography;
