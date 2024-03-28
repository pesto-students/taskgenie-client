import React from "react";
import { Box, Button } from "components/atoms";
import { Grid, IconButton, Paper } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskImagePicker = ({ images = [], onAddImage, onDeleteImage }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={4}
            key={index}
          >
            <Paper sx={{ position: "relative", marginBotton: "8px" }}>
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                }}
              />
              <IconButton
                aria-label='delete'
                sx={{
                  position: "absolute",
                  top: "1px",
                  right: "2px",
                  color: "blue",
                }}
                onClick={() => onDeleteImage(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
        {images.length < 3 && (
          <Grid
            item
            xs={4}
          >
            <label htmlFor='upload-image'>
              <input
                id='upload-image'
                type='file'
                accept='image/*'
                style={{ display: "none" }}
                onChange={onAddImage}
              />
              <Button
                size='small'
                variant='contained'
                component='span'
                startIcon={<AddPhotoAlternateIcon />}
              >
                Add Image
              </Button>
            </label>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default TaskImagePicker;
