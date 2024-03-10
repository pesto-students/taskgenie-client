import PropTypes from "prop-types";
import { Stack, Typography, Box } from "components/atoms";
import { useTheme } from "@mui/material";
const TaskDetailAttribute = ({ icon, label, value }) => {
  const theme = useTheme();
  return (
    <Stack
      direction='row'
      gap={1.5}
    >
      <Stack
        direction='row'
        sx={{ color: theme.palette.textLight.main, minWidth: "100px" }}
      >
        <Box>{icon}</Box>
        <Typography sx={{ fontSize: "0.9rem" }}>{label}</Typography>
      </Stack>

      <Typography sx={{ fontSize: "0.9rem" }}>{value}</Typography>
    </Stack>
  );
};
TaskDetailAttribute.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  value: PropTypes.string,
};
export default TaskDetailAttribute;
