import { useState } from "react";
import {
	Card,
	Box,
	Button,
	CardContent,
	Typography,
	Stack,
} from "components/atoms";
import TaskDetailAttribute from "components/molecules/TaskDetailAttribute";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MakeQuoteModal from "components/molecules/MakeQuoteModal/MakeQuoteModal";
import { useTheme, Divider, Paper, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { formatDate, formatAmount } from "/src/utils.jsx";
import PropTypes from "prop-types";
import { useCancelTaskMutation, useGetUserNameByIdQuery } from "store/apiSlice";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useAddQuoteMutation } from "/src/store/apiSlice";
/**
 * Action Menu
 */
const TaskMenu = ({ anchorEl, open, handleClose }) => {
	return (
		<Paper>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={handleClose}>
					<Typography
						id='cancel-task'
						variant='caption'
					>
						Cancel Task
					</Typography>
				</MenuItem>
			</Menu>
		</Paper>
	);
};
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
}) => {
	const {
		taskId,
		title,
		userId,
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
	const { palette, breakpoints } = useTheme();
	const [anchorEl, setAnchorEl] = useState(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [cancelTask, { loading, error }] = useCancelTaskMutation();
	const navigate = useNavigate();
	const { data } = useGetUserNameByIdQuery(userId);
	const [addQuote, { addQuoteLoading }] = useAddQuoteMutation();
	const { enqueueSnackbar } = useSnackbar();
	/**
	 * Variables
	 */
	const menuOpen = Boolean(anchorEl);
	const { textLight } = palette;
	/**
	 * Functions
	 */
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = async (event) => {
		setAnchorEl(null);
		if (event.target.id === "cancel-task") {
			try {
				const response = await cancelTask(taskId);
				if (!response.error) {
					navigate("/myTasks");
				}
			} catch (error) {
				console.error(error);
			}
		}
	};
	const handleDialogOpen = () => {
		setDialogOpen(!dialogOpen);
	};

	const handleSubmitQuote = async (formData) => {
		if (formData.message) {
			const response = await addQuote({ taskId, body: formData });
			if (response.error) {
				enqueueSnackbar("Unable to Process! Please wait", { variant: "error" });
			} else {
				enqueueSnackbar("Quote Submitted", { variant: "info" });
			}
		}
		setDialogOpen(false);
	};
	let TaskAction = <div>default View</div>;
	return (
		<>
			<MakeQuoteModal
				open={dialogOpen}
				onDialogClose={handleSubmitQuote}
				budget={budget}
			/>
			<TaskMenu
				anchorEl={anchorEl}
				open={menuOpen}
				handleClose={handleClose}
			/>
			<Card
				sx={{
					[breakpoints.up("sm")]: {
						padding: "2rem",
					},
				}}
			>
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
								value={data?.name}
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
							{status === "assigned" && (
								<TaskDetailAttribute
									label={"TaskGenie"}
									icon={<Person2OutlinedIcon sx={{ fontSize: "1.2rem" }} />}
									value={locationName}
								/>
							)}
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
						{/* TODO: Cancel task2 button by owner. should be open or assigned */}
						{isOwner && (
							<Button
								variant='outlined'
								color='error'
							>
								Cancel Task
							</Button>
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
						{/* TODO: Offered by current user already */}
						{offeredAlready && (
							<Box
								sx={{
									backgroundColor: "#e0f2f1",
									color: "#00796b",
									borderRadius: "10px",
									padding: "1rem 3rem",
								}}
							>
								{isAssignedToCurrentUser ? (
									<Box>
										<Stack gap={1}>
											<Box>
												<Typography>
													<b>Your Message</b>
												</Typography>
												<Typography variant='body2'>
													laren ipsun sfssf safsfsfd sfsdfasfsd ffsdf
												</Typography>
											</Box>
											<Box>
												<Typography>
													<b>You Quoted</b>
												</Typography>
												<Typography>$34,00</Typography>
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
			</Card>
		</>
	);
};
// Prop validation
TaskAttributesCard.propTypes = {
	taskData: PropTypes.shape({
		taskId: PropTypes.string,
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
};

export default TaskAttributesCard;
