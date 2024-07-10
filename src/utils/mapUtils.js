/**
 * Calculates the zoom level based on the radius.
 *
 * @param {number} radius - The radius in kilometers.
 * @return {number} The calculated zoom level.
 */
export const calculateZoomLevel = (radius) => {
	console.log("calculating zoom level");
	// Approximate conversion factor from kilometers to meters
	const metersPerKilometer = 1000;
	const radiusInMeters = radius * metersPerKilometer;

	// Approximate conversion factor from meters to degrees
	const metersPerDegree = 111000;
	const radiusInDegrees = radiusInMeters / metersPerDegree;

	// Use a formula to determine the zoom level based on the radius
	const zoomLevel = Math.ceil(14 - Math.log(radiusInDegrees) / Math.log(2));

	return zoomLevel;
};

/**
 * Checks if the given array contains exactly two numbers.
 * Throws an error if the array does not meet the criteria.
 *
 * @param {Array<number>} arr - The array to be checked.
 * @throws {Error} If the array does not contain exactly two numbers.
 */
export const checkLatAndLng = (arr) => {
	if (arr.length !== 2 || !arr.every((ele) => typeof ele === "number"))
		throw Error("Invalid Lat,lng");
};
