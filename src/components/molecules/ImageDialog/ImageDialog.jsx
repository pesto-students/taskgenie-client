import PropTypes from "prop-types";
import { Dialog } from "components/atoms";

const ImageDialog = ({ onClose, open, src }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <img
        src={src}
        alt='Dialog Image'
      />
    </Dialog>
  );
};

ImageDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
};

export default ImageDialog;
