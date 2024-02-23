import { TextFieldElement } from 'react-hook-form-mui';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextFieldElement)(() => ({
    "& .MuiInputBase-root": {
        borderRadius: '12px'
    }
}))

const TextField = ({ children, ...props }) => {
    return <StyledTextField {...props}>{children}</StyledTextField>
}

export default TextField;