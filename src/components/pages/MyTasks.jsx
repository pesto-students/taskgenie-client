import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Stack, TextField, Select } from "components/atoms";
import TaskList from "components/organisms/TaskList";
const taskTypes = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Assigned",
    value: "assigned",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
];
const MyTasks = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: "Need social media marketer for a restaurant",
      location: "Electronic City, Bangalore",
      dateType: "on",
      date: Date.now(),
      postedBy: "Anuraja",
      budget: 5000,
      status: "open",
    },
    {
      id: 2,
      title: "Resume and cover letter",
      location: "Remote",
      dateType: "before",
      date: "2024-02-22",
      postedBy: "Manoj",
      budget: 1000,
      status: "open",
    },
    {
      id: 3,
      title: "Hi just need some parcels picked up",
      location: "Whitefield, Bangalore",
      dateType: "on",
      date: "2024-02-01",
      postedBy: "Deepak",
      budget: 250,
      status: "assigned",
    },
    {
      id: 4,
      title: "Help clean my car",
      location: "Kodegehalli, Bangalore",
      dateType: "on",
      date: Date.now(),
      budget: 500,
      postedBy: "Chau",
      status: "open",
    },
    {
      id: 5,
      title: "Need a driver for a day to drive us around the market",
      location: "JP Nagar, Bangalore",
      dateType: "on",
      date: Date.now(),
      postedBy: "Shivam",
      budget: 1200,
      status: "open",
    },
  ]);
  const [taskType, setTaskType] = useState("default");
  const handleTaskTypeChange = (e) => {
    setTaskType(e.target.value);
  };
  return (
    <>
      <Stack
        className='filter-section'
        component='section'
        direction='row'
        spacing={1}
        alignItems='center'
        aria-label='Filter Section'
        sx={{
          padding: "1rem",
          zIndex: 2,
          position: "sticky",
          top: 56,
          backgroundColor: "white",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        {/* Filter Section */}
        <Box sx={{ flex: 1 }}>
          {/* Location */}
          <Select
            options={taskTypes}
            size={"small"}
            value={taskType}
            onChange={handleTaskTypeChange}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          {/* Search field */}
          <TextField
            label='Search'
            aria-label='Search'
            size='small'
          />
        </Box>
      </Stack>
      {/* TaskList */}
      <Box
        component='section'
        aria-label='Task List'
        sx={{ padding: "1rem", position: "relative" }}
      >
        <TaskList tasks={tasks} />
      </Box>
    </>
  );
};

MyTasks.propTypes = {};

export default MyTasks;
