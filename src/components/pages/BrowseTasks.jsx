import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Stack, TextField } from "../atoms/index.js";
import TaskList from "components/organisms/TaskList/index.jsx";
import { Box, IconButton } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterDialog from "components/molecules/FilterDialog/index.jsx";
import { useGetTasksQuery } from "/src/store/apiSlice.jsx";
import PlaceAutocomplete from "components/molecules/PlaceAutocomplete";
import Map from "components/organisms/Map";
import { checkLatAndLng } from "src/utils.jsx";
import { useTheme } from "@emotion/react";
// Default filters
const defaultFilters = {
  locationType: "",
  taskStatus: "open",
  distance: 50,
  priceRange: [100, 99000],
  sortBy: "date-desc",
};
const defaultLocation = {
  lat: 26.9124,
  lng: 75.7873,
};
const userLocationKey = "userLocation";

const BrowseTasks = () => {
  const theme = useTheme();
  const mapContainerRef = useRef(null);
  const [mapWidth, setMapWidth] = useState(0);
  const [filters, setFilters] = useState(defaultFilters);
  const [searchText, setSearchText] = useState("");
  const [userLocation, setUserLocation] = useState(defaultLocation);
  let { data: tasks = [] } = useGetTasksQuery({ ...filters, ...userLocation });
  // Filter tasks based on search text
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  // fetch user location from user's saved city

  useEffect(() => {
    const fetchUserLocation = async () => {
      // (only if there is no location stored in local storage) use ipapi.co/json to fetch user's current location, if it cant use default location.
      // User can override location
      try {
        if (localStorage.getItem(userLocationKey)) {
          // Use stored location
          const storedLocation = JSON.parse(
            localStorage.getItem(userLocationKey)
          );
          setUserLocation(storedLocation);
        } else {
          // if not use ipapi.co/json to fetch location
          const response = await axios.get("https://ipinfo.io/json");
          // Convert location in correct format
          const { loc } = response.data;
          const [lat, lng] = loc
            .split(",")
            .map((str) => Number.parseFloat(str));
          checkLatAndLng([lat, lng]);
          // Set user's location
          setUserLocation({ lat, lng });
          // Store location in local storage
          localStorage.setItem(userLocationKey, JSON.stringify({ lat, lng }));
        }
      } catch (e) {
        console.error("Error Occurred while fetching the location", e.message);
      }
    };
    // Fetch user's ip location to show tasks nearby
    fetchUserLocation();
  }, []);
  useEffect(() => {
    if (mapContainerRef.current) {
      const width = mapContainerRef.current.clientWidth;
      setMapWidth(width);
    }
  }, [mapContainerRef]);

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
  const handleCitySelect = ({ coordinates }) => {
    if (coordinates) {
      const location = {
        lat: coordinates[1],
        lng: coordinates[0],
      };

      setUserLocation(location);
      // Store location in local storage
      localStorage.setItem(userLocationKey, JSON.stringify(location));
    }
  };
  return (
    <>
      {/* Filter Dialog */}
      <FilterDialog
        open={dialogOpen}
        onClose={handleCloseFilterDialog}
        defaultFilters={filters}
      />
      {/* Filter Headers */}
      <Stack
        direction='row'
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
        justifyContent='center'
        alignItems='center'
      >
        {/* Filters */}
        <Box sx={{ display: { xs: "none", md: "block" }, flex: 1 }}></Box>
        <Stack
          className='filter-section'
          component='section'
          direction='row'
          spacing={0.5}
          alignItems='center'
          aria-label='Filter Section'
          sx={{
            padding: "1rem",
            backgroundColor: "white",
            [theme.breakpoints.up("sm")]: {
              padding: "0.5rem",
            },
          }}
        >
          {/* Filter Section */}
          <Box sx={{ flex: 1 }}>
            {/* Location */}
            <PlaceAutocomplete
              size={"small"}
              placeholder='City'
              onSelectPlace={handleCitySelect}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            {/* Search field */}
            <TextField
              label='Search'
              size='small'
              aria-label='Search'
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </Box>
          <Box>
            {/* filter button */}
            <IconButton
              aria-label='filter-tasks'
              onClick={handleClickDialogOpen}
              sx={{ padding: 0 }}
            >
              <FilterAltOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
      </Stack>

      {/* Main Content: TaskList and Map */}
      <Stack
        direction='row'
        justifyContent='center'
      >
        {/* Task List */}
        <Box
          component='section'
          aria-label='Task List'
          sx={{
            padding: "1rem",
            overflowY: "auto",
            maxHeight: "100vh",
            minWidth: "40%",
          }}
        >
          <TaskList
            tasks={filteredTasks}
            type='tasks'
          />
        </Box>

        {/* Map */}
        <Box
          sx={{
            height: "100%",
            padding: "1rem",
            display: {
              xs: "none",
              md: "block",
            },
            flex: 1,
          }}
          ref={mapContainerRef}
        >
          <Map
            tasks={filteredTasks}
            center={userLocation}
            width={mapWidth}
            sx={{
              width: "100%",
              backgroundColor: "blue",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Stack>
    </>
  );
};

export default BrowseTasks;
