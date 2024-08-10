import PropTypes from "prop-types";
import {
	Card,
	CardContent,
	Typography,
	Box,
	useTheme,
	Stack,
	Divider,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function TestimonialCard({ testimonial, name, ...props }) {
	const theme = useTheme();
	return (
		<Card
			sx={{
				borderRadius: "12px",
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
				margin: "1rem 0",
				height: "20rem",
				width: "15rem",
			}}
			{...props}
		>
			<CardContent
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box sx={{ padding: "1rem 0", textAlign: "center", flexGrow: 1 }}>
					<Typography variant='body2'>
						<FormatQuoteIcon sx={{ color: theme.palette.primary.main }} />
						{testimonial}
						<FormatQuoteIcon sx={{ color: theme.palette.primary.main }} />
					</Typography>
				</Box>
				<Box sx={{ height: "3rem" }}>
					<Divider />
					<Stack
						alignItems={"center"}
						sx={{ padding: "1rem 0" }}
						gap={1}
					>
						<Typography variant='caption'>{name}</Typography>
					</Stack>
				</Box>
			</CardContent>
		</Card>
	);
}

TestimonialCard.propTypes = {
	testimonial: PropTypes.string,
	name: PropTypes.string,
};

export default TestimonialCard;
