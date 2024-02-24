import PropTypes from "prop-types";
import MuiStepper from "@mui/material/MobileStepper";
import { styled } from "@mui/material/styles";

const StyledStepper = styled(MuiStepper)(() => {
  return {
    // Style here
  };
});

const Stepper = ({ steps, currentStep }) => {
  return (
    <StyledStepper
      variant='dots'
      steps={steps}
      activeStep={currentStep}
      position='static'
      sx={{ maxWidth: 400, flexGrow: 1 }}
    />
  );
};

Stepper.propTypes = {
  steps: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
