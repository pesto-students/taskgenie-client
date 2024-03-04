import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Box, Stack, Typography, Accordion, Dialog } from "../../atoms";
import { SortByToggle } from "components/atoms/SortByToggle";
import {
  Slider,
  AccordionDetails,
  Divider,
  IconButton,
  AccordionSummary,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DialogActions } from "@mui/material";

const FilterDialog = ({ open, onClose, defaultFilters, ...props }) => {
  const [locationType, setLocationType] = useState("all");
  const [taskStatus, setTaskStatus] = useState("all");
  const [distance, setDistance] = useState(5);
  const [priceRange, setPriceRange] = useState([100, 99000]);
  const [sortBy, setSortBy] = useState("date-desc");
  const handleLocationTypeChange = (event) => {
    setLocationType(event.target.value);
  };
  const handleTaskStatusChange = (event) => {
    setTaskStatus(event.target.value);
  };
  const handlePriceChange = (event, value) => {
    setPriceRange(value);
  };
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  const handleDistanceChange = (event, value) => {
    setDistance(value);
  };
  const resetFilters = () => {
    setLocationType(defaultFilters.locationType);
    setTaskStatus(defaultFilters.taskStatus);
    setDistance(defaultFilters.distance);
    setPriceRange(defaultFilters.priceRange);
    setPriceRange(defaultFilters.sortBy);
  };
  const applyFilters = () => {
    onClose({
      locationType,
      taskStatus,
      distance,
      priceRange,
      sortBy,
    });
  };

  const sortByOptions = [
    {
      value: "price-asc",
      label: "Price: Low to High",
    },
    {
      value: "price-desc",
      label: "Price: High to Low",
    },
    {
      value: "date-asc",
      label: "Oldest tasks first",
    },
    {
      value: "date-desc",
      label: "Latest tasks first",
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...props}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          padding: "1rem 0",
        },
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='start'
      >
        <IconButton onClick={onClose}>
          <CloseOutlinedIcon sx={{ float: "left" }} />
        </IconButton>
        <Typography
          variant='h6'
          sx={{ padding: 0 }}
        >
          Filters
        </Typography>
      </Stack>
      <Divider />
      {/* filters */}
      <Box>
        {/* Location Type */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Location Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup
              aria-labelledby='Location Type'
              name='location-type-group'
              value={locationType}
              onChange={handleLocationTypeChange}
            >
              <FormControlLabel
                value='all'
                control={<Radio size='small' />}
                label='All'
              />
              <FormControlLabel
                value='inperson'
                control={<Radio size='small' />}
                label='in-person'
              />
              <FormControlLabel
                value='remote'
                control={<Radio size='small' />}
                label='Remote'
              />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
        {/* Task Status */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Status</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup
              aria-labelledby='Task Status'
              name='task-status-group'
              value={taskStatus}
              onChange={handleTaskStatusChange}
            >
              <FormControlLabel
                value='all'
                control={<Radio size='small' />}
                label='All'
              />
              <FormControlLabel
                value='open'
                control={<Radio size='small' />}
                label='Open'
              />
              <FormControlLabel
                value='assigned'
                control={<Radio size='small' />}
                label='Assigned'
              />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
        {/* Distance */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Distance</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0 3rem" }}>
            <Slider
              min={5}
              max={100}
              onChange={handleDistanceChange}
              value={distance}
              aria-label='Distance'
              valueLabelDisplay='on'
              valueLabelFormat={(distance) => `${distance} Kms`}
            />
          </AccordionDetails>
        </Accordion>
        {/* Price */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Price</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0 3rem" }}>
            <Slider
              min={100}
              max={99000}
              onChange={handlePriceChange}
              value={priceRange}
              getAriaLabel={() => "Price Range"}
              valueLabelDisplay='on'
              valueLabelFormat={(value) => `₹ ${value}`}
            />
          </AccordionDetails>
        </Accordion>
        {/* Sort By */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Sort By</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ height: "220px" }}>
            <SortByToggle
              options={sortByOptions}
              value={sortBy}
              onChange={handleSortByChange}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      <DialogActions
        sx={{
          direction: "row",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginTop: "0.6rem", display: "flex", gap: "1rem" }}>
          <Button
            variant='outlined'
            size='small'
            onClick={resetFilters}
          >
            Reset
          </Button>
          <Button
            size='small'
            onClick={applyFilters}
          >
            Apply
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

FilterDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  defaultFilters: PropTypes.shape({
    locationType: PropTypes.oneOf(["all", "inperson", "remote"]),
    taskStatus: PropTypes.oneOf(["all", "open", "assigned"]),
    distance: PropTypes.number,
    priceRange: PropTypes.arrayOf(PropTypes.number),
    sortBy: PropTypes.oneOf([
      "price-asc",
      "price-desc",
      "date-asc",
      "date-desc",
    ]),
  }).isRequired,
};

export default FilterDialog;
