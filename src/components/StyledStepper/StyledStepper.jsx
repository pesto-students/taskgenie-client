import { Stepper } from "@mui/material";


const StyledStepper = ({children, ...props}) =>{
    return(
        <Stepper {...props}>{children}</Stepper>
    )
}

export default StyledStepper;