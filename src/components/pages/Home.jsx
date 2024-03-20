import { useTheme } from "@mui/material";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Grid,
  Card,
} from "components/atoms";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import HouseCleaning from "assets/cleaning-service.svg?react";
import Shopping from "assets/Eco-shopping.svg?react";
import OpenSource from "assets/Open-source.svg?react";
import Electrician from "assets/Electrician.svg?react";
import TaskGenie from "assets/Taskgenie.svg?react";
import HomeCarousel from "../molecules/HomeCarousel";

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
    navigateTo(`/postTask?title=${encodeURIComponent(taskTitle)}`);
  };

  const handleFindTask = () => {
    navigateTo("/tasks");
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

      {/* Popular Services */}
      {/* TODO :  size of svgs */}
      <Box
        component='section'
        className='popular-services-section'
        sx={{ padding: sectionPadding }}
      >
        <Box component='header'>
          <Typography variant='h6'>Popular Services</Typography>
        </Box>
        <Box sx={{ display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",}}>
          <Grid
            container
            spacing={2}
            marginTop='1rem'
          >
            <Grid
              item
              xs={6}
            >
              <div
                className={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant='subheading 1' sx={{ textAlign: 'center', mb: 2 }}>House Cleaning</Typography>
                <Box>
                  <HouseCleaning />
                </Box>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div
                className={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin:'auto',
                }}
              >
                <Typography variant='subheading 1' sx={{ textAlign: 'center', mb: 2 }}>
                  Website Development
                </Typography>
                <Box>
                  <OpenSource />
                </Box>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div
                className={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant='subheading 1' sx={{ textAlign: 'center', mb: 2 }}>Shopping</Typography>
                <Box>
                  <Shopping />
                </Box>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div
                className={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant='subheading 1' sx={{ textAlign: 'center', mb: 2 }}>
                  Electrical Repairs
                </Typography>
                <Box>
                  <Electrician />
                </Box>
              </div>
              
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Timeline */}
      <Box
        component='section'
        sx={{
          backgroundColor: theme.palette.grey[200],
          padding: sectionPadding,
        }}
      >
        <Typography variant='h6'>Find genie in 3 easy Steps</Typography>
        <Stack direction='column'>
          <Typography variant='subtitle'>Step 1</Typography>
          <Typography variant='subtitle'>Step 2</Typography>
          <Typography variant='subtitle'>Step 3</Typography>
        </Stack>
      </Box>

      {/* Earn Money */}
      <Box
        component='section'
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          padding: sectionPadding,
        }}
      >
        <Typography variant='h5'>
          Become a TaskGenie,
          <Typography variant='h5'>And Earn with flexibility.</Typography>
        </Typography>
        <Stack
          sx={{ marginTop: "1rem" }}
          direction='column'
          gap={1}
        >
          <Typography variant='body1'>
            Unleash your skills, whether you're a spreadsheet genius or a
            skilled carpenter, by discovering your next gig on our platform.
          </Typography>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          gap={1}
          marginTop='1rem'
        >
          <Typography variant='body1'>
            <DoneIcon />
          </Typography>
          <Typography variant='body1'>
            Enjoy free access to a plethora of job opportunities
          </Typography>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          gap={1}
        >
          <Typography variant='body1'>
            <DoneIcon />
          </Typography>
          <Typography variant='body1'>
            No subscription or credit fees—just straightforward access
          </Typography>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          gap={1}
        >
          <Typography variant='body1'>
            <DoneIcon />
          </Typography>
          <Typography variant='body1'>
            Earn additional income at your own pace
          </Typography>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          gap={1}
        >
          <Typography variant='body1'>
            <DoneIcon />
          </Typography>
          <Typography variant='body1'>
            Expand your business and clientele with ease
          </Typography>
        </Stack>
        <TaskGenie />

        <Stack
          sx={{ marginTop: "1rem" }}
          direction='column'
          gap={1}
        >
          <Button
            variant='outlined'
            sx={{ backgroundColor: "white" }}
            onClick={handleFindTask}
          >
            Earn money as Task Genie
          </Button>
        </Stack>
      </Box>

      {/* Testimonials */}
      <Box
        component='section'
        className='testimonials-section'
        sx={{
          padding: sectionPadding,
          // height: "4rem",
        }}
      >
        <Box>
          <Typography variant='h5'>Testimonials</Typography>
        </Box>
        <Box>
          <Stack
            sx={{ marginTop: "1rem" }}
            direction='column'
            gap={1}
          >
            <HomeCarousel />
          </Stack>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component='footer'
        className='footer'
        sx={{
          backgroundColor: theme.palette.grey[200],
          padding: sectionPadding,
        }}
      >
        <Box>
          <Stack direction='column'>
            <Typography variant='subtitle'>Terms and Conditions</Typography>
            <Typography variant='subtitle'>FAQ</Typography>
            <Typography variant='subtitle'>Community Guidelines</Typography>
            <Typography variant='subtitle'>Contact Us</Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant='h5'>TaskGenie</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{ marginTop: "1rem" }}
            direction='row'
          >
            <GitHubIcon sx={{ marginRight: "0.5rem" }} />
            <InstagramIcon sx={{ marginRight: "0.5rem" }} />
            <TwitterIcon />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
