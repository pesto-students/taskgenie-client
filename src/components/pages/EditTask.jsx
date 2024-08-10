import React, { useEffect } from "react";
import { Container } from "../atoms";
import { useGetTaskDetailsQuery } from "src/store/apiSlice";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import EditTaskForm from "../organisms/PostTaskForm/EditTaskForm";
const EditTask = () => {
	document.title = "Edit Task";
	const { taskId } = useParams();
	const { data: taskData, isLoading: getTaskDetailsLoading } =
		useGetTaskDetailsQuery(taskId);
	console.log("edit task", taskData);
	const [formattedTaskData, setFormattedTaskData] = React.useState(null);
	useEffect(() => {
		if (taskData) {
			setFormattedTaskData({
				...taskData,
				date: taskData.date ? dayjs(taskData.date) : taskData.date,
			});
		}
	}, [taskData]);
	if (getTaskDetailsLoading) return <div>Loading...</div>;
	return (
		<Container sx={{ minHeight: "100%", padding: "2rem 1rem" }}>
			<EditTaskForm
				taskData={formattedTaskData}
				edit={true}
			/>
		</Container>
	);
};

EditTask.propTypes = {};

export default EditTask;
