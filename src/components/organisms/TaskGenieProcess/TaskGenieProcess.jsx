import EasySetupImage from "assets/Appinstallation.svg?react";
import TaskGenieStepper from "components/molecules/TaskGenieStepper/TaskGenieStepper";
import { Typography, Stack, Box } from "components/atoms";
import Section from "components/molecules/Section";
import { useTheme } from "@mui/material";
const TaskGenieProcess = () => {
	const theme = useTheme();
	return (
		<Section
			component='section'
			sx={{
				backgroundColor: theme.palette.grey[200],
			}}
		>
			<Typography
				variant='h6'
				sx={{ marginBottom: "16px", textAlign: "center" }}
			>
				Find genie in 3 easy Steps
			</Typography>
			<Stack
				gap={2}
				sx={{
					[theme.breakpoints.up("md")]: {
						flexDirection: "row",
					},
				}}
				alignItems='center'
			>
				<TaskGenieStepper />
				<Box
					sx={{
						width: "15rem",
						[theme.breakpoints.up("md")]: {
							width: "12rem",
							alignSelf: "center",
						},
					}}
				>
					<EasySetupImage />
				</Box>
			</Stack>
		</Section>
	);
};

export default TaskGenieProcess;
