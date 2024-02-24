import MuiTypography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(MuiTypography)(({ theme }) => {
    return {
        // Add global styles here
    }
})

const Typography = ({ children, ...props }) => {
    return (
        <StyledTypography {...props}>{children}</StyledTypography>
    )
}

export default Typography;