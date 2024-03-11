import { useParams, useNavigate } from "react-router-dom";
import { useGetTaskDetailsQuery } from "/src/store/apiSlice";
import CommentItem from "components/molecules/CommentItem";
import { Stack, Card, CardContent, Typography, Box } from "components/atoms";
import TaskDescriptionCard from "components/organisms/TaskDescriptionCard";
import TaskAttributesCard from "components/organisms/TaskAttributesCard";
import { useTheme } from "@mui/material";
const MyTaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const { data, isLoading } = useGetTaskDetailsQuery(taskId);

  if (!taskId) {
    navigate("/error");
  }
  if (isLoading) {
    return <div>Loading.. .</div>;
  }
  12345667;
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
  } = data;
  return (
    <>
      <Stack
        sx={{ padding: "1rem 1rem" }}
        gap={1}
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
            <Box sx={{ padding: "1.5rem 0rem" }}>
              {questions.map((comment) => (
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  canReply={true}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </>
  );
};

export default MyTaskDetails;
