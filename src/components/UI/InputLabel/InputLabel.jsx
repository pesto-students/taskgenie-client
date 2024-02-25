import MuiInputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const StyledInputLabel = styled(MuiInputLabel)(({ theme }) => ({
    color: '#000',
    fontWeight: 'bold'
}));

const InputLabel = ({ children, ...props }) => {
    return <StyledInputLabel {...props}>{children}</StyledInputLabel>
}

export default InputLabel;