import { useState } from "react";
import { Button, Box, Stack } from "components/atoms";
import {
  IconButton,
  ImageListItemBar,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Compressor from "compressorjs";
const maxImageCount = 3;

const TaskImageList = ({ images = [], onAddImage, onRemoveImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageAdd = async (event) => {
    try {
      const file = event.target.files[0];
      const compressedImage = await compressImage(file);
      if (compressedImage) {
        const imageUrl = URL.createObjectURL(compressedImage);
        onAddImage(imageUrl);
      }
    } catch (error) {
      console.error("Error compressing image:", error);
    }
  };
  const handleImageRemove = (image) => {
    onRemoveImage(image);
  };
  const openImageDialog = (image) => {
    setSelectedImage(image);
  };

  const closeImageDialog = () => {
    setSelectedImage(null);
  };

  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 0.6, // Adjust the quality as needed
        success: (compressedFile) => {
          resolve(compressedFile);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  };
  return (
    <Box>
      <ImageList
        cols={3}
        sx={{ borderRadius: "12px", minHeight: "120px" }}
      >
        {images.map((image) => {
          return (
            <ImageListItem key={image}>
              <img
                src={image}
                alt='Task Image'
                onClick={() => openImageDialog(image)}
              />
              <ImageListItemBar
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={() => handleImageRemove(image)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          );
        })}
        {
          // Todo. redner <div> add photo</div> if there are less than 3 images
          images.length < maxImageCount && (
            <Stack justifyContent='center'>
              <label htmlFor='upload-image'>
                <input
                  id='upload-image'
                  type='file'
                  accept='image/*'
                  style={{ display: "none" }}
                  onChange={handleImageAdd}
                />
                <Button
                  size='small'
                  variant='outlined'
                  component='span'
                  startIcon={<AddPhotoAlternateIcon />}
                >
                  <Typography variant='caption'>Add Image</Typography>
                </Button>
              </label>
            </Stack>
          )
        }
      </ImageList>

      {/* Dialog to display the selected image */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={closeImageDialog}
      >
        <DialogContent style={{ maxWidth: "80vw", maxHeight: "80vh" }}>
          <img
            src={selectedImage}
            alt='Selected Image'
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default TaskImageList;
