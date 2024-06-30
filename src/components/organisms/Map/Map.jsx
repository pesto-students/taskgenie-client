import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import MapPopup from "components/molecules/MapPopup/MapPopup";
import RoomIcon from "@mui/icons-material/Room";
const SetViewOnUpdate = ({ center }) => {
	const map = useMap();
	useEffect(() => {
		const newCenter = [center.lat, center.lng];
		map.setView(newCenter, 11);

		return () => {};
	}, [center]);
};

const Map = ({ tasks = [], center, searchRadius = 100, width }) => {
	const calculateZoomLevel = (radius) => {
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
	const tileLayerURL = import.meta.env.VITE_TILE_URL;
	const tileLayerAttribution = import.meta.env.VITE_TILE_ATTRIBUTION;
	const zoomLevel = calculateZoomLevel(searchRadius);
	return (
		<>
			<MapContainer
				center={[center.lat, center.lng]}
				zoom={zoomLevel}
				scrollWheelZoom={false}
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

export default Map;
