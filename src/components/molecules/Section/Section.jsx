import { PropTypes } from "prop-types";
import { Box } from "components/atoms";
import { styled } from "@mui/material/styles";
const StyledBox = styled(Box)(({ theme }) => {
	return {
		padding: "3.5rem 1rem",
		[theme.breakpoints.up("md")]: {
			padding: "2rem 10rem",
		},
	};
});

const Section = ({ children, ...props }) => {
	return <StyledBox {...props}>{children}</StyledBox>;
};
Section.propTypes = {
	children: PropTypes.node,
};

export default Section;
