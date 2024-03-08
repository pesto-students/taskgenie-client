import { useState } from "react";
import { Box, Stack, TextField } from "../atoms/index.js";
import TaskList from "components/organisms/TaskList/index.jsx";
import { IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterDialog from "components/molecules/FilterDialog/index.jsx";

// Default filters
const defaultFilters = {
  locationType: "all",
  taskStatus: "all",
  distance: 5,
  priceRange: [100, 99000],
  sortBy: "date-desc",
};
const BrowseTasks = () => {
  const [filters, setFilters] = useState(defaultFilters);
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleCloseFilterDialog = (selectedFilters) => {
    setFilters(selectedFilters);
    setDialogOpen(false);
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
        <TaskList tasks={tasks} />
      </Box>
    </>
  );
};

export default BrowseTasks;
