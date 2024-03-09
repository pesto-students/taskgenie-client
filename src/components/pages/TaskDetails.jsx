import { useParams, useNavigate } from "react-router-dom";
import { useGetTaskDetailsQuery } from "/src/store/apiSlice";
import {
  Card,
  Stack,
  CardContent,
  Chip,
  Box,
  Typography,
} from "components/atoms";
import TaskDetailAttribute from "components/molecules/TaskDetailAttribute";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { formatDate } from "../../utils";

const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetTaskDetailsQuery(taskId);

  console.log(error);
  if (!taskId) {
    navigate("/error");
  }
  if (isLoading) {
    return <div>Loading.. .</div>;
  }
  const {
    title,
    status,
    postedBy,
    locationType,
    locationName,
    dateType,
    date,
    budget,
    description,
  } = data;

  return (
    <>
      <Stack
        sx={{ padding: "1rem 1rem" }}
        gap={1}
      >
        <Card role>
          <CardContent>
            <Box>
              <Box>
                <Chip
                  label={status}
                  size='small'
                />
              </Box>
              {/* Title */}
              <Typography
                variant='h6'
                sx={{ margin: "0.8rem 0.5rem" }}
              >
                {title}
              </Typography>
              <Box>
                {/* Task Owner */}
                <TaskDetailAttribute
                  label={"Task Owner"}
                  icon={<Person2OutlinedIcon sx={{ fontSize: "1.2rem" }} />}
                  value={"Ravi Rathore"}
                />
                {/* Location */}
                <TaskDetailAttribute
                  label={"Location"}
                  icon={<LocationOnOutlinedIcon sx={{ fontSize: "1.2rem" }} />}
                  value={locationName}
                />
                {/* Date */}
                <TaskDetailAttribute
                  label={"Date"}
                  icon={
                    <CalendarMonthOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                  }
                  value={formatDate(date)}
                />
                {/* Assignee */}
                <TaskDetailAttribute
                  label={"TaskGenie"}
                  icon={<Person2OutlinedIcon sx={{ fontSize: "1.2rem" }} />}
                  value={locationName}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
        {/* Task Budget */}
        <Card>
          <CardContent>
            <Typography>Budget</Typography>
            <Box>
              <Typography variant='h4'>{budget}</Typography>
            </Box>
          </CardContent>
        </Card>
        {/* Task Description */}
      </Stack>
    </>
  );
};

export default TaskDetails;
