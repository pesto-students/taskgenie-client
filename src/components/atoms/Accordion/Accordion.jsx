import PropTypes from "prop-types"; // Import PropTypes
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";

const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  borderRadius: 0,
  borderBottom: `1px solid ${theme.palette.accordionBorder}`,
  "&.Mui-expanded": {
    margin: 0,
  },
  "&:last-of-type": {
    borderRadius: 0,
  },
}));

const Accordion = ({ children, ...props }) => {
  return <StyledAccordion {...props}>{children}</StyledAccordion>;
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired, // Require children to be valid React nodes
};

export default Accordion;
