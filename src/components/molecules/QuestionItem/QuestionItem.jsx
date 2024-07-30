import { useState } from "react";
import { Avatar, Divider } from "@mui/material";
import { Box, Stack, Typography, Button, TextField } from "components/atoms";
import { useTheme } from "@mui/material";
import { useReplyToQuestionMutation } from "/src/store/apiSlice";
import { useParams } from "react-router-dom";

const QuestionItem = ({ question, canReply = false }) => {
	const theme = useTheme();
	const [replyToQuestion, { replyLoading, error }] =
		useReplyToQuestionMutation();
	const [showReplyTextField, setshowReplyTextField] = useState(false);
	const { taskId } = useParams();
	const { _id, name, userId, reply, message } = question;
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
					>
						R
					</Avatar>
					<Typography
						variant={"caption"}
						sx={{ fontSize: "0.7rem" }}
					>
						{"Ravi"}
					</Typography>
				</Stack>

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
						<Button
							variant='text'
							size='small'
							color='error'
						>
							Delete
						</Button>
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
