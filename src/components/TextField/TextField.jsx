import { TextFieldElement } from 'react-hook-form-mui';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextFieldElement)(() => ({
    borderRadius: '12px'
}))

const TextField = ({ ...props }) => {
    return <StyledTextField {...props}
    />
}

export default TextField;