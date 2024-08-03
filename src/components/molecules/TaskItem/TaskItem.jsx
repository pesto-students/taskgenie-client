import React from "react";
import PropTypes from "prop-types";
// External Imports
import { Divider } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useTheme } from "@mui/material/styles";
// Internal Imports
import TaskStatusChip from "components/molecules/TaskStatusChip";
import { formatAmount, formatDate } from "src/utils/formatUtils.js";
import {
	Card,
	CardContent,
	Typography,
	Box,
	Stack,
} from "../../atoms/index.js";
import { useGetUserNameByIdQuery } from "store/apiSlice";
// TaskItem component
const TaskItem = ({ task }) => {
	const theme = useTheme();
	const { data: posterName } = useGetUserNameByIdQuery(task.postedBy);
	const iconColor = theme ? theme.palette.textLight?.main : "black";
	const avatarColor = theme ? theme.palette.primary?.light : "purple";
	return (
		<>
			<Card
				sx={{
					transition: "box-shadow 0.3s", // Add transition for box-shadow
					"&:hover": {
						boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Apply shadow on hover
					},
				}}
			>
				<CardContent>
					<Stack
						direction='row'
						spacing={1}
					>
						{/* Task Title */}
						<Typography
							variant='body'
							component='span'
							sx={{ fontWeight: 500, flexGrow: 1 }}
						>
							{task.title}
						</Typography>
						<Box>
							{/* Task Status */}
							{task.status && <TaskStatusChip status={task.status} />}
						</Box>
					</Stack>

					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='end'
					>
						<Box sx={{ paddingTop: "0.7rem" }}>
							{/* Task Location */}
							<Stack
								direction='row'
								alignItems='center'
								color='secondary'
							>
								<LocationOnOutlinedIcon
									sx={{
										color: iconColor,
										fontSize: "16px",
										marginRight: "6px",
									}}
								/>
								<Typography
									variant='caption'
									component='span'
								>
									{task.locationType === "remote"
										? "Remote"
										: task.locationName}
								</Typography>
							</Stack>
							{/* Date */}
							{task.dateType && (
								<Stack
									direction='row'
									alignItems='center'
								>
									<CalendarMonthOutlinedIcon
										sx={{
											color: iconColor,
											fontSize: "16px",
											marginRight: "6px",
										}}
									/>
									<Typography
										variant='caption'
										component='span'
									>
										{task.dateType === "flexible"
											? "Flexible"
											: task.dateType === "on"
											? `on ${formatDate(task.date)}`
											: `before ${formatDate(task.date)}`}
									</Typography>
								</Stack>
							)}
							{/* Posted BY */}
							{posterName && (
								<Stack
									direction='row'
									alignItems='center'
								>
									{/* TODO: Add profile icon */}
									<PersonOutlineOutlinedIcon
										sx={{
											color: iconColor,
											fontSize: "16px",
											marginRight: "6px",
										}}
									/>
									<Typography
										variant='caption'
										component='span'
									>
										{posterName}
									</Typography>
								</Stack>
							)}
						</Box>
						<Stack
							direction='column'
							alignItems='flex-end'
						>
							<Typography variant='caption'>Budget</Typography>
							<Typography
								variant='h6'
								component='span'
								sx={{ flexGrow: 1 }}
							>
								{formatAmount(task.budget)}
							</Typography>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
		</>
	);
};

// Prop validation for TaskItem component
TaskItem.propTypes = {
	task: PropTypes.shape({
		title: PropTypes.string.isRequired,
		status: PropTypes.string,
		locationType: PropTypes.string,
		locationName: PropTypes.string,
		dateType: PropTypes.string,
		date: PropTypes.string,
		budget: PropTypes.number.isRequired,
		postedBy: PropTypes.string,
	}).isRequired,
};

export default TaskItem;
