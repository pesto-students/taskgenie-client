import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(MuiContainer)(({ theme }) => ({
    // Add global styles here
}));

const Container = ({ children, ...props }) => {
    return <StyledContainer {...props}>{children}</StyledContainer>
}

export default Container;