import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepContent,
  useTheme,
} from "@mui/material";
import { Box } from "components/atoms";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
const steps = [
  {
    label: "Describe the task",
    description:
      "Set the deadline as you want, describe how you want it to be done",
    icon: ArticleOutlinedIcon,
  },
  {
    label: "Set the budget for the task",
    description: "Find the right service for right price. Your money is ",
    icon: CurrencyRupeeOutlinedIcon,
  },
  {
    label: "Get offers and choose the best Task Genie",
    description:
      " Pick the right person for the task based on real ratings and reviews from other users",
    icon: NotificationsActiveOutlinedIcon,
  },
];
const TaskGenieStepper = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "1rem",
        [theme.breakpoints.up("sm")]: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        },
      }}
    >
      <Stepper orientation='vertical'>
        {steps.map((step) => {
          return (
            <Step
              key={step.label}
              active={true}
            >
              <StepLabel
                sx={{ color: theme.palette.primary.main }}
                StepIconComponent={step.icon}
              >
                <Typography variant='subtitle1'>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography variant='body2'>{step.description}</Typography>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default TaskGenieStepper;
