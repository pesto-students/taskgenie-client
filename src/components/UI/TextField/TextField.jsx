import React from "react";
import { styled } from "@mui/material/styles";
import { TextField as MuiTextField } from "@mui/material";

const StyledTextField = styled(MuiTextField)(() => ({
  "& .MuiInputBase-root": {
    borderRadius: "12px",
  },
}));

class TextField extends React.Component {
  render() {
    return <StyledTextField {...this.props} />;
  }
}

export default TextField;