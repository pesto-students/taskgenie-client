import { PropTypes } from "prop-types";
import { Box, Typography } from "components/atoms";
import { Paper, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: "1rem",
	textAlign: "center",
	[theme.breakpoints.up("lg")]: {
		background: "color",
	},
	"& svg": {},
	":hover": {
		boxShadow: "0 0 10px 0px #e6e6e6",
	},
}));
const ServiceItem = ({ label, image, ...props }) => {
	return (
		<Link
			href={`/postTask?title=${encodeURIComponent(label)}`}
			sx={{ textDecoration: "none" }}
		>
			<StyledPaper {...props}>
				<Typography variant='body2'>{label}</Typography>
				<Box
					sx={{
						overflow: "hidden",
						margin: "0 auto",
					}}
				>
					{image}
				</Box>
			</StyledPaper>
		</Link>
	);
};
ServiceItem.propTypes = {
	label: PropTypes.string.isRequired,
	image: PropTypes.element,
};
export default ServiceItem;
