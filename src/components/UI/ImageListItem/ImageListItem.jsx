import { styled } from "@mui/material/styles";
import MuiImageListItem from "@mui/material/ImageListItem";
import PropTypes from "prop-types";
const StyledImageListItem = styled(MuiImageListItem)(() => {
  return {
    // add style here
  };
});

const ImageListItem = ({ children, ...props }) => {
  return <StyledImageListItem {...props}>{children}</StyledImageListItem>;
};

export default ImageListItem;

ImageListItem.propTypes = {
  children: PropTypes.node,
};
