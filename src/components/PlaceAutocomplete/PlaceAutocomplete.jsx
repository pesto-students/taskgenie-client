import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
// Todo move apikey
const apiKey = "AIzaSyAC5l_xNclOKWKHAOo_2HstzoO5 - yggxIU";

const PlaceAutocomplete = ({
  onSelectPlace,
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
      types: ["sublocality"],
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
          lat: location.lat(),
          lng: location.lng(),
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
        renderInput={(params) => (
          <TextField
            placeholder='Select place'
            {...params}
            onChange={handleInputChange}
            error={error}
            helperText={helperText}
          />
        )}
        {...props}
      />
    </>
  );
};

export default PlaceAutocomplete;
