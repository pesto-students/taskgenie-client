import { useState } from "react";
import Box from "../UI/Box";
import { ImageList, ImageListItem, Button } from "../UI";
// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//   },
// ];

const TaskImageList = () => {
  const [images, setImages] = useState([]);

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
          </ImageListItem>
        ))}
        {
          // Todo. redner <div> add photo</div> if there are less than 3 images
          images.length < 3 && <Button>add</Button>
        }
      </ImageList>
    </Box>
  );
};

export default TaskImageList;
