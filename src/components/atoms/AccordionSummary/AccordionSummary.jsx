import MuiAccordionSummary from "@mui/material/AccordionSummary";
import PropTypes from "prop-types";

const AccordionSummary = ({ children, ...props }) => {
  return <MuiAccordionSummary {...props}>{children}</MuiAccordionSummary>;
};

AccordionSummary.propTypes = {
  children: PropTypes.node,
};
export default AccordionSummary;
