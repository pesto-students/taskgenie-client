import { useState } from "react";
import { ImageList, ImageListItem, Button, Box } from "../UI";
import { IconButton, ImageListItemBar } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const maxImageCount = 3;
// Configure AWS S3
// TODO: move to redux api slice
// const s3 = new AWS.S3({
//   accessKeyId: "YOUR_ACCESS_KEY_ID",
//   secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
//   region: "YOUR_AWS_REGION",
// });

const TaskImageList = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = (acceptedFiles) => {
    // Upload images to S3 and update state with image URLs
    // TODO: move this to redux thunk
    acceptedFiles.forEach((file) => {
      const params = {
        Bucket: "YOUR_S3_BUCKET_NAME",
        Key: file.name,
        Body: file,
        ACL: "public-read",
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.log("Error uploading image: ", err);
        } else {
          const imageUrl = data.Location;
          setImages((prevImages) => [
            ...prevImages,
            { img: imageUrl, title: "image" },
          ]);
        }
      });
    });
  };

  return (
    <Box>
      <ImageList cols={3}>
        {images.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading='lazy'
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              position='top'
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  onClick={() => removeImage(index)}
                >
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              }
            />
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
