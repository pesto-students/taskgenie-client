import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { HiOutlinePhotograph } from "react-icons/hi";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

const TaskPosting = () => {
  const [isInPerson, setIsInPerson] = useState(false);

  const handleButtonClick = (isInPerson) => {
    setIsInPerson(isInPerson);
  };
  const isMobileView = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container maxWidth='md' >
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
       <Typography
              variant='h1'>Lets find someone to help you!</Typography>
      </Box>

      <Grid
        container
        spacing={3}
      >
        {/* Left Content (Question 1-3) */}
        <Grid
          item
          xs={12}
          md={6}
        >
          <Box marginBottom='20px'>
            <Typography
              variant='h5'
              align='left'
              gutterBottom
            >
              What task do you require assistance with?
            </Typography>
            <TextField
              label={
                <Typography variant='body2'>
                  e.g. Help me clean my car
                </Typography>
              }
              fullWidth
              sx={{ marginBottom: "8px" }}
              variant='outlined'
            />
          </Box>

          <Box marginBottom='20px'>
            <Typography
              variant='h5'
              align='left'
              gutterBottom
            >
              By when do you require this?
            </Typography>
            <TextField
              label={<Typography variant='body2'>Pick a date</Typography>}
              fullWidth
              sx={{ marginBottom: "8px" }}
              variant='outlined'
            />
          </Box>

          <Box marginBottom='20px'>
            <Typography
              variant='h5'
              align='left'
              gutterBottom
            >
              Tell us where?
            </Typography>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <Button
                onClick={() => handleButtonClick(true)}
                style={{
                  flex: 1,
                  margin: "2px",
                  background: isInPerson ? "black" : "white",
                  color: isInPerson ? "white" : "gray",
                  border: isInPerson ? "2px solid black" : "2px solid gray",
                  "&:hover": {
                    borderColor: "gray",
                  },
                  "&:active": {
                    backgroundColor: isInPerson ? "black" : "white",
                    color: "white",
                    borderColor: "gray",
                  },
                }}
              >
                In Person
              </Button>
              <Button
                onClick={() => handleButtonClick(false)}
                style={{
                  flex: 1,
                  margin: "2px",
                  background: isInPerson ? "white" : "black",
                  color: isInPerson ? "gray" : "white",
                  border: isInPerson ? "2px solid gray" : "2px solid black",
                  "&:hover": {
                    borderColor: "gray",
                  },
                  "&:active": {
                    backgroundColor: isInPerson ? "white" : "black",
                    color: "white",
                    borderColor: "gray",
                  },
                }}
              >
                Remote
              </Button>
            </Box>
            {isInPerson && (
              <TextField
                label={<Typography variant='body2'>Enter address</Typography>}
                multiline
                rows={2}
                fullWidth
                sx={{ marginBottom: "8px" }}
                variant='outlined'
              />
            )}
          </Box>
        </Grid>

        {/* Right Content (Question 4-5, Image Section, and Button) */}
        <Grid
          item
          xs={12}
          md={6}
        >
          <Box marginBottom='20px'>
            <Typography
              variant='h5'
              align='left'
              gutterBottom
            >
              Give us details about the task
            </Typography>
            <TextField
              label={
                <Typography variant='body2'>
                  e.g. Write a summary of task
                </Typography>
              }
              multiline
              rows={4}
              fullWidth
              sx={{ marginBottom: "8px" }}
              variant='outlined'
            />
          </Box>

          {/* Add Images Section */}
          <Box
            style={{
              display: "flex",
              borderRadius: "8px",
              alignItems: "center",
              marginBottom: "20px",
              border: "2px solid #000",
            }}
          >
            <Box>
              <HiOutlinePhotograph size={72} />
            </Box>
            <Box style={{ marginTop: 12, marginLeft: 8 }}>
              <Typography
                variant='body'
                align='left'
              >
                Add Images
              </Typography>
              <Box>
                <input
                  type='file'
                  accept='image/*'
                  multiple
                  style={{ marginBottom: "16px" }}
                />
              </Box>
            </Box>
          </Box>

          <Box marginBottom='20px'>
            <Typography
              variant='h5'
              align='left'
              gutterBottom
            >
              What is your budget?
            </Typography>
            <TextField
              label={<Typography variant='body2'>e.g. Enter budget</Typography>}
              fullWidth
              sx={{ marginBottom: "8px" }}
              variant='outlined'
            />
          </Box>

          {/* Button Section */}
        </Grid>
      </Grid>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button style={{ width: isMobileView ? "100%" : "40%" }}>
          Post Task
        </Button>
      </Box>
    </Container>
  );
};

export default TaskPosting;
