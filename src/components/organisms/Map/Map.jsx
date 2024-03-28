import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const SetViewOnUpdate = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    const newCenter = [center.lat, center.lng];
    console.log("got new center", newCenter);
    map.setView(newCenter, 11);

    return () => {};
  }, [center]);
};

const Map = ({ tasks = [], center, searchRadius = 100, width }) => {
  console.log("width is", width);
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
          attribution='&copy; <a href="http://www.justicemap.org/terms.php">Justice Map</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
        />
        <SetViewOnUpdate center={center} />
        {tasks.map((task) => {
          if (task.location) {
            const lat = task.location.coordinates[1];
            const lng = task.location.coordinates[0];
            return (
              <>
                <Marker position={[lat, lng]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
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
