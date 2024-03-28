import { Box } from "components/atoms";
import { styled } from "@mui/material/styles";
const StyledBox = styled(Box)(({ theme }) => {
  return {
    padding: "3.5rem 1rem",
    [theme.breakpoints.up("md")]: {
      padding: "3.5 1.5rem",
    },
  };
});

const Section = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Section;
