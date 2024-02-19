import MuiTabs from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

const StyledTabs = styled(MuiTabs)(({ theme }) => {
    return {
        borderBottom: `1px solid ${theme.palette.divider}`,
    }
})

const Tabs = ({ children, ...props }) => {
    return <StyledTabs {...props}>{children}</StyledTabs>
}

export default Tabs;