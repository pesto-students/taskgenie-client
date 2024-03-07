import PropTypes from "prop-types";
import TaskItem from "components/molecules/TaskItem/TaskItem.jsx";
import { Stack } from "components/atoms/index.js";

/**
 * Renders a list of tasks.
 *
 * @component
 * @param {Object[]} tasks - The array of tasks to be rendered.
 * @returns {JSX.Element} The rendered TaskList component.
 */
const TaskList = ({ tasks = [] }) => {
  return (
    <>
      <Stack spacing={1.2}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </Stack>
    </>
  );
};

// Prop validation for TaskList component
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string,
      location: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      budget: PropTypes.number.isRequired,
      postedBy: PropTypes.string,
    })
  ),
};

export default TaskList;
