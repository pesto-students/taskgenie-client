import { TextField as MuiTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(MuiTextField)(() => ({
    borderRadius: '12px'
}))

const TextField = ({ ...props }) => {
    return <StyledTextField {...props}
    />
}

export default TextField;