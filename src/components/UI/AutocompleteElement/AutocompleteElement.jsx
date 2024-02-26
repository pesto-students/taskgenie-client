import { AutocompleteElement as ReactFormAutocomplete } from "react-hook-form-mui";
import { styled } from "@mui/material/styles";
import { Box } from "../Box";
const StyledAutoComplete = styled(ReactFormAutocomplete)(() => {
  return {
    backgroundColor: "red",
    border: "4px solid red",
    borderRadius: "12px",
  };
});
const AutocompleteElement = ({ name, options = [], ...props }) => {
  return (
    <Box>
      <StyledAutoComplete
        name={name}
        options={options}
        {...props}
      />
    </Box>
  );
};

export default AutocompleteElement;
