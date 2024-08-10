import { useEffect, useState } from "react";
import { Box, Stepper, Card } from "components/atoms";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const EditTaskForm = ({ taskData, edit = false }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const defaultTitle = queryParams.get("title") || "";
	const [step, setStep] = useState(0);
	const defaultTaskData = {
		title: defaultTitle,
		locationType: "in-person",
		location: null,
		dateType: "on",
		date: null,
		description: "",
		budget: "",
		images: [],
		status: "open",
	};
	const [formData, setFormData] = useState(
		taskData ? taskData : defaultTaskData
	);
	useEffect(() => {
		setFormData(taskData ? taskData : defaultTaskData);
	}, [taskData]);

	const handlePreviousStep = () => {
		if (step > 0) setStep(step - 1); // Check if step is greater than 0 before decrementing
	};
	const handleSubmitData = async () => {};
	const handleNextStep = () => {
		setStep(step + 1);
	};
	const handleFormDataChange = (data) => {
		setFormData(data);
	};

	const handleCancelTask = () => {
		if (edit && taskData._id) navigate(`/tasks/${taskData._id}`);
	};
	return (
		<Box>
			<Box
				sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
			>
				{/* Pass currentStep as step */}
				<Stepper
					steps={2}
					currentStep={step} // Pass the current step state
				/>
			</Box>
			<Box sx={{ paddingTop: "2rem" }}>
				{/* Task Creation Steps */}

				{edit && (
					<Box sx={{ textAlign: "center", paddingBottom: "1rem" }}>
						<Typography>Edit Task</Typography>
					</Box>
				)}
				<Card sx={{ padding: "2rem 1rem" }}>
					{step === 0 && (
						<Step1
							onSubmit={handleNextStep}
							formData={formData}
							setFormData={handleFormDataChange}
							edit={edit}
							onCancel={handleCancelTask}
						/>
					)}
					{step === 1 && (
						<Step2
							onPrevious={handlePreviousStep}
							setFormData={handleFormDataChange}
							formData={formData}
							edit={edit}
						/>
					)}
				</Card>
			</Box>
		</Box>
	);
};

export default EditTaskForm;
