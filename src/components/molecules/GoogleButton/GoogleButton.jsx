import PropTypes from "prop-types";
import SignUpLogo from "assets/google_signup.svg?react";
import SignInLogo from "assets/google_signin.svg?react";
import { IconButton } from "@mui/material";

const GoogleButton = ({ type = "signup", ...props }) => {
  return (
    <IconButton {...props}>
      {type === "signup" ? <SignUpLogo /> : <SignInLogo />}
    </IconButton>
  );
};

GoogleButton.propTypes = {
  type: PropTypes.string,
};

export default GoogleButton;
