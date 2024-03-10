import { useParams, useNavigate } from "react-router-dom";
import { useGetTaskDetailsQuery } from "/src/store/apiSlice";

import { Stack } from "components/atoms";
import TaskDescriptionCard from "components/organisms/TaskDescriptionCard";
import TaskAttributesCard from "components/organisms/TaskAttributesCard";
import TaskCommentsOffersCard from "../organisms/TaskCommentsOffersCard/TaskCommentsOffersCard";
const MyTaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

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
    comments,
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
        <TaskCommentsOffersCard comments={comments} />
      </Stack>
    </>
  );
};

export default MyTaskDetails;
