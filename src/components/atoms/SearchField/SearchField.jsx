import React from "react";
import PropTypes from "prop-types";
import { TextField } from "..";
import debounce from "src/utils/debounce";

const SearchField = ({ onSearchTextChange }) => {
	const debouncedOnSearchTextChange = debounce(onSearchTextChange, 500);
	const handleSearchTextChange = (event) => {
		const { value } = event.target;
		if (onSearchTextChange) debouncedOnSearchTextChange(value);
	};
	return (
		<>
			<TextField
				label='Search'
				size='small'
				aria-label='Search'
				onChange={handleSearchTextChange}
			/>
		</>
	);
};

SearchField.propTypes = {
	onSearchTextChange: PropTypes.func,
};

export default SearchField;
