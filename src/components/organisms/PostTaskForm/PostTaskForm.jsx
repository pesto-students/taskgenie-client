import { useState } from "react";
import { Box, Stepper, Card } from "components/atoms";
import Step1 from "./Step1";
import Step2 from "./Step2";
const PostTaskForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    locationType: "in-person",
    location: null,
    dateType: "on",
    date: null,
    description: "",
    budget: "",
    imageUrls: [],
  });

  const handlePreviousStep = () => {
    if (step == 1) setStep(step - 1);
  };
  const handleSubmitData = () => {
    console.log("check passed", formData);
  };
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handleFormDataChange = (data) => {
    setFormData(data);
  };
  return (
    <Box>
      <Box>
        {/* Stepper */}
        <Stepper
          steps={2}
          currentStep={0}
        />
      </Box>
      <Box>
        {/* Task Creation Steps */}
        <Card sx={{ padding: "1rem" }}>
          {step === 0 && (
            <Step1
              onSubmit={handleNextStep}
              formData={formData}
              setFormData={handleFormDataChange}
            />
          )}
          {step === 1 && (
            <Step2
              onSubmit={handleSubmitData}
              onPrevious={handlePreviousStep}
              setFormData={handleFormDataChange}
              formData={formData}
            />
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default PostTaskForm;
