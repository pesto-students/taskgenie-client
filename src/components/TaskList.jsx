import React from 'react'
import TaskItem from './TaskItem';
import Stack from './Stack';
const TaskList = ({ tasks }) => {

    return (
        <>
            <Stack spacing={1.2}>
                {
                    tasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))
                }
            </Stack>
        </>
    )
}

export default TaskList