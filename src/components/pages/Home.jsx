import { useTheme } from "@mui/material";
import { useState } from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  Stack,
  Grid,
  Card,
} from "components/atoms";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import HouseCleaning from "assets/cleaning-service.svg?react";
import Shopping from "assets/WindowShopping.svg?react";
import OpenSource from "assets/Open-source.svg?react";
import Electrician from "assets/Electrician.svg?react";
import EasySetupImage from "assets/Appinstallation.svg?react";
import TaskGenie from "assets/Taskgenie.svg?react";
import HomeCarousel from "../molecules/HomeCarousel";
import ServiceItem from "components/molecules/ServiceItem";
import TaskGenieStepper from "components/molecules/TaskGenieStepper/TaskGenieStepper";

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
  const Section = styled(Box)(({ theme }) => {
    return {
      padding: "3.5rem 1rem",
      [theme.breakpoints.up("md")]: {
        padding: "3.5 1.5rem",
      },
    };
  });

  return (
    <Container
      maxWidth='md'
      sx={{ padding: 0 }}
    >
      <Section
        className='hero-section'
        component='section'
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& .task-title-form": {
              marginTop: "2rem",
            },

            "& .title-submit": {
              marginTop: "0.7rem",
            },
            // lg screen
            [theme.breakpoints.up("sm")]: {
              flexDirection: "row",
              justifyContent: "center",
              "& .task-title-form": {
                flex: 1,
                flexDirection: "row",
                margin: "0 0 0 15px!important",
                maxWidth: "400px",
              },
            },
          }}
        >
          <Box>
            <Typography variant='h5'>
              Find the right <Typography variant='h4'>taskGenie,</Typography> to
              get work done
            </Typography>
          </Box>
          <Stack
            class='task-title-form'
            direction='column'
          >
            <TextField
              fullWidth
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
              fullWidth
              className='title-submit'
            >
              Post Task
            </Button>
          </Stack>
        </Box>
      </Section>

      {/* Popular Services */}
      <Section
        component='section'
        className='popular-services-section'
      >
        <Box component='header'>
          <Typography variant='h6'>Popular Services</Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={1}
            marginTop='1rem'
          >
            <Grid
              item
              xs={6}
              md={3}
            >
              <ServiceItem
                label={"House Cleaning"}
                image={<HouseCleaning />}
              ></ServiceItem>
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <ServiceItem
                label={"Personal Shopper"}
                image={<Shopping />}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <ServiceItem
                label={"Repairs"}
                image={<Electrician />}
              />
            </Grid>
            <Grid
              item
              xs={6}
              md={3}
            >
              <ServiceItem
                label={"Website"}
                image={<OpenSource />}
              />
            </Grid>
          </Grid>
        </Box>
      </Section>

      {/* Timeline */}
      <Section
        component='section'
        sx={{
          backgroundColor: theme.palette.grey[200],
        }}
      >
        <Typography
          variant='h6'
          sx={{ marginBottom: "16px" }}
        >
          Find genie in 3 easy Steps
        </Typography>
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{
            [theme.breakpoints.up("md")]: {
              flexDirection: "row",
            },
          }}
        >
          <TaskGenieStepper />
          <Box
            sx={{
              width: "15rem",
            }}
          >
            <EasySetupImage />
          </Box>
        </Stack>
      </Section>

      {/* Earn Money */}
      <Section
        component='section'
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
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
      </Section>

      {/* Testimonials */}
      <Section
        component='section'
        className='testimonials-section'
        sx={
          {
            // height: "4rem",
          }
        }
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
      </Section>

      {/* Footer */}
      <Section
        component='footer'
        className='footer'
        sx={{
          backgroundColor: theme.palette.grey[200],
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
      </Section>
    </Container>
  );
};

export default Home;
