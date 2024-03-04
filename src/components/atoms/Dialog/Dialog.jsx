import React from "react";
import PropTypes from "prop-types";
import MuiDialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";

const StyledDialog = styled(MuiDialog)(() => ({}));

function Dialog({ children, ...props }) {
  return <StyledDialog {...props}>{children}</StyledDialog>;
}

Dialog.propTypes = {
  children: PropTypes.node,
};

export default Dialog;
