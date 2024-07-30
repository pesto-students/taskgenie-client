import { useState, useMemo } from "react";
import { Avatar, Divider } from "@mui/material";
import { Box, Stack, Typography, Button, TextField } from "components/atoms";
import { useTheme } from "@mui/material";
import { useReplyToQuestionMutation } from "/src/store/apiSlice";
import { useParams } from "react-router-dom";
import { useGetUserNameByIdQuery } from "src/store/apiSlice";
import { useSelector } from "react-redux";
import { selectUserId } from "src/store/authSlice";

const QuestionItem = ({ question, canReply = false }) => {
	const theme = useTheme();
	const [replyToQuestion, { replyLoading, error }] =
		useReplyToQuestionMutation();
	const [showReplyTextField, setshowReplyTextField] = useState(false);
	const { taskId } = useParams();
	const { name, userId, reply, message } = question;
	const currentUser = useSelector(selectUserId);
	const { data: userName, isLoading: userNameLoading } =
		useGetUserNameByIdQuery(userId);
	console.log("got username", userName);
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
		}
	};
	const canCloseQuestion = useMemo(() => {
		// If user is owner of this question, then he can close it
		console.log(`userId ${userId},${currentUser}, ${userId === currentUser}`);
		return userId === currentUser;
	}, [userId, currentUser]);
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
				</Box>

				{/* Reply Button */}
				{!showReplyTextField && !reply && (
					<Box>
						<Button
							variant='text'
							size='small'
							onClick={() => {
								setshowReplyTextField((prev) => !prev);
							}}
						>
							Reply
						</Button>
						{canCloseQuestion && (
							<Button
								variant='text'
								size='small'
								color='error'
							>
								Delete
							</Button>
						)}
					</Box>
				)}
			</Stack>

			{canReply && !reply && showReplyTextField && (
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
									variant='outlined'
									onClick={() => setshowReplyTextField(!showReplyTextField)}
									color='error'
								>
									Cancel
								</Button>
								<Button
									size='small'
									variant='text'
									type='submit'
								>
									Submit
								</Button>
							</Stack>
						</form>
					</Box>
				</Box>
			)}

			{reply && (
				<Box sx={{ textAlign: "right" }}>
					<Divider variant='inset' />
					<Box sx={{ padding: "1rem" }}>
						<Typography
							variant='body2'
							sx={{ fontSize: "0.85rem" }}
						>
							{reply}
						</Typography>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default QuestionItem;
