import {
  Card,
  Box,
  Chip,
  CardActions,
  Button,
  CardContent,
  Typography,
  Stack,
} from "components/atoms";
import TaskDetailAttribute from "components/molecules/TaskDetailAttribute";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useTheme } from "@mui/material";
import { formatDate, formatAmount } from "/src/utils.jsx";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";
const TaskAttributesCard = ({
  title,
  status,
  budget,
  locationType,
  locationName,
  dateType,
  date,
  postedBy,
  canMakeOffer = false,
  onToggleDialog,
  loading = false,
  hasQuoted = false,
}) => {
  const { palette } = useTheme();
  const { textLight } = palette;
  return (
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
              value={locationType === "remote" ? "Remote" : locationName}
            />
            {/* Date */}
            <TaskDetailAttribute
              label={"Date"}
              icon={<CalendarMonthOutlinedIcon sx={{ fontSize: "1.2rem" }} />}
              value={
                dateType === "in" || dateType === "on"
                  ? `${dateType} ${formatDate(date)}`
                  : "Flexible"
              }
            />
            {/* Assignee */}
            <TaskDetailAttribute
              label={"TaskGenie"}
              icon={<Person2OutlinedIcon sx={{ fontSize: "1.2rem" }} />}
              value={locationName}
            />
          </Box>
        </Box>
        <Divider />
        {/* Budget */}
        <Stack
          direction='row'
          gap={3}
          justifyContent='center'
          sx={{ alignItems: "center" }}
        >
          <Box sx={{ position: "absolute", left: 40 }}>
            <Typography sx={{ color: textLight.main }}>Budget</Typography>
          </Box>
          <Box
            sx={{
              margi: "0 auto",
              alignSelf: "center",
            }}
          >
            <Typography
              variant='h4'
              sx={{
                fontWeight: "bold",
              }}
            >
              {formatAmount(budget)}
            </Typography>
          </Box>
        </Stack>
        {hasQuoted && (
          <Box
            sx={{
              backgroundColor: palette.primary.light,
              borderRadius: "12px",
              padding: "1.5rem 1rem",
              marginTop: "1rem",
            }}
          >
            <Typography
              variant='caption'
              sx={{ color: "white" }}
            >
              You have already Quoted
            </Typography>
          </Box>
        )}

    
      </CardContent>
    </Card>
  );
};
// Default props
TaskAttributesCard.defaultProps = {
  title: "",
  status: "",
  budget: 0,
  locationType: "",
  locationName: "",
  dateType: "",
  date: "",
  postedBy: "",
};
// Prop validation
TaskAttributesCard.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  budget: PropTypes.number,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  dateType: PropTypes.string,
  date: PropTypes.string,
  // postedBy: PropTypes.string,
  canMakeOffer: PropTypes.bool,
};

export default TaskAttributesCard;
