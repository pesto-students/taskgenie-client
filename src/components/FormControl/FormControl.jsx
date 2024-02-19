import { Box } from "@mui/material";



const FormControl = ({ children, ...props }) => {
    return <Box {...props} style={{ width: '100%' }}>{children}</Box>
}
export default FormControl;