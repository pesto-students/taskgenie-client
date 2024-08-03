import { useState } from "react";
import Section from "components/molecules/Section";
import { Box, Typography, Stack, TextField, Button } from "components/atoms";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
const HeroSection = () => {
	const theme = useTheme();
	const [taskTitle, setTaskTitle] = useState("");
	const navigateTo = useNavigate();
	const handleTitleChange = (event) => {
		setTaskTitle(event.target.value);
	};
	const handlePostTask = () => {
		// Redirect to /postTask route and pass the taskTitle as a query parameter
		navigateTo(`/postTask?title=${encodeURIComponent(taskTitle)}`);
	};
	const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<Section
			className='hero-section'
			component='section'
			sx={{
				backgroundColor: theme.palette.primary.main,
				color: "white",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					"& .task-title-form": {
						marginTop: "2rem",
					},

					"& .title-submit": {
						marginTop: "0.7rem",
					},
					// lg screen
					[theme.breakpoints.up("sm")]: {
						flexDirection: "row",
						justifyContent: "center",
						paddingTop: "3rem",
						paddingBottom: "3rem",
					},
				}}
			>
				<Box>
					<Typography variant='h5'>
						Find the right <Typography variant='h4'>taskGenie,</Typography> to
						get work done
					</Typography>
				</Box>
				<Stack
					direction='column'
					sx={{
						padding: isSmUp ? "0rem 1rem" : "1rem 0rem",
						flex: 1,
						maxWidth: "400px",
					}}
				>
					{}
					<TextField
						fullWidth
						placeholder='What do you need help with'
						sx={{
							"& .MuiInputBase-root": {
								backgroundColor: "white",
							},
						}}
						onChange={handleTitleChange}
						value={taskTitle}
					/>
					<Button
						variant='contained'
						sx={{ backgroundColor: theme.palette.primary.light }}
						onClick={handlePostTask}
						fullWidth
						className='title-submit'
					>
						Post Task
					</Button>
				</Stack>
			</Box>
		</Section>
	);
};

export default HeroSection;
