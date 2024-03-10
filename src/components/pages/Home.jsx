import { useTheme } from "@mui/material";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Grid,
} from "components/atoms";
import { useNavigate } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';
import HouseCleaning from 'assets/cleaning-service.svg?react';
import Shopping from 'assets/Eco-shopping.svg?react';
import OpenSource from 'assets/Open-source.svg?react';
import Electrician from 'assets/Electrician.svg?react';
import TaskGenie from 'assets/Taskgenie.svg?react';

const sectionPadding = "1.5rem 1rem";

const Home = () => {
  const theme = useTheme();
  const [taskTitle, setTaskTitle] = useState("");
  const navigateTo = useNavigate();
  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };
  const handlePostTask = () => {
    // Redirect to /postTask route and pass the taskTitle as a query parameter
    console.log("her");
    navigateTo(`/postTask?title=${encodeURIComponent(taskTitle)}`);
  };
  return (
    <>
      <Box
        className='hero-section'
        component='section'
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          padding: sectionPadding,
        }}
      >
        <Box>
          <Typography variant='h5'>
            Find the right <Typography variant='h4'>taskGenie,</Typography> to
            get work done
          </Typography>
        </Box>
        <Stack
          sx={{ marginTop: "1rem" }}
          direction='column'
          gap={1}
        >
          <TextField
            placeholder='What do you need help with'
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "white",
              },
            }}
            onChange={handleTitleChange}
            value={taskTitle}
          />
          <Button
            variant='contained'
            sx={{ backgroundColor: theme.palette.primary.light }}
            onClick={handlePostTask}
          >
            Post Task
          </Button>
        </Stack>
      </Box>
      <Box
        component='section'
        className='popular-services-section'
        sx={{ padding: sectionPadding }}
      >
        <Box component='header'>
          <Typography variant='h6'>Popular Services</Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={6}
            >
              <div><HouseCleaning/></div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div><OpenSource/></div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div><Shopping/></div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div><Electrician/></div>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        component='section'
        sx={{
          backgroundColor: theme.palette.grey[200],
          padding: sectionPadding,
        }}
      >
        <Typography variant='h6'>Find genie in 3 easy Steps</Typography>
        <Stack direction="column">
          <Typography variant='body1'>Step 1</Typography>
          <Typography variant='body1'>Step 2</Typography>
          <Typography variant='body1'>Step 3</Typography>
        </Stack>
      </Box>
      <Box
        component='section'
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          padding: sectionPadding,
        }}
      >
        <Typography variant='h5'>
          Become a TaskGenie,<Typography variant='h5'>And Earn with flexibility.</Typography>
        </Typography>
        <Stack
          sx={{ marginTop: "1rem" }}
          direction='column'
          gap={1}
        >
        <Typography variant='body1'>
        Unleash your skills, whether you're a spreadsheet genius or a skilled carpenter, by discovering your next gig on our platform.
        </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1} marginTop='1rem'>
        <Typography variant='body1'>
          <DoneIcon />
        </Typography>
        <Typography variant='body1'>Enjoy free access to a plethora of job opportunities</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant='body1'>
          <DoneIcon />
        </Typography>
        <Typography variant='body1'>No subscription or credit fees—just straightforward access</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant='body1'>
          <DoneIcon />
        </Typography>
        <Typography variant='body1'>Earn additional income at your own pace</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant='body1'>
          <DoneIcon />
        </Typography>
        <Typography variant='body1'>Expand your business and clientele with ease</Typography>
      </Stack>
      <TaskGenie/> 
      </Box>
      
    </>
  );
};

export default Home;
