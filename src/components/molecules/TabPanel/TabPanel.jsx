import PropTypes from "prop-types";
import { Box } from "components/atoms";
const TabPanel = ({ value, index, children, ...props }) => {
  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      {...props}
    >
      {children}
    </Box>
  );
};
TabPanel.propTypes = {
  value: PropTypes.number,
  index: PropTypes.number,
  children: PropTypes.node,
};
export default TabPanel;
