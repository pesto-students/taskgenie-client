import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledCard = styled(MuiCard)(() => {
  return {
    borderRadius: "12px",
    boxShadow: "0px 1px 7px -4px black",
  };
});

const Card = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

Card.propTypes = {
  children: PropTypes.node,
};
export default Card;
