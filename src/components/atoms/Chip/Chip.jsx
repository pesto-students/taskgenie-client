import PropTypes from "prop-types";
import MuiChip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const StyledChip = styled(MuiChip)(({ theme }) => ({
  borderRadius: "12px",
  textTransform: "none",
  color: "white",
  "& .MuiChip-icon": {
    color: "white",
    width: "0.6em",
    height: "0.6em",
    marginRight: "-11px",
  },
}));

const validChipValues = ["Open", "Closed", "Assigned", "Cancelled"];

function Chip({ children, ...props }) {
  return <StyledChip {...props}>{children}</StyledChip>;
}

Chip.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(validChipValues),
};

export default Chip;
