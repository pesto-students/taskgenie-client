import PropTypes from "prop-types";
import MuiButton from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";

const StyledButton = styled(MuiButton)(() => {
  return {
    borderRadius: "12px",
    textTransform: "none",
  };
});

function Button({
  children,
  variant = "contained",
  loading = false,
  ...props
}) {
  return (
    <StyledButton
      variant={variant}
      disabled={loading} // Disable button when loading is true
      {...props}
    >
      {loading ? (
        <CircularProgress
          size={24}
          color='inherit'
        /> // Show CircularProgress when loading is true
      ) : (
        children // Show button text when loading is false
      )}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  loading: PropTypes.bool,
};

export default Button;
