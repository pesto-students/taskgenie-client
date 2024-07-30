import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useTheme, Box, Tabs, Tab } from "@mui/material";
import { Typography, Link, TextField, Button } from "src/components/atoms";
import TabPanel from "src/components/molecules/TabPanel";
import QuoteItem from "components/molecules/QuoteItem/QuoteItem";
import EmptyList from "assets/emptyList.svg?react";
import ConfirmationModal from "components/molecules/ConfirmationModal";
import {
	useGetQuestionsQuery,
	useAcceptQuoteMutation,
	usePostQuestionMutation,
} from "src/store/apiSlice";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "src/components/molecules/LoadingSpinner";
import QuestionItem from "src/components/molecules/QuestionItem";
function TaskQuotesAndQuestions({
	quotes = [],
	canAskQuestion,
	isOwner,
	taskStatus,
	taskId,
	acceptedQuote,
}) {
	const theme = useTheme();
	const [quoteConfirmationOpen, setQuoteConfirmationOpen] =
		React.useState(false);
	const [currentTab, setCurrentTab] = useState(0);
	const [selectedQuoteId, setSelectedQuoteId] = useState(null);
	const [genieName, setGenieName] = useState("");
	const location = useLocation();
	const selectedQuote = React.useMemo(() => {
		return quotes.filter((quote) => quote._id === selectedQuoteId)[0];
	}, [selectedQuoteId]);
	const {
		data: questions = [],
		isLoading: getQuestionsLoading,
		refetch: refetchQuestions,
	} = useGetQuestionsQuery(taskId);
	const [acceptQuote, { isLoading: acceptQuoteLoading }] =
		useAcceptQuoteMutation();
	const [postQuestion, { isLoading: postQuestionLoading }] =
		usePostQuestionMutation();
	const handleQuoteItemClicked = (quoteId, genieName) => {
		setGenieName(genieName);
		setSelectedQuoteId(quoteId);
		setQuoteConfirmationOpen(true);
	};
	const handleConfirmationModalClose = useCallback(async (shouldMakeQuote) => {
		if (shouldMakeQuote) {
			await acceptQuote({
				taskId,
				selectedQuoteId,
			});
		}
		setQuoteConfirmationOpen(false);
		window.location.reload();
	}, []);

	const handleTabChange = (_, newValue) => {
		setCurrentTab(newValue);
	};
	const handleQuestionFormSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const question = formData.get("question");
		if (question) {
			await postQuestion({ taskId, question });
			form.reset();
			refetchQuestions();
		}
	};
	const currentPath = location.pathname;
	return (
		<>
			<ConfirmationModal
				open={quoteConfirmationOpen}
				handleClose={handleConfirmationModalClose}
				title={`Do you want to accept quote by ${genieName} for Rs ${selectedQuote?.price}?`}
				message={selectedQuote?.message}
				loading={acceptQuoteLoading}
			/>
			<Box
				sx={{
					borderRadius: "12px",
					[theme.breakpoints.up("sm")]: {
						padding: "1rem",
					},
				}}
			>
				{/* TODO: Tabs here */}
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={currentTab}
						onChange={handleTabChange}
						aria-label='basic tabs example'
					>
						<Tab label='questions' />
						{isOwner && <Tab label='Offers' />}
					</Tabs>
				</Box>
				<TabPanel
					value={currentTab}
					index={0}
				>
					{/* TODO: Questions */}
					<Box>
						{/* Need to be authenticated to be able to ask questions */}
						{canAskQuestion ? (
							<Box>
								{/* Question form */}

								<form onSubmit={handleQuestionFormSubmit}>
									<Typography variant='caption'>
										Ask anything related to task here
									</Typography>
									<Box
										sx={{
											marginTop: "0.5rem",
											width: "100%",
											display: "flex",
											gap: "1rem",
											alignItems: "center",
										}}
									>
										<TextField
											name='question'
											size='small'
											multiline
											maxRows={3}
											inputProps={{ maxLength: 200 }}
											sx={{ flex: 1 }}
										/>
										<Button
											loading={postQuestionLoading}
											type='submit'
											variant='outlined'
										>
											Submit
										</Button>
									</Box>
								</form>
							</Box>
						) : (
							<Typography>
								you need to{" "}
								<Link
									href={`/signIn?redirect=${encodeURIComponent(currentPath)}`}
								>
									sign in
								</Link>{" "}
								to ask questions
							</Typography>
						)}
						<Box>
							{getQuestionsLoading ? (
								<div>
									<LoadingSpinner />
								</div>
							) : (
								<Box>
									{questions.length > 0 && (
										<Box sx={{ padding: "1rem" }}>
											{questions.map((question) => (
												<QuestionItem
													key={question._id}
													question={question}
												/>
											))}
										</Box>
									)}
								</Box>
							)}
						</Box>
					</Box>
				</TabPanel>
				<TabPanel
					value={currentTab}
					index={1}
				>
					{/* TODO: Offers */}
					<Box>
						{isOwner && (
							<Box>
								{/* show questions here */}
								{quotes.length > 0 ? (
									<Box sx={{ margin: "1rem" }}>
										{quotes.map((quote) => (
											<QuoteItem
												key={quote._id}
												quote={quote}
												isAssigned={quote._id === acceptedQuote}
												onClick={(genieName) => {
													taskStatus !== "assigned" &&
														handleQuoteItemClicked(quote._id, genieName);
												}}
											/>
										))}
									</Box>
								) : (
									<Box
										sx={{
											display: "flex",
											justifContent: "center",
											alignItems: "center",
											flexDirection: "column",
										}}
									>
										<Box sx={{ width: "120px" }}>
											<EmptyList />
										</Box>
										<Typography variant='caption'>No quotes yet!</Typography>
									</Box>
								)}
							</Box>
						)}
					</Box>
				</TabPanel>
			</Box>
		</>
	);
}

TaskQuotesAndQuestions.propTypes = {
	questions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			message: PropTypes.string.isRequired,
			reply: PropTypes.string,
		})
	),
	quotes: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
		})
	),
	isOwner: PropTypes.bool,
};

export default TaskQuotesAndQuestions;
