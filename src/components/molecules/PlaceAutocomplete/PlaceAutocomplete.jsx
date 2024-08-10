import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const PlaceAutocomplete = ({
	onSelectPlace,
	locationType = ["sublocality", "locality"],
	required = false,
	error = false,
	helperText = "",
	defaultPlace,
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
			types: locationType,
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
					loc: [location.lat(), location.lng()],
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
				defaultValue={defaultPlace?.name}
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
	defaultPlace: PropTypes.shape({
		name: PropTypes.string,
		loc: PropTypes.arrayOf(PropTypes.number),
	}),
};

export default PlaceAutocomplete;
