import { ToggleButtonGroupElement } from "react-hook-form-mui";
const ToggleButtonGroup = ({ name, options = [], ...props }) => {
  return (
    <ToggleButtonGroupElement
      name={name}
      options={options}
      {...props}
      sx={{}}
    />
  );
};

export default ToggleButtonGroup;
