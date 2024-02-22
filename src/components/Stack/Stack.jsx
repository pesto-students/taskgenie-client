import MuiStack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Stack = ({ children, ...props }) => {
    return <MuiStack {...props}>{children}</MuiStack>
}
export default Stack;