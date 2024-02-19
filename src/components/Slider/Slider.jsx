import MuiSlider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
const StyledSlider = styled(MuiSlider)(({ theme }) => {
    return ({
        // Add styling here
    })
})

const Slider = ({ children, ...props }) => {
    return <StyledSlider {...props}>{children}</StyledSlider>
}

export default Slider;