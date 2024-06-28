import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
	useGetTaskDetailsQuery,
	usePostQuestionMutation,
} from "/src/store/apiSlice";
import { Stack } from "components/atoms";
import TaskDescriptionCard from "components/organisms/TaskDescriptionCard";
import TaskAttributesCard from "components/organisms/TaskAttributesCard";
import { useSelector } from "react-redux";
import TaskQuotesAndQuestions from "../organisms/TaskQuotesAndQuestions/TaskQuotesAndQuestions";
import LoadingSpinner from "components/molecules/LoadingSpinner";
import { selectUserId } from "src/store/authSlice";
import { useGetQuotesQuery } from "src/store/apiSlice";
import PageWrapper from "components/molecules/PageWrapper";

const TaskDetails = () => {
	// Hooks
	const { taskId } = useParams();
	const navigate = useNavigate();
	const userId = useSelector(selectUserId);
	const {
		data: taskData,
		isLoading: getTaskDetailsLoading,
		isError,
		refetch,
	} = useGetTaskDetailsQuery(taskId);
	const [isOwner, setIsOwner] = React.useState(false);
	const [isOwnerLoading, setIsOwnerLoading] = React.useState(true);
	console.log("taskData", taskData);
	// useEffect Hook
	React.useEffect(() => {
		setIsOwnerLoading(true);
		if (userId === null) {
			setIsOwner(false);
		} else if (userId && taskData?.postedBy) {
			setIsOwner(userId === taskData?.postedBy);
		}
		setIsOwnerLoading(false);
	}, [userId, taskData?.postedBy]);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	// Get Quotes if authenticated
	const { data: quotes = [], isLoading: getQuotesLoading } =
		isAuthenticated && useGetQuotesQuery(taskId);

	// Calculate offeredAlready
	const offeredAlready = React.useMemo(() => {
		if (!quotes || !isAuthenticated || quotes.length == 0) {
			return false;
		} else {
			return quotes.some((quote) => {
				return quote.userId === userId;
			});
		}
	}, [userId, quotes]);
	// Calculate canMakeOffer
	const canMakeOffer = React.useMemo(() => {
		if (!isAuthenticated || isOwner) return false;
		else return taskData?.status === "open" && !offeredAlready;
	}, [taskData?.status, offeredAlready, isAuthenticated, isOwner]);

	// Calculate isAssignedToCurrentUser
	const isAssignedToCurrentUser = React.useMemo(() => {
		if (!isAuthenticated) return false;
		return taskData?.genieId === userId;
	}, [taskData?.genieId, userId]);
	/* const [postQuestion, { postQuestionLoading }] =
		isAuthenticated && usePostQuestionMutation(); */

	// Functions
	const handleSubmitQuestion = async (e) => {
		e.preventDefault();
		const questionInput = e.target.elements["question-textfield"];
		const question = questionInput.value;
		if (isAuthenticated && question.length > 0) {
			try {
				const response = await postQuestion({
					taskId,
					body: { question },
				});
				if (response.data.newQuestion) {
					// Use a function to update questions array to trigger React Query refetch
					refetch();
					questionInput.value = "";
				}
			} catch (error) {
				console.error("Error posting question. Please try again");
			}
		} else if (!isAuthenticated) {
			alert("Please Sign In to ask question.");
		}
	};

	// Conditional rendering
	if (isError) {
		navigate("/error");
		return;
	}
	if (getTaskDetailsLoading || isOwnerLoading || getQuotesLoading) {
		return <LoadingSpinner />;
	}
	return (
		<PageWrapper maxWidth='md'>
			{/* Task Cancellation Confirmation Modal */}

			<Stack
				sx={{ padding: "1rem 1rem" }}
				gap={1.5}
				component='article'
			>
				<TaskAttributesCard
					taskData={taskData}
					isOwner={isOwner}
					offeredAlready={offeredAlready}
					canMakeOffer={canMakeOffer}
					isAssignedToCurrentUser={isAssignedToCurrentUser}
					quotes={quotes}
					currentUser={userId}
				/>
				{/* Task Description */}
				<TaskDescriptionCard
					description={taskData?.description}
					images={taskData?.images}
				/>
				{/* Task Quotes and Comments */}
				{isOwner && (
					<TaskQuotesAndQuestions
						quotes={quotes}
						// questions={questions}
						isOwner={isOwner}
					/>
				)}
			</Stack>
		</PageWrapper>
	);
};

export default TaskDetails;
