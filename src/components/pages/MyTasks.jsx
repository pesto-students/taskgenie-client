import { useState } from "react";
import { Box, Stack, TextField, Select, Button, Link } from "components/atoms";
import TaskList from "components/organisms/TaskList";
import { taskTypes } from "/src/constants";
import { useGetMyTasksQuery } from "/src/store/apiSlice";
import { Typography } from "@mui/material";
import NoTasks from "assets/emptyList.svg?react";
const MyTasks = () => {
  // Hooks
  const [taskStatus, setTaskStatus] = useState("default");
  const [searchText, setSearchText] = useState("");
  const {
    data: tasks = [],
    error,
    isLoading,
  } = useGetMyTasksQuery({
    status: taskStatus === "default" ? "" : taskStatus,
    searchText,
  });
  // Functions
  const handleTaskTypeChange = (e) => {
    setTaskStatus(e.target.value);
  };
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  // Loading
  if (isLoading) {
    return <Box>Loading..</Box>;
  }
  //  Handle error
  if (error) return <div>Error: {error.message}</div>;

  // Empty List
  const EmptyList = () => (
    <Box sx={{ textAlign: "center" }}>
      <Stack
        alignItems='center'
        sx={{ padding: "2rem" }}
      >
        <Box sx={{ width: "12rem" }}>
          <NoTasks />
        </Box>
        <Typography variant='h5'>No Tasks</Typography>
        <Typography variant='caption'>1
          Post a Task and find the gen1ie to do it.
        </Typography>
      </Stack>
      <Link href='/postTask'>
        <Button>Post a Task</Button>
      </Link>
    </Box>
  );
  // Filter Section
  const FilterSection = () => (
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
          name='search-taskType'
          options={taskTypes}
          size={"small"}
          value={taskStatus}
          onChange={handleTaskTypeChange}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        {/* Search field */}
        <TextField
          name='search-title'
          aria-label='search-title'
          size='small'
          placeholder={"search Tasks"}
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Box>
    </Stack>
  );
  return (
    <>
      {tasks.length > 0 ? (
        <Box>
          <FilterSection />
          {/* TaskList */}
          <Box
            component='section'
            aria-label='Task List'
            sx={{ padding: "1rem", position: "relative" }}
          >
            <TaskList
              type={"mytasks"}
              tasks={tasks}
            />
          </Box>
        </Box>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

MyTasks.propTypes = {};

export default MyTasks;
