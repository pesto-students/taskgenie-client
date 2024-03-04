import React from "react";
import MuiTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
const StyledTextField = styled(MuiTextField)(() => ({
  "& .MuiInputBase-root": {
    borderRadius: "12px",
  },
}));

const TextField = React.forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <StyledTextField
      ref={ref}
      {...rest}
    >
      {children}
    </StyledTextField>
  );
});
TextField.displayName = "TextField";
TextField.propTypes = {
  children: PropTypes.node,
};
export default TextField;
