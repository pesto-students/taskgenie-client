import MuiTextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(MuiTextField)(() => ({
    "& .MuiInputBase-root": {
        borderRadius: '12px'
    }
}))

const TextField = ({ children, ...props }) => {
    return (
        <StyledTextField {...props}>{children}</StyledTextField>
    )
}
export default TextField;