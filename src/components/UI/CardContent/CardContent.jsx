import MuiCardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const StyledCardContent = styled(MuiCardContent)(({ theme }) => {
  return {
    padding: theme.spacing(2),
    "&:last-child": {
      paddingBottom: theme.spacing(2),
    },
  };
});
const CardContent = ({ children, ...props }) => {
  return <StyledCardContent {...props}>{children}</StyledCardContent>;
};

export default CardContent;
