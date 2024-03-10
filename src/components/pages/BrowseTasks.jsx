import { useState, useEffect } from "react";
import { Box, Stack, TextField } from "../atoms/index.js";
import TaskList from "components/organisms/TaskList/index.jsx";
import { IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterDialog from "components/molecules/FilterDialog/index.jsx";
import { useGetTasksQuery } from "/src/store/apiSlice.jsx";
// Default filters
const defaultFilters = {
  locationType: "all",
  taskStatus: "open",
  distance: 50,
  priceRange: [100, 99000],
  sortBy: "date-desc",
};
const BrowseTasks = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [searchText, setSearchText] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  let { data: tasks = [] } = useGetTasksQuery({ ...filters, ...userLocation });

  // Filter tasks based on search text
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  // fetch Geolocation
  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching user location:", error);
        },
        {
          message:
            "Taskgenie needs your location to show availabe tasks around you.",
        }
      );
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);
  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleCloseFilterDialog = (event) => {
    const filters = event.filters;
    if (filters) {
      setFilters(event.filters);
    }
    setDialogOpen(false);
  };
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      {/* Filter Dialog */}
      <FilterDialog
        open={dialogOpen}
        onClose={handleCloseFilterDialog}
        defaultFilters={filters}
      />
      {/* Filters */}
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
        <Box>
          {/* Location */}
          <TextField
            label='Location'
            aria-label='Location'
            size='small'
          />
        </Box>
        <Box>
          {/* Search field */}
          <TextField
            label='Search'
            aria-label='Search'
            size='small'
            value={searchText}
            onChange={handleSearchTextChange}
          />
        </Box>
        <Box>
          {/* filter button */}
          <IconButton
            aria-label='filter-tasks'
            onClick={handleClickDialogOpen}
          >
            <FilterAltOutlinedIcon />
          </IconButton>
        </Box>
      </Stack>

      {/* Task List */}
      <Box
        component='section'
        aria-label='Task List'
        sx={{ padding: "1rem", position: "relative" }}
      >
        <TaskList tasks={filteredTasks} />
      </Box>
    </>
  );
};

export default BrowseTasks;
