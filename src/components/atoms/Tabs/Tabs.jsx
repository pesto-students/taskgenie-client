import MuiTabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

// const StyledTabs = styled(MuiTabs)(({ theme }) => {
//   return {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   };
// });

// const Tabs = ({ children, ...props }) => {
//     return <StyledTabs {...props}>{children}</StyledTabs>
// }

import { useState } from "react";
import {
  Tab,
} from "../Tab";

const StyledTabs = styled(MuiTabs)(({theme}) => {
  return {borderBottom: `1px solid ${theme.palette.divider}`,};
});
const Tabs = ({ options, defaultValue, onChange, ...props }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const handleChange = (_, newValue) => {
    setSelectedValue(newValue);
    onChange(newValue);
  };
  return (
    <StyledTabs
      color='primary'
      value={selectedValue}
    //   exclusive
      onChange={handleChange}
      {...props}
    >
      {options.map((option) => {
        return (
          <Tab
            key={option.value}
            value={option.value}
            label={option.label}
          />
        );
      })}
    </StyledTabs>
  );
};
Tabs.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

Tabs.propTypes = {
  children: PropTypes.node,
};
export default Tabs;
