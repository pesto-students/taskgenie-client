import MuiContainer from "@mui/material/Container";

const Container = ({ children, ...props }) => {
  return <MuiContainer {...props}>{children}</MuiContainer>;
};

export default Container;
