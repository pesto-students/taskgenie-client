import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import Stack from '../Stack';

/**
 * Renders a list of tasks.
 *
 * @component
 * @param {Object[]} tasks - The array of tasks to be rendered.
 * @returns {JSX.Element} The rendered TaskList component.
 */
const TaskList = ({ tasks }) => {
    return (
        <>
            <Stack spacing={1.2}>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </Stack>
        </>
    );
};

export default TaskList;
