import MuiGrid from "@mui/material/Grid";
import PropTypes from "prop-types";
const Grid = ({ children, ...props }) => {
  return <MuiGrid {...props}>{children}</MuiGrid>;
};
Grid.propTypes = {
  children: PropTypes.node,
};
export default Grid;
