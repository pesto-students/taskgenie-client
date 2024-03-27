import DoneIcon from "@mui/icons-material/Done";
import TaskGenieImage from "assets/Taskgenie.svg?react";
import Section from "components/molecules/Section";
import { useTheme } from "@mui/material";
import { Box, Typography, Stack, Button } from "components/atoms";
import { useNavigate } from "react-router-dom";

const TaskGenieSection = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const handleFindTask = () => {
    navigateTo("/tasks");
  };

  return (
    <Section
      component='section'
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: "white",
      }}
    >
      <Typography variant='h6'>
        Become a TaskGenie,
        <br />
        And Earn with flexibility.
      </Typography>

      <Stack
        gap={2}
        sx={{
          marginTop: "1rem",
          [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            justifyContent: "space-between",
          },
        }}
        alignItems='center'
      >
        <Box className='taskgenie-benefits'>
          <Typography variant='body2'>
            Unleash your skills, whether you&apos;re a spreadsheet genius
            <br /> or a skilled carpenter, by discovering your next gig on our
            platform.
          </Typography>
          <Stack
            direction='row'
            alignItems='center'
            gap={1}
            marginTop='1rem'
          >
            <Typography variant='body2'>
              <DoneIcon />
            </Typography>
            <Typography variant='body2'>
              Enjoy free access to a plethora of job opportunities
            </Typography>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            gap={1}
          >
            <Typography variant='body2'>
              <DoneIcon />
            </Typography>
            <Typography variant='body2'>
              No subscription or credit fees—just straightforward access
            </Typography>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            gap={1}
          >
            <Typography variant='body2'>
              <DoneIcon />
            </Typography>
            <Typography variant='body2'>
              Earn additional income at your own pace
            </Typography>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            gap={1}
          >
            <Typography variant='body2'>
              <DoneIcon />
            </Typography>
            <Typography variant='body2'>
              Expand your business and clientele with ease
            </Typography>
          </Stack>
        </Box>
        <Box
          className='taskgenie-image'
          sx={{
            width: "15rem",
            [theme.breakpoints.up("sm")]: {
              width: "12rem",
              alignSelf: "flex-end",
            },
          }}
        >
          <TaskGenieImage />
        </Box>
      </Stack>

      <Box sx={{ marginTop: "24px", textAlign: "center" }}>
        <Button
          variant='outlined'
          sx={{
            backgroundColor: "white",
            width: "100%",
            [theme.breakpoints.up("sm")]: {
              width: "40%",
            },
          }}
          onClick={handleFindTask}
        >
          Earn money as Task Genie
        </Button>
      </Box>
    </Section>
  );
};

export default TaskGenieSection;
