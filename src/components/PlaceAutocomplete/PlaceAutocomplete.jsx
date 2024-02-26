import React from "react";
import { AutocompleteElement } from "../UI";
const PlaceAutocomplete = () => {
  const places = [
    { label: "jaipur", id: "jaipur" },
    { label: "delhi", id: "delhi" },
  ];
  return (
    <AutocompleteElement
      name='place'
      options={places}
    />
  );
};

export default PlaceAutocomplete;
