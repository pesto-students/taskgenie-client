import { useParams, useNavigate } from "react-router-dom";
import { useGetTaskDetailsQuery } from "/src/store/apiSlice";
import { useTheme } from "@mui/material";
import {
  Card,
  Stack,
  CardContent,
  Chip,
  Box,
  Typography,
} from "components/atoms";
import TaskDescriptionCard from "components/organisms/TaskDescriptionCard";
import TaskDetailAttribute from "components/molecules/TaskDetailAttribute";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import { formatDate, formatAmount } from "../../utils";
import { Divider } from "@mui/material";
const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const { palette } = useTheme();
  const { textLight } = palette;
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
  } = data;

  return (
    <>
      <Stack
        sx={{ padding: "1rem 1rem" }}
        gap={1}
        component='article'
      >
        <Card>
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
            <Divider sx={{ margin: "1rem 0" }} />
            {/* Budget */}
            <Stack
              direction='row'
              gap={3}
            >
              <Box>
                <Typography sx={{ color: textLight.main }}>Budget</Typography>
              </Box>
              <Box>
                <Typography
                  variant='h4'
                  sx={{ fontWeight: "bold" }}
                >
                  {formatAmount(budget)}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        {/* Task Description */}
        <TaskDescriptionCard />
      </Stack>
    </>
  );
};

export default TaskDetails;
