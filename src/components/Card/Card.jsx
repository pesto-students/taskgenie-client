import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';


const StyledCard = styled(MuiCard)(() => {
    return {
        borderRadius: '12px',
        boxShadow: '0px 1px 7px -4px black',
    }
})

const Card = ({ children, ...props }) => {
    return <StyledCard {...props}>{children}</StyledCard>
}

export default Card;