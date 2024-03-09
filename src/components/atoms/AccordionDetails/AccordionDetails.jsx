import MuiAccordionDetails from "@mui/material/AccordionDetails";
import PropTypes from "prop-types";

const AccordionDetails = ({ children, ...props }) => {
  return <MuiAccordionDetails {...props}>{children}</MuiAccordionDetails>;
};
AccordionDetails.propTypes = {
  children: PropTypes.node,
};
export default AccordionDetails;
