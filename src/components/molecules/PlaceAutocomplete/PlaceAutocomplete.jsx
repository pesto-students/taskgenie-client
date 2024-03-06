import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// Todo move apikey
const apiKey = "AIzaSyAC5l_xNclOKWKHAOo_2HstzoO5 - yggxIU";

const PlaceAutocomplete = ({
  onSelectPlace,
  locationType = "sublocality",
  ...props
}) => {
  const [places, setPlaces] = useState([]);
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = usePlacesService({
    apiKey: apiKey,
    options: {
      types: [locationType],
      componentRestrictions: { country: "in" },
    },
  });
  useEffect(() => {
    if (placePredictions.length > 0) {
      const transformedPlaces = placePredictions.map((prediction) => ({
        label: prediction.description,
        placeId: prediction.place_id,
      }));
      setPlaces(transformedPlaces);
    }
  }, [placePredictions]);

  const handleInputChange = (event) => {
    getPlacePredictions({ input: event.target.value });
  };
  const handlePlaceSelect = async (place) => {
    if (place) {
      const { label, placeId } = place;
      placesService?.getDetails({ placeId }, (placeDetails) => {
        const location = placeDetails.geometry.location;
        onSelectPlace({
          label,
          placeId,
          location: { lat: location.lat(), lng: location.lng() },
        });
      });
    }
  };
  return (
    <>
      <Autocomplete
        required={true}
        noOptionsText={"please enter place name"}
        loading={isPlacePredictionsLoading}
        onChange={(event, value) => handlePlaceSelect(value)}
        options={places}
        renderInput={(params) => (
          <TextField
            required={true}
            placeholder='Select place'
            {...params}
            onChange={handleInputChange}
          />
        )}
        {...props}
      />
    </>
  );
};
PlaceAutocomplete.propTypes = {
  onSelectPlace: PropTypes.func,
  locationType: PropTypes.oneOf(["sublocality", "locality"]),
};

export default PlaceAutocomplete;
