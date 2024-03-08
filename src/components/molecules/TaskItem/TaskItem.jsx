import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Stack,
} from "../../atoms/index.js";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useTheme } from "@mui/material/styles";
import { formatDate } from "../../../utils.jsx";

// TaskItem component
const TaskItem = ({ task }) => {
  const theme = useTheme();
  const iconColor = theme ? theme.palette.textLight?.main : "black";
  const avatarColor = theme ? theme.palette.primary?.light : "purple";
  return (
    <>
      <Card>
        <CardContent>
          <Stack
            direction='row'
            spacing={1}
          >
            {/* Task Title */}
            <Typography
              variant='body'
              component='span'
              sx={{ fontWeight: 500, flexGrow: 1 }}
            >
              {task.title}
            </Typography>
            <Box>
              {/* Task Status */}
              {task.status && (
                <Chip
                  label={task.status}
                  sx={{ textTransform: "capitalize", flexGrow: 0 }}
                  size='small'
                />
              )}
            </Box>
          </Stack>
          <Box sx={{ paddingTop: "0.7rem" }}>
            {/* Task Location */}

            <Stack
              direction='row'
              alignItems='center'
              color='secondary'
            >
              <LocationOnOutlinedIcon
                sx={{
                  color: iconColor,
                  fontSize: "16px",
                  marginRight: "6px",
                }}
              />
              <Typography
                variant='caption'
                component='span'
              >
                {task.locationType === "remote" ? "Remote" : task.locationName}
              </Typography>
            </Stack>

            {/* Date */}
            {task.dateType && (
              <Stack
                direction='row'
                alignItems='center'
              >
                <CalendarMonthOutlinedIcon
                  sx={{
                    color: iconColor,
                    fontSize: "16px",
                    marginRight: "6px",
                  }}
                />
                <Typography
                  variant='caption'
                  component='span'
                >
                  {task.dateType === "flexible"
                    ? "Flexible"
                    : task.dateType === "on"
                    ? `on ${formatDate(task.date)}`
                    : `before ${formatDate(task.date)}`}
                </Typography>
              </Stack>
            )}
          </Box>
          <Divider sx={{ margin: "1rem 0" }} />
          <Stack direction='row'>
            {/* Task Budget */}
            <Typography
              variant='h6'
              component='span'
              sx={{ flexGrow: 1 }}
            >{`₹${task.budget}`}</Typography>
            {/* Posted Avatar */}
            {task.postedBy && (
              <Avatar
                sx={{
                  backgroundColor: avatarColor,
                  width: "30px",
                  height: "30px",
                }}
              >
                {task.postedBy?.charAt(0)}
              </Avatar>
            )}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

// Prop validation for TaskItem component
TaskItem.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    status: PropTypes.string,
    locationType: PropTypes.string,
    locationName: PropTypes.string,
    dateType: PropTypes.string,
    date: PropTypes.string,
    budget: PropTypes.number.isRequired,
    postedBy: PropTypes.string,
  }).isRequired,
};

export default TaskItem;
