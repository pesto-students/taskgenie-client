import React from "react";
import { Button, Box, Stack, Typography, Accordion, Dialog } from "../UI";
import {
  AccordionDetails,
  DialogTitle,
  Divider,
  IconButton,
  AccordionSummary,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DialogActions } from "@mui/material";

const FilterDialog = ({ children, open, onClose, ...props }) => {
  const resetFilters = () => {
    onClose();
  };
  const applyFilters = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...props}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          padding: "1rem",
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
      <Box>
        {/* filters */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Location Type</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Box>
      <DialogActions
        sx={{
          direction: "row",
          justifyContent: "center",
        }}
      >
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
      </DialogActions>
    </Dialog>
  );
};

export default FilterDialog;
