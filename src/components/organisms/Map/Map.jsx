import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";
import MapPopup from "components/molecules/MapPopup/MapPopup";
import { calculateZoomLevel } from "src/utils/mapUtils";

/**
 * Sets the view on update based on the center coordinates.
 *
 * @param {Object} center - The center coordinates for the map view.
 * @return {void}
 */
const SetViewOnUpdate = ({ center }) => {
	const map = useMap();
	map.getContainer().focus = () => {};

	React.useEffect(() => {
		if (center && center.lat && center.lng) map.setView(center, 11);
		return () => {};
	}, [center]);
};
/**
 * Renders a map component with markers and popups for tasks.
 *
 * @param {Object} props - The properties for the map.
 * @param {Array} props.tasks - The array of tasks to display.
 * @param {Object} props.center - The center coordinates for the map.
 * @param {number} [props.searchRadius=100] - The search radius in kilometers.
 * @param {string} props.width - The width of the map.
 * @return {JSX.Element} The map component.
 */
const Map = ({ tasks = [], center, searchRadius = 100, width }) => {
	const tileLayerURL = import.meta.env.VITE_TILE_URL;
	const tileLayerAttribution = import.meta.env.VITE_TILE_ATTRIBUTION;
	const zoomLevel = React.useMemo(
		() => calculateZoomLevel(searchRadius),
		[searchRadius]
	);
	return (
		<>
			<MapContainer
				center={center}
				zoom={zoomLevel}
				style={{ width: { width }, height: "95vh" }}
			>
				<TileLayer
					attribution={tileLayerAttribution}
					url={tileLayerURL}
				/>
				<SetViewOnUpdate center={center} />
				{tasks.map((task) => {
					if (task.location) {
						const lat = task.location.coordinates[1];
						const lng = task.location.coordinates[0];
						return (
							<>
								<Marker position={[lat, lng]}>
									<MapPopup task={task} />
								</Marker>
							</>
						);
					}
				})}
			</MapContainer>
		</>
	);
};
Map.propTypes = {
	center: PropTypes.arrayOf(PropTypes.number.isRequired),
};
function arePropsEqual(prevProps, nextProps) {
	if (
		Array.isArray(prevProps.center) &&
		Array.isArray(nextProps.center) &&
		prevProps.center.length === 2 &&
		nextProps.center.length === 2
	) {
		return (
			prevProps.center[0] === nextProps.center[0] &&
			prevProps.center[1] === nextProps.center[1]
		);
	}
}
export default React.memo(Map, arePropsEqual);
