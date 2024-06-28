import { useState } from "react";
import PropTypes from "prop-types";
import QuestionItem from "components/molecules/QuestionItem";
import TabPanel from "components/molecules/TabPanel/TabPanel";
import { Card, CardContent, Typography, Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material";
import QuoteItem from "../../molecules/QuoteItem/QuoteItem";
import EmptyList from "assets/emptyList.svg?react";
function TaskQuotesAndQuestions({ questions = [], quotes = [], isOwner }) {
	const theme = useTheme();
	//  Hooks
	// TODO: add qutestions tab
	const [currentTab, setCurrentTab] = useState(isOwner ? 0 : 1);
	//Variables

	const handleReply = (commentId) => {
		// Implement reply functionality here
	};
	const handleTabChange = (_, newValue) => {
		setCurrentTab(newValue);
	};
	console.log("quote", quotes, "length", quotes.length);
	return (
		<Card
			sx={{
				borderRadius: "12px",
				[theme.breakpoints.up("sm")]: {
					padding: "1rem",
				},
			}}
		>
			<CardContent>
				{/* <Box>
					<Tabs
						value={currentTab}
						onChange={handleTabChange}
					>
						{isOwner && (
							<Tab
								value={0}
								label='Quotes'
							/>
						)}
						<Tab
							value={1}
							label='Questions'
						/>
					</Tabs>
					<TabPanel
						value={currentTab}
						index={0}
					>
						{quotes.length > 0 &&
							quotes.map((quote) => (
								<QuoteItem
									key={quote._id}
									quote={quote}
								/>
							))}
					</TabPanel>
					<TabPanel
						value={currentTab}
						index={1}
					>
						{questions.map((question) => (
							<QuestionItem
								key={question._id}
								canReply={true}
								question={question}
							/>
						))}
					</TabPanel>
				</Box> */}
				{isOwner && (
					<Box>
						{/* show questions here */}
						<Typography sx={{ color: theme.palette.textLight.main }}>
							Quotes
						</Typography>
						{quotes.length > 0 ? (
							<Box>
								{quotes.map((quote) => (
									<QuoteItem
										key={quote._id}
										quote={quote}
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
