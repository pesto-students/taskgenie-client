import { styled } from '@mui/material/styles';
import MuiToggleButton from '@mui/material/ToggleButton';


const ToggleButton = ({ children, ...props }) => {
    return <MuiToggleButton {...props}>{children}</MuiToggleButton>
}

export default ToggleButton