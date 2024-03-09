import { useState } from "react";
import { Box, Stack, TextField, Select } from "components/atoms";
import TaskList from "components/organisms/TaskList";
import { taskTypes } from "/src/constants";
import { useGetMyTasksQuery } from "/src/store/apiSlice";

const MyTasks = () => {
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
  const handleTaskTypeChange = (e) => {
    setTaskStatus(e.target.value);
  };
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  if (error) return <div>Error: {error.message}</div>;
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
      {/* TaskList */}
      <Box
        component='section'
        aria-label='Task List'
        sx={{ padding: "1rem", position: "relative" }}
      >
        <TaskList
          tasks={tasks}
          isLoading={isLoading}
        />
      </Box>
    </>
  );
};

MyTasks.propTypes = {};

export default MyTasks;
