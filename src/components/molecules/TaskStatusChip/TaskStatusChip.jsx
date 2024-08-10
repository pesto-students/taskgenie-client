import React from "react";
import PropTypes from "prop-types";
import { Chip } from "@mui/material";

const TaskStatusChip = ({ status = "" }) => {
	let color;
	switch (status) {
		case "open":
		case "assigned":
			color = "primary";
			break;
		case "cancelled":
			color = "error";
			break;
		case "completed":
			color = "success";
			break;
		default:
			color = "default";
	}

	return (
		<Chip
			size='small'
			label={status}
			color={color}
		/>
	);
};

TaskStatusChip.propTypes = {
	status: PropTypes.oneOf(["open", "assigned", "cancelled", "completed"]),
};

export default TaskStatusChip;
