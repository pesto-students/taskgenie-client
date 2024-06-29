import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material";
import QuoteItem from "components/molecules/QuoteItem/QuoteItem";
import EmptyList from "assets/emptyList.svg?react";
import ConfirmationModal from "components/molecules/ConfirmationModal";
import { useAcceptQuoteMutation } from "src/store/apiSlice";
function TaskQuotesAndQuestions({
	quotes = [],
	isOwner,
	taskStatus,
	taskId,
	acceptedQuote,
}) {
	const theme = useTheme();
	const [quoteConfirmationOpen, setQuoteConfirmationOpen] =
		React.useState(false);
	const [selectedQuoteId, setSelectedQuoteId] = useState(null);
	const [genieName, setGenieName] = useState("");
	const selectedQuote = React.useMemo(() => {
		return quotes.filter((quote) => quote._id === selectedQuoteId)[0];
	}, [selectedQuoteId]);
	const [acceptQuote, { isLoading: acceptQuoteLoading }] =
		useAcceptQuoteMutation();
	const handleQuoteItemClicked = (quoteId, genieName) => {
		setGenieName(genieName);
		setSelectedQuoteId(quoteId);
		setQuoteConfirmationOpen(true);
	};
	const handleConfirmationModalClose = async (shouldMakeQuote) => {
		if (shouldMakeQuote) {
			await acceptQuote({
				taskId,
				selectedQuoteId,
			});
		}
		setQuoteConfirmationOpen(false);
		window.location.reload();
	};
	return (
		<>
			<ConfirmationModal
				open={quoteConfirmationOpen}
				handleClose={handleConfirmationModalClose}
				title={`Do you want to accept quote by ${genieName} for Rs ${selectedQuote?.price}?`}
				message={selectedQuote?.message}
				loading={acceptQuoteLoading}
			/>
			<Card
				sx={{
					borderRadius: "12px",
					[theme.breakpoints.up("sm")]: {
						padding: "1rem",
					},
				}}
			>
				<CardContent>
					{isOwner && (
						<Box>
							{/* show questions here */}
							<Typography sx={{ color: theme.palette.textLight.main }}>
								Quotes
							</Typography>
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
				</CardContent>
			</Card>
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
