import { useTheme } from "@mui/material";
import { Box, Container, Button, Typography, Stack } from "components/atoms";
import Section from "components/molecules/Section";
import DoneIcon from "@mui/icons-material/Done";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EasySetupImage from "assets/Appinstallation.svg?react";
import TaskGenieImage from "assets/Taskgenie.svg?react";
import HomeCarousel from "../molecules/HomeCarousel";
import TaskGenieStepper from "components/molecules/TaskGenieStepper/TaskGenieStepper";
import HeroSection from "components/organisms/HeroSection/HeroSection";
import { useNavigate } from "react-router-dom";
import PopularServices from "components/organisms/PopularServices/PopularServices";
const Home = () => {
  const theme = useTheme();
  const navigateTo = useNavigate();
  const handleFindTask = () => {
    navigateTo("/tasks");
  };

  return (
    <Container
      maxWidth='md'
      sx={{ padding: 0 }}
    >
      <HeroSection />
      {/* Popular Services */}
      <PopularServices />
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
        <Box sx={{ marginTop: "1rem" }}>
          <Typography variant='body1'>
            Unleash your skills, whether you're a spreadsheet genius or a
            skilled carpenter, by discovering your next gig on our platform.
          </Typography>
        </Box>
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
        <Box>
          <TaskGenieImage />
        </Box>
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
