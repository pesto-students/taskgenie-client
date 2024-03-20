import MuiImageListItem from "@mui/material/ImageListItem";

const ImageListItem = ({ children, src, ...props }) => {
  return (
    <MuiImageListItem {...props}>
      <img src={src} />
    </MuiImageListItem>
  );
};

export default ImageListItem;
