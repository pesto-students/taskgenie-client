import { useParams, useNavigate } from "react-router-dom";
import { useGetTaskDetailsQuery } from "/src/store/apiSlice";
import { Stack, Card, CardContent } from "components/atoms";
import TaskDescriptionCard from "components/organisms/TaskDescriptionCard";
import TaskAttributesCard from "components/organisms/TaskAttributesCard";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import MyTaskQuotesAndQuestions from "components/organisms/MyTaskQuotesAndQuestions";
// Todo: Move to components/molecules
const LoadingCard = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Skeleton height={"120px"} />
        </CardContent>
      </Card>
    </>
  );
};
const MyTaskDetails = () => {
  //  Page Title
  document.title = "My Tasks";

  // Hooks
  const userId = useSelector((state) => state.auth.userId);
  const { taskId } = useParams();
  const navigate = useNavigate();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetTaskDetailsQuery(taskId);
  if (!taskId) {
    navigate("/error");
  }
  return (
    <>
      {isLoading ? (
        <Stack
          sx={{ padding: "1rem 1rem" }}
          gap={1}
        >
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </Stack>
      ) : (
        <Stack
          sx={{ padding: "1rem 1rem" }}
          gap={1}
          component='article'
        >
          <TaskAttributesCard
            taskId={taskId}
            title={data?.title}
            status={data?.status}
            dateType={data?.dateType}
            date={data?.date}
            locationType={data?.locationType}
            locationName={data?.locationName}
            budget={data?.budget}
            loading={isLoading}
            isOwner={true}
            userId={userId}
          />
          {/* Task Description */}
          <TaskDescriptionCard
            description={data.description}
            images={data.images}
          />
          {/* Task Quotes and Comments */}
          <MyTaskQuotesAndQuestions
            quotes={data.quotes}
            questions={data.questions}
            currentUser={userId}
            ownerId={data.postedBy}
          />
        </Stack>
      )}
    </>
  );
};

export default MyTaskDetails;
