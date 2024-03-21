import PropTypes from "prop-types";
import { useState } from "react";
import MuiImageListItem from "@mui/material/ImageListItem";
import ImageDialog from "components/molecules/ImageDialog/ImageDialog";

const ImageListItem = ({ src, ...props }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <ImageDialog
        open={dialogOpen}
        onClose={handleClose}
        src={src}
      />
      <MuiImageListItem
        {...props}
        onClick={() => setDialogOpen(true)}
      >
        <img
          src={src}
          alt='Image'
        />
      </MuiImageListItem>
    </>
  );
};

ImageListItem.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string.isRequired,
};

export default ImageListItem;
