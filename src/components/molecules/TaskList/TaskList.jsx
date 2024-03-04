import React from "react";
import TaskItem from "../TaskItem/TaskItem.jsx";
import { Stack } from "../../atoms/index.js";
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

export default TaskList;
