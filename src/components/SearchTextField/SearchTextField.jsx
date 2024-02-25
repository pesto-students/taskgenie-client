import React , {useState} from "react";
import TextField from "../UI/TextField";
import { Autocomplete } from "@mui/material";

const SearchTextField = ({onChange, ...props}) => {

    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);

    const handleInputChange = async (event, value) => {
        setInputValue(value);

        const response = await fetch();

        const data = await response.json();

        if(data.prediction){
            setOptions(data.prediction.map((prediction) => prediction.description));
        }
    };

    return (
        <>
        <Autocomplete freeSolo option={options} renderInput={(params) => (
            <TextField 
            {...params} 
            placeholder="Select Location"
            onChange={handleInputChange}
            InputProps={{...params.InputProps}}
            />
        )} />
        </>
    );
}

export default SearchTextField;