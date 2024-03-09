import MuiInputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
const StyledInputLabel = styled(MuiInputLabel)(() => ({
  color: "#000",
  fontWeight: "bold",
}));

const InputLabel = ({ children, ...props }) => {
  return <StyledInputLabel {...props}>{children}</StyledInputLabel>;
};
InputLabel.propTypes = {
  children: PropTypes.node,
};
export default InputLabel;
