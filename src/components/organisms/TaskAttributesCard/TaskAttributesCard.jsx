import React, { useState, useCallback } from "react";
import { Box, Button, CardContent, Typography, Stack } from "components/atoms";
import TaskDetailAttribute from "components/molecules/TaskDetailAttribute";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MakeQuoteModal from "components/molecules/MakeQuoteModal/MakeQuoteModal";
import {
	useTheme,
	Divider,
	IconButton,
	useMediaQuery,
	Tooltip,
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { formatDate, formatAmount } from "src/utils/formatUtils";
import PropTypes from "prop-types";
import { useCancelTaskMutation, useGetUserNameByIdQuery } from "store/apiSlice";
import { useSnackbar } from "notistack";
import { useAddQuoteMutation } from "/src/store/apiSlice";
import ConfirmationModal from "components/molecules/ConfirmationModal";
import TaskStatusChip from "src/components/molecules/TaskStatusChip";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useNavigate } from "react-router-dom";
const StyledCardContent = styled(CardContent)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	".show-more-button": {
		float: "right",
	},
	".attributes": {
		paddingBottom: "1rem",
	},
	[theme.breakpoints.up("md")]: {
		flexDirection: "row",
		position: "relative",
		".attributes": {
			flex: 1,
			paddingBottom: 0,
		},
		".show-more-button": {
			position: "absolute",
			right: 0,
		},
	},
}));
/**
 *
 * Task Attributes Card
 */
