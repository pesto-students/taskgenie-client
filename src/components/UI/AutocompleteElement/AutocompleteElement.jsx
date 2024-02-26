import { AutocompleteElement as ReactFormAutocomplete } from "react-hook-form-mui";
import { styled } from "@mui/material/styles";
import { Box } from "../Box";
const StyledAutoComplete = styled(ReactFormAutocomplete)(() => {
  return {
    backgroundColor: "red",
    border: "4px solid red",
  };
});
const AutocompleteElement = ({ name, options = [], ...props }) => {
  return (
    <Box sx={{ border: "5px solid red" }}>
      <StyledAutoComplete
        name={name}
        options={options}
        {...props}
        sx={{
          border: "5px solid blue",
        }}
      />
      <div>ravi</div>
    </Box>
  );
};

export default AutocompleteElement;
