import PropTypes from "prop-types";
import MuiCardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const StyledCardContent = styled(MuiCardContent)(({ theme }) => ({
  padding: theme.spacing(2),
  "&:last-child": {
    paddingBottom: theme.spacing(2),
  },
}));

const CardContent = ({ children, ...props }) => {
  return <StyledCardContent {...props}>{children}</StyledCardContent>;
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContent;
