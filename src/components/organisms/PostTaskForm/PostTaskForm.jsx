import { useState } from "react";
import { Box, Stepper, Card } from "../../UI";
import Step1 from "./Step1";
import Step2 from "./Step2";

const PostTaskForm = ({ onSubmit }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const handleNextStep = (data) => {
    setFormData({ ...formData, data });
    setStep(step + 1);
  };
  const handleSubmitData = (data) => {
    onSubmit(data);
  };
  return (
    <Box>
      <Box>
        {/* Stepper */}
        <Stepper
          steps={2}
          currentStep={step}
        />
      </Box>
      <Box>
        {/* Task Creation Steps */}
        <Card sx={{ padding: "1rem" }}>
          {step === 0 && <Step1 onSubmit={handleNextStep} />}
          {step === 1 && <Step2 onSubmit={handleNextStep} />}
        </Card>
      </Box>
    </Box>
  );
};

export default PostTaskForm;
