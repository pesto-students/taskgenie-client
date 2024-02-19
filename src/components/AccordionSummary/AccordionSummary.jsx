import MuiAccordionSummary from '@mui/material/AccordionSummary';
const AccordionSummary = ({ children, ...props }) => {
    return <MuiAccordionSummary {...props}>{children}</MuiAccordionSummary>
}
export default AccordionSummary;