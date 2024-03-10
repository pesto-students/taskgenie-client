import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const PlaceAutocomplete = ({
  onSelectPlace,
  locationType = "sublocality",
  required = false,
  error = false,
  helperText = "",
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
          name: label,
          coordinates: [location.lng(), location.lat()],
        });
      });
    }
  };
  return (
    <>
      <Autocomplete
        noOptionsText={"please enter place name"}
        loading={isPlacePredictionsLoading}
        onChange={(event, value) => handlePlaceSelect(value)}
        options={places}
        {...props}
        renderInput={(params) => (
          <TextField
            required={required}
            error={error}
            helperText={helperText}
            {...props}
            {...params}
            onChange={handleInputChange}
          />
        )}
      />
    </>
  );
};
PlaceAutocomplete.propTypes = {
  onSelectPlace: PropTypes.func,
  locationType: PropTypes.oneOf(["sublocality", "locality"]),
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

export default PlaceAutocomplete;
