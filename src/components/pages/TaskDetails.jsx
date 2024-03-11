import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useGetTaskDetailsQuery,
  usePostQuestionMutation,
} from "/src/store/apiSlice";
import CommentItem from "components/molecules/CommentItem";
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
      console.log("post question", question);
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
        <Card>
          <CardContent>
            <Typography
              sx={{ color: theme.palette.textLight.main, fontSize: "0.8rem" }}
            >
              Need more details? Post here
            </Typography>
            {/* Questions */}
            <Box sx={{ padding: "1.5rem 0" }}>
              {questions.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                />
              ))}
            </Box>
            {/* Ask Question */}
            <Box sx={{ padding: "1rem", borderRadius: "12px" }}>
              <form onSubmit={handleSubmitQuestion}>
                <TextField
                  name='question-textfield'
                  aria-label='question'
                  fullWidth
                  size={"small"}
                  required={true}
                />
                <Button
                  size='small'
                  variant='text'
                  type='submit'
                >
                  Ask Question
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default TaskDetails;
