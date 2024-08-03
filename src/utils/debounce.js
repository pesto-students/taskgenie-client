/**
 * Returns a debounced version of the input function that will postpone its execution until after
 * `delay` milliseconds have elapsed since the last time it was invoked. The debounced function
 * returns a function that cancels the scheduled execution of the debounced function.
 *
 * @param {function} fn - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @return {function} A debounced version of the input function.
 */
function debounce(fn, delay) {
	let id;
	return (...args) => {
		clearTimeout(id);
		id = setTimeout(() => fn(...args), delay);
		return () => clearTimeout(id);
	};
}
export default debounce;
