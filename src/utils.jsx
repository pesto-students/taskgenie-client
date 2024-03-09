/**
 * Formats a date into a human-readable string.
 * If the date is today, it returns 'Today'.
 * Otherwise, it returns the date in the format 'day month year'.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date) => {
  const today = new Date();
  const taskDate = new Date(date);

  if (taskDate.toDateString() === today.toDateString()) {
    return "Today";
  } else {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return taskDate.toLocaleDateString(undefined, options);
  }
};

export const formatAmount = (amount) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);
};
