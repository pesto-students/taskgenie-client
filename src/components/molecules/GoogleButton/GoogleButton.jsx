import SignUpLogo from "assets/google_signup.svg?react";
import SignInLogo from 'assets/google_signin.svg?react';
import { IconButton } from '@mui/material';

const GoogleButton = ({ children, type = 'signup', ...props }) => {
    return (
        <IconButton {...props}>
            {type === 'signup' ? <SignUpLogo /> : <SignInLogo />}
        </IconButton>
    )
}

export default GoogleButton;