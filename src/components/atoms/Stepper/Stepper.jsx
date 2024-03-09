import PropTypes from "prop-types";
import MuiStepper from "@mui/material/MobileStepper";
import { styled } from "@mui/material/styles";

const StyledStepper = styled(MuiStepper)(() => ({
    display: 'flex',
    justifyContent: 'center',

  "& .MuiMobileStepper-dot": {
    width: '50px',
    borderRadius: '12px',
    backgroundColor: '#e0e0e0',
  },
    "& .MuiMobileStepper-dotActive": {
      backgroundColor: '#8659d3', // Color for active dot
    },
  
    
}));

const Stepper = ({ steps, currentStep }) => {

  // const adjustedActiveStep = currentStep > 0 ? currentStep : 0;

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