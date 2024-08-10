import MuiLink from "@mui/material/Link";
import PropTypes from "prop-types";

const Link = ({ children, ...props }) => {
  return (
    <MuiLink
      underline='none'
      {...props}
    >
      {children}
    </MuiLink>
  );
};

Link.propTypes = {
  children: PropTypes.node,
};

export default Link;
