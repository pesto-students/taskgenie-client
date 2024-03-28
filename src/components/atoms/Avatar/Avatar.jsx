import MuiAvatar from "@mui/material/Avatar";

// const StyledAvatar = styled(MuiAvatar)(() => {
//     return {
//         // CSS styling
//     }
// });

const Avatar = ({children, ...props}) => {
    return <MuiAvatar {...props}>{children}</MuiAvatar>
}

export default Avatar;
