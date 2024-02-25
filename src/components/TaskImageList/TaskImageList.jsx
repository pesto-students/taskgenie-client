import { useState } from "react";
import { ImageList, ImageListItem, Button, Box } from "../UI";
import { ImageListItemBar } from "@mui/material";

const maxImageCount = 3;

const TaskImageList = () => {
  const [images, setImages] = useState([]);
  const handleAddImage = () => {
    const image = {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "image",
    };
    // Todo: Add logic to upload image and get url
    setImages((prevImages) => [...prevImages, image]);
  };
  const removeImage = () => {
    // add logic to remove image
  };
  const showImage = (image) => {
    // Add logic to show image
  };

  return (
    <Box>
      <ImageList cols={3}>
        {images.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar />
          </ImageListItem>
        ))}
        {
          // Todo. redner <div> add photo</div> if there are less than 3 images
          images.length < maxImageCount && (
            <Button onClick={handleAddImage}>add</Button>
          )
        }
      </ImageList>
    </Box>
  );
};

export default TaskImageList;
