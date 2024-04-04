import { useState } from "react";
import {
  Card,
  Box,
  Chip,
  CardContent,
  Typography,
  Stack,
} from "components/atoms";
import TaskDetailAttribute from "components/molecules/TaskDetailAttribute";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import {
  useTheme,
  Divider,
  IconButton,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import TaskStatusChip from "components/molecules/TaskStatusChip/TaskStatusChip";
import { styled } from "@mui/material/styles";
import { formatDate, formatAmount } from "/src/utils.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";
import { useCancelTaskMutation, useGetUserNameByIdQuery } from "store/apiSlice";
import { useNavigate } from "react-router-dom";

/**
 * Action Menu
 */
const TaskMenu = ({ anchorEl, open, handleClose }) => {
  return (
    <Paper>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography
            id='cancel-task'
            variant='caption'
          >
            Cancel Task
          </Typography>
        </MenuItem>
      </Menu>
    </Paper>
  );
};
const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  ".show-more-button": {
    float: "right",
  },
  ".attributes": {
    paddingBottom: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    position: "relative",
    ".attributes": {
      flex: 1,
      paddingBottom: 0,
    },
    ".show-more-button": {
      position: "absolute",
      right: 0,
    },
  },
}));
/**
 *
 * Task Attributes Card
 */
const TaskAttributesCard = ({
  taskId,
  title,
  userId,
  status,
  budget,
  locationType,
  locationName,
  dateType,
  date,
  isOwner = false,
}) => {
  /**
   * Hooks
   */
  const { palette, breakpoints } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [cancelTask, { loading, error }] = useCancelTaskMutation();
  const navigate = useNavigate();
  const { data } = useGetUserNameByIdQuery(userId);
  /**
   * Variables
   */
  const menuOpen = Boolean(anchorEl);
  const { textLight } = palette;
  /**
   * Functions
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async (event) => {
    setAnchorEl(null);
    if (event.target.id === "cancel-task") {
      try {
        const response = await cancelTask(taskId);
        if (!response.error) {
          navigate("/myTasks");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <TaskMenu
        anchorEl={anchorEl}
        open={menuOpen}
        handleClose={handleClose}
      />
      <Card
        sx={{
          [breakpoints.up("sm")]: {
            padding: "2rem",
          },
        }}
      >
        <StyledCardContent>
          <Box className='attributes'>
            <Box>
              <TaskStatusChip status={status} />
              {isOwner && status !== "cancelled" && (
                <span className='show-more-button'>
                  <IconButton
                    sx={{ padding: 0 }}
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </span>
              )}
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
                value={data?.name}
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
              {status === "assigned" && (
                <TaskDetailAttribute
                  label={"TaskGenie"}
                  icon={<Person2OutlinedIcon sx={{ fontSize: "1.2rem" }} />}
                  value={locationName}
                />
              )}
            </Box>
          </Box>
          <Divider
            orientation='horizontal'
            flexItem
          />
          <Divider
            orientation='vertical'
            flexItem
          />
          {/* Budget */}
          <Stack
            direction='row'
            gap={3}
            justifyContent='center'
            sx={{ alignItems: "center", padding: "1rem" }}
          >
            <Box className='task-budget'>
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
        </StyledCardContent>
      </Card>
    </>
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
  taskId: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
  budget: PropTypes.number,
  locationType: PropTypes.string,
  locationName: PropTypes.string,
  dateType: PropTypes.string,
  date: PropTypes.string,
  // postedBy: PropTypes.string,
  canMakeOffer: PropTypes.bool,
  isOwner: PropTypes.bool,
};

export default TaskAttributesCard;
