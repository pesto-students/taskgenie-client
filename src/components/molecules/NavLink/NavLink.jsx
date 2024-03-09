import PropTypes from "prop-types";
import { Link } from "@mui/material";

const NavLink = ({ title }) => {
  return <Link sx={{ textDecoration: "none" }}>{title}</Link>;
};

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavLink;
