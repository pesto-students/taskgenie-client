import MuiSlider from "@mui/material/Slider";
import PropTypes from "prop-types";

const Slider = ({ children, ...props }) => {
  return <MuiSlider {...props}>{children}</MuiSlider>;
};
Slider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Slider;
