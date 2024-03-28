import PropTypes from "prop-types";
import { Link } from "@mui/material";

const NavLink = ({ children, ...props }) => {
  return (
    <Link
      sx={{ cursor: "pointer", textDecoration: "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavLink;
