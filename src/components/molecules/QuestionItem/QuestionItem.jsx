import { useState, useMemo } from "react";
import { Avatar, Divider, IconButton } from "@mui/material";
import { Box, Stack, Typography, Button, TextField } from "components/atoms";
import { useTheme } from "@mui/material";
import { useReplyToQuestionMutation } from "/src/store/apiSlice";
import { useParams } from "react-router-dom";
import {
	useCloseQuestionMutation,
	useGetUserNameByIdQuery,
} from "src/store/apiSlice";
import { useSelector } from "react-redux";
import { selectUserId } from "src/store/authSlice";
import { timeSince } from "src/utils/formatUtils";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
const QuestionItem = ({
	question,
	onQuestionClose,
	canReply,
	onQuestionReply,
}) => {
	const theme = useTheme();
	const [replyToQuestion, { replyLoading, error }] =
		useReplyToQuestionMutation();
	const [showReplyTextField, setshowReplyTextField] = useState(false);
	const { taskId } = useParams();
	const { _id, name, userId, reply, message, date } = question;
	const currentUser = useSelector(selectUserId);
	const { data: userName, isLoading: userNameLoading } =
		useGetUserNameByIdQuery(userId);
	const [closeQuestion, { isLoading: closeQuestionLoading }] =
		useCloseQuestionMutation();
	const handleSubmitReply = async (event) => {
		event.preventDefault();
		try {
			const formData = new FormData(event.target);
			const reply = formData.get("reply");
			const response = await replyToQuestion({
				taskId,
				questionId: question._id,
				message: reply,
			});
			// clear reply field
			if (response.error) {
				console.error(response.error.data);
			}
			formData.delete("reply");
		} catch (error) {
			console.error(error);
		} finally {
			onQuestionReply();
		}
	};
	const canCloseQuestion = useMemo(() => {
		// If user is owner of this question, then he can close it
		return userId === currentUser;
	}, [userId, currentUser]);
	// only task owner can reply to the question
	const handleQuestionClose = async () => {
		await closeQuestion({ taskId, questionId: _id });
		// Refetch questions
		onQuestionClose();
	};
	const timeSincePosted = useMemo(() => {
		return timeSince(new Date(date));
	}, [date]);
	return (
		<Box
			sx={{
				padding: "0.5rem",
				borderBottom: "1px solid #dee1e6",
				"&:not(:last-child)": {
					marginBottom: "1rem",
				},
			}}
		>
			{/* Question line 1 */}
			<Stack
				direction='row'
				alignItems='center'
			>
				{/* Avatar and Name */}
				{userName && (
					<Stack
						gap={0.5}
						sx={{ minWidth: "60px" }}
					>
						<Avatar
							sx={{
								width: 24,
								height: 24,
								backgroundColor: theme.palette.primary.light,
							}}
						></Avatar>
						<Typography
							variant={"caption"}
							sx={{ fontSize: "0.7rem" }}
						>
							{userName}
						</Typography>
					</Stack>
				)}
				{/* Message */}
				<Box sx={{ flexGrow: 1 }}>
					<Typography variant='body2'>{message}</Typography>
					<Typography variant='caption'>{timeSincePosted}</Typography>
				</Box>

				{canCloseQuestion && (
					<Box>
						{/* <Button
							variant='text'
							size='small'
							color='error'
							onClick={handleQuestionClose}
							loading={closeQuestionLoading}
						>
							Delete
						</Button> */}
						<IconButton
							onClick={handleQuestionClose}
							loading={closeQuestionLoading}
							color='error'
						>
							<DeleteForeverOutlinedIcon />
						</IconButton>
					</Box>
				)}
				{/* Reply Button */}
				{!showReplyTextField && !reply.message && canReply && (
					<Box sx={{ display: "flex" }}>
						<Button
							variant='text'
							size='small'
							onClick={() => {
								setshowReplyTextField((prev) => !prev);
							}}
						>
							Reply
						</Button>
					</Box>
				)}
			</Stack>

			{canReply && !reply.message && showReplyTextField && (
				<Box sx={{ padding: "1rem 0" }}>
					<Box>
						<form onSubmit={handleSubmitReply}>
							<TextField
								size='small'
								required={true}
								fullWidth
								name='reply'
							/>
							<Stack
								direction='row'
								gap={0.5}
								sx={{ marginTop: "0.5rem" }}
							>
								<Button
									size='small'
									variant='text'
									onClick={() => setshowReplyTextField(!showReplyTextField)}
									color='error'
									loading={replyLoading}
								>
									Cancel
								</Button>

								<Button
									size='small'
									variant='text'
									type='submit'
									loading={replyLoading}
								>
									Submit
								</Button>
							</Stack>
						</form>
					</Box>
				</Box>
			)}

			{reply.message && (
				<Box sx={{ marginLeft: "4rem", marginTop: "0.5rem" }}>
					<Stack
						direction='row'
						gap={1}
						alignItems='center'
					>
						<QuestionAnswerOutlinedIcon sx={{ fontSize: "1rem" }} />
						<Typography
							variant='caption'
							sx={{ fontSize: "0.85rem" }}
						>
							{reply.message}
						</Typography>
					</Stack>
				</Box>
			)}
		</Box>
	);
};

export default QuestionItem;
