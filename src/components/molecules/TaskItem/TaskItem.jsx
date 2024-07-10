import React from "react";
import PropTypes from "prop-types";
// External Imports
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
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
								{task.locationType === "remote" ? "Remote" : task.locationName}
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
					</Box>
					<Divider sx={{ margin: "1rem 0" }} />
					<Stack direction='row'>
						{/* Task Budget */}
						<Typography
							variant='h6'
							component='span'
							sx={{ flexGrow: 1 }}
						>
							{formatAmount(task.budget)}
						</Typography>
						{/* Posted Avatar */}
						{task.postedBy && (
							<Avatar
								sx={{
									backgroundColor: avatarColor,
									width: "30px",
									height: "30px",
								}}
							>
								{posterName?.charAt(0)}
							</Avatar>
						)}
						<div>{posterName}</div>
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
