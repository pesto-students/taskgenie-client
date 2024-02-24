import MuiAccordionDetails from '@mui/material/AccordionDetails';

const AccordionDetails = ({ children, ...props }) => {
    return <MuiAccordionDetails {...props}>{children}</MuiAccordionDetails>
}
export default AccordionDetails;