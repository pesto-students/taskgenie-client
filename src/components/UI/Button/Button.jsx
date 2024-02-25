import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const StyledButton = styled(MuiButton)(() => {
    return {
        borderRadius: '12px',
        textTransform: 'none',
    }
})

function Button({ children, variant = 'contained', ...props }) {
    return <StyledButton variant={variant} {...props}>{children}</StyledButton>
}

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['contained', 'outlined']),
};

export default Button;
