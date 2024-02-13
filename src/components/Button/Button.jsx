import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';

const Button = ({ children, onClick, type = 'contained', ...props }) => {
    return (
        <MuiButton variant={type} onClick={onClick} {...props}>
            {children}
        </MuiButton>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

export default Button;
