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
              <div>xs=8</div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div>xs=4</div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div>xs=4</div>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <div>xs=8</div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
