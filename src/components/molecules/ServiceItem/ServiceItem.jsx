import { Box, Typography } from "components/atoms";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "1rem",
  textAlign: "center",
  [theme.breakpoints.up("lg")]: {
    background: "color",
  },
  "& svg": {},
}));
const ServiceItem = ({ label, image, children, ...props }) => {
  return (
    <StyledPaper {...props}>
      <Typography variant='body2'>{label}</Typography>
      <Box
        sx={{
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        {image}
      </Box>
    </StyledPaper>
  );
};
export default ServiceItem;