const TaskAttributesCard = ({
	taskData,
	isOwner,
	canMakeOffer,
	isAssignedToCurrentUser,
	offeredAlready,
	quotes,
	currentUser,
}) => {
	const {
		_id,
		title,
		postedBy,
		status,
		budget,
		locationType,
		locationName,
		dateType,
		date,
	} = taskData;
	/**
	 * Hooks
	 */
	const navigate = useNavigate();
	const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
	const { palette, breakpoints } = useTheme();
	const greatherThanMd = useMediaQuery(breakpoints.up("sm"));
	const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
	const [cancelModalOpen, setCancelModalOpen] = React.useState(false);
	const [cancelTask, { loading: cancelTaskLoading }] = useCancelTaskMutation();
	const { data: posterName } = useGetUserNameByIdQuery(postedBy);
	const [addQuote, { addQuoteLoading }] = useAddQuoteMutation();
	const { enqueueSnackbar } = useSnackbar();
	const assignedQuote = quotes.filter(
		(quote) => quote._id === taskData?.acceptedQuote
	)[0];
	const { data: genieName, isLoading: genieNameLoading } =
		useGetUserNameByIdQuery(assignedQuote?.userId);
	/**
	 * Variables
	 */
	const { textLight } = palette;
	/**
	 * Functions
	 */
	const handleDialogOpen = () => {
		setQuoteDialogOpen(!quoteDialogOpen);
	};

	const handleSubmitQuote = useCallback(async (formdata) => {
		if (formdata.message) {
			const response = await addQuote({ taskid: _id, body: formdata });
			if (response.error) {
				enqueueSnackbar("unable to process! please wait", { variant: "error" });
			} else {
				enqueueSnackbar("quote submitted", { variant: "info" });
			}

			window.location.reload();
		}
		setQuoteDialogOpen(false);
	}, []);

	const handleTaskModalClose = useCallback(async (shouldCancel) => {
		if (shouldCancel) {
			const taskId = taskData._id;
			await cancelTask(taskId);
			window.location.reload();
		}
		setCancelModalOpen(false);
		setMenuAnchorEl(null);
	}, []);

	const currentQuote = quotes.filter(
		(quote) => quote.userId === currentUser
	)[0];
	const handleMenuOpen = (event) => {
		setMenuAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setMenuAnchorEl(null);
	};
	const handleEditTask = () => {
		navigate(`/myTasks/${_id}/edit`);
	};
	const handleCloseTask = () => {
		setCancelModalOpen(true);
	};
	return (
		<>
			<ConfirmationModal
				open={cancelModalOpen}
				title={"Cancel Task?"}
				message={"Are you sure you want to Cancel this task? "}
				handleClose={handleTaskModalClose}
			/>
			<MakeQuoteModal
				open={quoteDialogOpen}
				onDialogClose={handleSubmitQuote}
				budget={budget}
			/>
			<Box
				sx={{
					padding: "1rem",
					[breakpoints.up("sm")]: {
						padding: "1rem",
					},
				}}
			>
				<Stack
					direction='row'
					justifyContent='space-between'
				>
					<TaskStatusChip status={status} />
					{isOwner && status !== "cancelled" && (
						<Box>
							{/* Show show just the text not the icon button on screens smaller than md */}
							{greatherThanMd ? (
								<Box>
									{status === "open" && (
										<Tooltip title='Edit Task'>
											<IconButton onClick={handleEditTask}>
												<EditOutlinedIcon />
											</IconButton>
										</Tooltip>
									)}
									<Tooltip title='Delete Task'>
										<IconButton color='error'>
											<DeleteForeverOutlinedIcon />
										</IconButton>
									</Tooltip>
								</Box>
							) : (
								<IconButton onClick={handleMenuOpen}>
									<MoreVertOutlinedIcon />
									{/*  Task Owner Options*/}
									<Menu
										anchorEl={menuAnchorEl}
										open={menuAnchorEl !== null}
										onClose={handleMenuClose}
									>
										{status == "open" && (
											<MenuItem onClick={handleEditTask}>
												<ListItemIcon>
													<EditOutlinedIcon />
												</ListItemIcon>
												<ListItemText>Edit Task</ListItemText>
											</MenuItem>
										)}

										<MenuItem onClick={handleCloseTask}>
											<ListItemIcon>
												<DeleteForeverOutlinedIcon />
											</ListItemIcon>
											<ListItemText>Cancel Task</ListItemText>
										</MenuItem>
									</Menu>
								</IconButton>
							)}
						</Box>
					)}
				</Stack>
				<StyledCardContent>
					<Box className='attributes'>
						{/* Title */}
						<Typography
							variant='h6'
							sx={{ margin: "0.8rem 0.5rem" }}
						>
							{title}
						</Typography>
						<Box>
							{/* Task Owner */}
							<TaskDetailAttribute
								label={"Task Owner"}
								icon={<Person2OutlinedIcon sx={{ fontSize: "1.2rem" }} />}
								value={posterName}
							/>
							{/* Location */}
							<TaskDetailAttribute
								label={"Location"}
								icon={<LocationOnOutlinedIcon sx={{ fontSize: "1.2rem" }} />}
								value={locationType === "remote" ? "Remote" : locationName}
							/>
							{/* Date */}
							<TaskDetailAttribute
								label={"Date"}
								icon={<CalendarMonthOutlinedIcon sx={{ fontSize: "1.2rem" }} />}
								value={
									dateType === "in" || dateType === "on"
										? `${dateType} ${formatDate(date)}`
										: "Flexible"
								}
							/>
						</Box>
					</Box>
					<Divider
						orientation='horizontal'
						flexItem
					/>
					<Divider
						orientation='vertical'
						flexItem
					/>
					{/* Budget and Task Action */}
					<Stack
						direction='column'
						gap={3}
						justifyContent='center'
						alignItems='center'
						className='budget-action-wrapper'
						sx={{ padding: "1rem" }}
					>
						{/*  Budget */}
						<Stack
							direction='row'
							gap={3}
							justifyContent='center'
							sx={{ alignItems: "center" }}
						>
							<Box className='task-budget'>
								<Typography sx={{ color: textLight.main }}>Budget</Typography>
							</Box>
							<Box
								sx={{
									margin: "0 auto",
									alignSelf: "center",
								}}
							>
								<Typography
									variant='h4'
									sx={{
										fontWeight: "bold",
									}}
								>
									{formatAmount(budget)}
								</Typography>
							</Box>
						</Stack>
						{isOwner && assignedQuote && (
							<Box>
								<Stack>
									<Typography variant='caption'>
										Assigned to <b style={{ color: "#8659d3" }}>{genieName}</b>
									</Typography>
									<Typography variant='caption'>
										{`Agreed budget `}
										<b style={{ color: "#8659d3" }}>₹{assignedQuote?.price}</b>
									</Typography>
								</Stack>
							</Box>
						)}
						{/* Show only if user can make an offer */}
						{canMakeOffer && (
							<Stack>
								<Box>
									<Button
										sx={{ margin: "0 auto" }}
										onClick={handleDialogOpen}
										loading={addQuoteLoading}
									>
										Make a Quote
									</Button>
								</Box>
							</Stack>
						)}
						{offeredAlready && (
							<Box
								sx={{
									backgroundColor: "#e0f2f1",
									color: "#00796b",
									borderRadius: "10px",
									padding: "1rem 3rem",
								}}
							>
								{!isAssignedToCurrentUser ? (
									<Box>
										<Stack gap={1}>
											<Box>
												<Typography>
													<b>Your Message</b>
												</Typography>
												<Typography variant='body2'>
													{currentQuote.message}
												</Typography>
											</Box>
											<Box>
												<Typography>
													<b>You Quoted</b>
												</Typography>
												<Typography>{currentQuote.price}</Typography>
											</Box>
											<Button
												variant='outlined'
												color='error'
												size='small'
											>
												Delete
											</Button>
										</Stack>
									</Box>
								) : (
									<Stack gap={1}>
										<Typography variant='body2'>Assigned to you</Typography>
										<Typography variant='body2'>
											Accepted Price <b>2400</b>
										</Typography>
										<Box
											sx={{ textAlign: "center", display: "flex", gap: "8px" }}
										>
											<Button
												variant='outlined'
												color='error'
												size='small'
											>
												Cancel
											</Button>
											<Button size='small'>Complete</Button>
										</Box>
									</Stack>
								)}
							</Box>
						)}
					</Stack>
				</StyledCardContent>
			</Box>
		</>
	);
};
// Prop validation
TaskAttributesCard.propTypes = {
	taskData: PropTypes.shape({
		_id: PropTypes.string,
		title: PropTypes.string,
		userId: PropTypes.string,
		status: PropTypes.string,
		budget: PropTypes.number,
		locationType: PropTypes.string,
		locationName: PropTypes.string,
		dateType: PropTypes.string,
		date: PropTypes.string,
	}).isRequired,
	// postedBy: PropTypes.string,
	canMakeOffer: PropTypes.bool,
	isOwner: PropTypes.bool,
	isAssignedToCurrentUser: PropTypes.bool,
	offeredAlready: PropTypes.bool,
};

export default TaskAttributesCard;
