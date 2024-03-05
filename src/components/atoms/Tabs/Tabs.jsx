import MuiTabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledTabs = styled(MuiTabs)(({ theme }) => {
  return {
    borderBottom: `1px solid ${theme.palette.divider}`,
  };
});

const Tabs = ({ children, ...props }) => {
  return <StyledTabs {...props}>{children}</StyledTabs>;
};

Tabs.propTypes = {
  children: PropTypes.node,
};
export default Tabs;
