import { styled } from "@mui/material/styles";
import MuiImageList from "@mui/material/ImageList";
import PropTypes from "prop-types";

const StyledImageList = styled(MuiImageList)(() => ({
  // Add style here
}));

const ImageList = ({ children, ...props }) => {
  return <StyledImageList {...props}>{children}</StyledImageList>;
};
export default ImageList;

ImageList.propTypes = {
  children: PropTypes.node,
};
