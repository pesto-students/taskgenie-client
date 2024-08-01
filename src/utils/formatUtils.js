/**
 * Formats a date into a human-readable string.
 * If the date is today, it returns 'Today'.
 * Otherwise, it returns the date in the format 'day month year'.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
/**
 * Formats a date into a human-readable string.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date string. Returns "Today" if the date is today, otherwise returns the date in the format 'day month year'.
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

/**
 * Formats the given amount into a currency string with the Indian Rupee (INR) currency symbol.
 *
 * @param {number} amount - The amount to be formatted.
 * @return {string} The formatted amount as a currency string.
 */
export const formatAmount = (amount) => {
	return Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		minimumFractionDigits: 0,
	}).format(amount);
};

/**
 * Calculates the time elapsed since a given date.
 *
 * @param {Date} [date=new Date()] - The date to calculate the time elapsed from. Defaults to the current date.
 * @return {string} The time elapsed in a human-readable format, e.g. "1 week ago", "2 days ago", etc.
 */
export function timeSince(date = new Date()) {
	const today = new Date();
	// Difference in miliseconds
	const timeDiff = today.getTime() - date.getTime();
	// Diff in days
	const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	if (daysDiff >= 7)
		return `${Math.floor(daysDiff / 7)} week${daysDiff >= 2 ? "s" : ""} ago`;
	else return `${daysDiff} day${daysDiff > 1 ? "s" : ""} ago`;
}
