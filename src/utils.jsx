export const formatDate = (date) => {
    const today = new Date();
    const taskDate = new Date(date);

    if (taskDate.toDateString() === today.toDateString()) {
        return 'Today';
    } else {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return taskDate.toLocaleDateString(undefined, options);
    }
};

