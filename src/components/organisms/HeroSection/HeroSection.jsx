import { useState } from "react";
import Section from "components/molecules/Section";
import { Box, Typography, Stack, TextField, Button } from "components/atoms";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const HeroSection = () => {
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
  return (
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
  );
};

export default HeroSection;
