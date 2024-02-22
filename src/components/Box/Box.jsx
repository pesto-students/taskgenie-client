import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const StyledBox = styled(MuiBox)(() => {
    return {
        // CSS styling
    }
})
const Box = ({ children, ...props }) => {
    return (
        <StyledBox {...props}>{children}</StyledBox>
    )
}
export default Box;