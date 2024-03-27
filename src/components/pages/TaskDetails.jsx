import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useGetTaskDetailsQuery,
  usePostQuestionMutation,
} from "/src/store/apiSlice";
import {
  Stack,
  Card,
  CardContent,
  Box,
  Typography,
  TextField,
  Button,
} from "components/atoms";
import TaskQuoteActionCard from "components/organisms/TaskQuoteActionCard/TaskQuoteActionCard";
import TaskDescriptionCard from "components/organisms/TaskDescriptionCard";
import TaskAttributesCard from "components/organisms/TaskAttributesCard";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import TaskQuotesAndQuestions from "../organisms/TaskQuotesAndQuestions/TaskQuotesAndQuestions";
const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userId = useSelector((state) => state.auth.userId);
  const { data, isLoading, isError, refetch } = useGetTaskDetailsQuery(taskId);
  const [postQuestion, { postQuestionLoading }] = usePostQuestionMutation();

  if (isError) {
    navigate("/error");
  }
  if (isLoading) {
    return <div>Loading.. .</div>;
  }
  const {
    title,
    status,
    // Todo: correct postedBy in backend
    postedBy,
    locationType,
    locationName,
    dateType,
    date,
    description,
    budget,
    questions,
    quotes,
    acceptedQuote,
  } = data;

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
  return (
    <>
      <Stack
        sx={{ padding: "1rem 1rem" }}
        gap={1.5}
        component='article'
      >
        <TaskAttributesCard
          title={title}
          status={status}
          dateType={dateType}
          date={date}
          locationType={locationType}
          locationName={locationName}
          budget={budget}
        />
        {/* Task Quote Action */}
        <TaskQuoteActionCard
          taskId={taskId}
          userId={userId}
          quotes={quotes}
          acceptedQuote={acceptedQuote}
          budget={budget}
        />
        {/* Task Description */}
        <TaskDescriptionCard description={description} />
        {/* Task Quotes and Comments */}
        <TaskQuotesAndQuestions
          quotes={quotes}
          questions={questions}
          currentUser={userId}
          ownderId={postedBy}
        />
      </Stack>
    </>
  );
};

export default TaskDetails;
