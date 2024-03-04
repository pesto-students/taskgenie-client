import MuiCardActions from '@mui/material/CardActions';
const CardActions = ({ children, ...props }) => { return <MuiCardActions {...props}>{children}</MuiCardActions> }
export default CardActions;