import { useState } from "react";
import PropTypes from "prop-types";
import { Divider, IconButton, useMediaQuery, useTheme } from "@mui/material";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Card,
	CardContent,
	Box,
	Typography,
	ImageListItem,
} from "components/atoms";
import ImageList from "@mui/material/ImageList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";

const TaskDescriptionCard = ({ description = "", images = [] }) => {
	const [descriptionExpanded, setDescriptionExpanded] = useState(false);
	const theme = useTheme();
	// Set image list columns
	const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
	const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
	let imageListCols = 2;
	if (isMediumScreen) {
		imageListCols = 6;
	} else if (isSmallScreen) {
		imageListCols = 3;
	}
	return (
		<Card
			sx={{
				[theme.breakpoints.up("sm")]: {
					padding: "1rem",
				},
			}}
		>
			<CardContent>
				<Typography
					variant='subtitle1'
					sx={{ color: theme.palette.textLight.main }}
				>
					Description
				</Typography>
				<Box sx={{ marginTop: "0.5rem", textAlign: "justify" }}>
					{description.length <= 500 ? (
						<Box sx={{ textAlign: "justify" }}>
							<Typography
								variant='body1'
								sx={{ wordBreak: "break-word" }}
							>
								{description}
							</Typography>
						</Box>
					) : (
						<Box>
							<Accordion
								expanded={descriptionExpanded}
								sx={{
									"&.MuiAccordion-root": { border: "none", boxShadow: "none" },
								}}
							>
								<AccordionSummary
									sx={{ display: descriptionExpanded ? "none" : "block" }}
								>
									<Typography
										variant='body1'
										sx={{ wordBreak: "break-word" }}
									>
										{description.substring(0, 500) + "..."}
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography
										variant='body1'
										sx={{ wordBreak: "break-word" }}
									>
										{description}
									</Typography>
								</AccordionDetails>
							</Accordion>
							<IconButton
								onClick={() => {
									setDescriptionExpanded(!descriptionExpanded);
								}}
							>
								{!descriptionExpanded ? (
									<ExpandMoreIcon />
								) : (
									<ExpandLessOutlinedIcon />
								)}
							</IconButton>
						</Box>
					)}
				</Box>
				{images.length > 0 && (
					<Box sx={{ marginTop: "2rem" }}>
						<Typography
							variant='subtitle2'
							sx={{ color: theme.palette.textLight.main }}
						>
							Images
						</Typography>
						<ImageList cols={imageListCols}>
							{images.map((image) => (
								<ImageListItem
									key={image}
									src={image}
								/>
							))}
						</ImageList>
					</Box>
				)}
			</CardContent>
		</Card>
	);
};

TaskDescriptionCard.propTypes = {
	description: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.string),
};

export default TaskDescriptionCard;
