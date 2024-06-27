import PropTypes from "prop-types";
import TaskItem from "components/molecules/TaskItem/TaskItem.jsx";
import { Stack, Link, Typography, Box } from "components/atoms/index.js";
import EmptyList from "assets/emptyList.svg?react";
/**
 * Renders a list of tasks.
 *
 * @component
 * @param {Object[]} tasks - The array of tasks to be rendered.
 * @returns {JSX.Element} The rendered TaskList component.
 */
const TaskList = ({ tasks = [], type }) => {
	return (
		<>
			{tasks.length > 0 ? (
				<Stack spacing={1.2}>
					{tasks.map((task) => (
						<Link
							key={task._id}
							underline={"none"}
							href={`/${type}/${task._id}`}
						>
							<TaskItem
								key={task._id}
								task={task}
							/>
						</Link>
					))}
				</Stack>
			) : (
				<Stack
					justifyContent='center'
					alignItems='center'
					sx={{ padding: "1rem" }}
				>
					<Box sx={{ textAlign: "center" }}>
						<Typography variant='caption'>
							{" "}
							No Tasks available in your area.
							<br /> We will notify you!
						</Typography>
					</Box>
					<Box sx={{ width: "150px" }}>
						<EmptyList />
					</Box>
				</Stack>
			)}
		</>
	);
};

// Prop validation for TaskList component
TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			status: PropTypes.string,
			location: PropTypes.object,
			date: PropTypes.any,
			budget: PropTypes.number.isRequired,
			postedBy: PropTypes.string,
		})
	),
	type: PropTypes.string.isRequired,
};

export default TaskList;
