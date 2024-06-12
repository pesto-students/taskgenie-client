import PropTypes from "prop-types";
import { Link } from "@mui/material";

const NavLink = ({ children, ...props }) => {
	return (
		<Link
			sx={{
				cursor: "pointer",
				textDecoration: "none",
				"&:hover": {
					color: "#a98be2",
				},
			}}
			{...props}
		>
			{children}
		</Link>
	);
};

NavLink.propTypes = {
	title: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default NavLink;
