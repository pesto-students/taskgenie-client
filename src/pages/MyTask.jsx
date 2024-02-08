import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  CircularProgress,
} from "@mui/material";
import React from "react";

const MyTask = () => {
  // Dummy data
  const task = {
    status: "completed",
    title: "Plumbing Repair",
    location: "Electronic City",
    description: `Need a plumber to fix a leaking pipe in the kitchen. The pipe is located under the sink and has been leaking for a few days. The leak is slow, but it's causing water to build up in the cabinet under the sink.
  
    I've tried to fix it myself with some tape, but it didn't work. I think the leak might be coming from a crack in the pipe, but I'm not sure. I'm not very handy with this sort of thing, so I'd prefer if a professional could take a look at it.
  
    I'm usually home in the evenings and on weekends. Please let me know when you'd be able to come and take a look at the pipe. I'm hoping to get this fixed as soon as possible, as I'm worried about the water damage to my cabinet.
  
    Also, if you could give me an estimate for the repair before you start the work, that would be great. I'm on a bit of a tight budget, so I'd like to know what I'm getting into before committing to anything.
  
    Thank you in advance for your help with this. I really appreciate it.`,
    budget: "$100",
    date: "2022-12-31",
  };

  return (
    <Container>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        my={4}
      >
        <Typography
          variant='h6'
          gutterBottom
        >
          Please be patient as we locate a tasker for you
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
        >
          <Card>
            <CardContent>
              <Chip
                label={task.status}
                color={task.status === "completed" ? "success" : "primary"}
              />
              <Typography
                variant='h5'
                component='div'
                gutterBottom
              >
                {task.title}
              </Typography>
              <Typography
                variant='subtitle1'
                color='text.secondary'
                gutterBottom
              >
                {task.location}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                paragraph
              >
                {task.description}
              </Typography>
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
              >
                <Typography
                  variant='body1'
                  color='text.primary'
                >
                  {task.budget}
                </Typography>
                <Box
                  display='flex'
                  alignItems='center'
                >
                  <Typography
                    variant='body1'
                    color='text.primary'
                  >
                    {task.date}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyTask;
