import { Popup } from "react-leaflet";
import { Box } from "components/atoms";
import TaskItem from "../TaskItem/TaskItem";
import { Link, styled } from "@mui/material";
const StyledPopup = styled(Popup)(({ theme }) => {
  return {
    "& .leaflet-popup-content": {
      margin: 0,
    },
  };
});
const MapPopup = ({ task }) => {
  return (
    <StyledPopup>
      <Link
        href={`/tasks/${task._id}`}
        underline={"none"}
      >
        <TaskItem task={task} />
      </Link>
    </StyledPopup>
  );
};

export default MapPopup;
