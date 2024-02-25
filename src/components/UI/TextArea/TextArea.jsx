import styled from '@emotion/styled';
import MuiTextArea from '@mui/material/TextareaAutosize';
import PropTypes from "prop-types";


const StyledTextArea = styled(MuiTextArea)(() => ({
    // border: '1px solid #8659d3',
    // backgroundColor: '#f6f3fc',
    borderRadius: '12px',
    width:'100%',
    '& .css-15czy8e':{
    },
}));
const TextArea = ({ariaLabel, ...props}) =>{
    return <StyledTextArea aria-label={ariaLabel} {...props} />
}

TextArea.propTypes = {
//    aria-label : PropTypes.string.isRequired,
}
export default TextArea;