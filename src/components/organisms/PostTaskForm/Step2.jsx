import { useState } from "react";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import {
	Box,
	FormControl,
	Button,
	TextField,
	InputLabel,
	Stack,
} from "components/atoms";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { validateTask } from "../../../validation/validate";
import { TaskStep2Schema } from "../../../validation/schema/validationSchema";
import TaskImageList from "components/organisms/TaskImageList";
import { usePostTaskMutation } from "store/apiSlice";
import { useNavigate } from "react-router-dom";
import { uploadImages } from "../../../utils";
const Step2 = ({ onSubmit, onPrevious, formData, setFormData }) => {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const [postTask, { loading, error }] = usePostTaskMutation();
	const [errors, setErrors] = useState({});
	const handleDescriptionChange = (event) => {
		const inputValue = event.target.value;
		if (inputValue.length <= 500) {
			setFormData((prevFormData) => ({
				...prevFormData,
				description: inputValue,
			}));
			clearError("description");
		}
	};

	const handleBudgetChange = (event) => {
		const inputValue = event.target.value;
		if (inputValue <= 99000) {
			setFormData((prevFormData) => ({
				...prevFormData,
				budget: inputValue,
			}));
			clearError("budget");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { description, budget } = formData;

			const { isValid, errors } = await validateTask(TaskStep2Schema, {
				description,
				budget,
				imageUrls: [],
			});
			if (isValid) {
				const images = formData.images.map((image) => image.file);
				const imageUrls = await uploadImages(images);
				const taskData = {
					...formData,
					images: imageUrls,
				};
				// upload images to s3
				const response = await postTask(taskData);

				if (response.error) {
					console.log(response.error);
					enqueueSnackbar("Unable to post task", {
						variant: "error",
						anchorOrigin: { vertical: "top", horizontal: "center" },
					});
				} else {
					// Navigate to task
					const taskId = response.data._id;
					navigate(`/myTasks/${taskId}`);
				}
			} else {
				setErrors(errors);
			}
		} catch (error) {
			console.log("Unable to create task");
			enqueueSnackbar("Unable to post Task", {
				variant: "error",
				anchorOrigin: { vertical: "top", horizontal: "center" },
			});
		}
	};

	const clearError = (field) => {
		setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
	};
	const handleAddImage = (compressedImage) => {
		setFormData((prevData) => ({
			...prevData,
			images: [...prevData.images, compressedImage],
		}));
	};

	const handleRemoveImage = (imageToRemove) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			images: prevFormData.images.filter((image) => image !== imageToRemove),
		}));
	};
	return (
		<Box>
			<form onSubmit={handleSubmit}>
				{/* Task Details */}
				<FormControl sx={{ marginTop: "1rem" }}>
					<InputLabel>Description</InputLabel>
					<TextField
						name='description'
						multiline
						rows={4}
						value={formData.description}
						onChange={handleDescriptionChange}
						error={Boolean(errors.description)}
						helperText={errors.description}
						fullWidth
						variant='outlined'
						inputProps={{
							maxLength: 500, // Maximum 500 characters allowed
						}}
					/>
				</FormControl>
				{/* Budget */}
				<FormControl sx={{ marginTop: "1rem" }}>
					<InputLabel>Budget</InputLabel>
					<TextField
						name='budget'
						type='number'
						value={formData.budget}
						onChange={handleBudgetChange}
						error={Boolean(errors.budget)}
						helperText={errors.budget}
						fullWidth
						variant='outlined'
						inputProps={{
							min: 100,
							max: 99000, // Maximum budget allowed is 99,000
						}}
						InputProps={{
							startAdornment: <CurrencyRupeeOutlinedIcon color='primary' />,
						}}
					/>
				</FormControl>
				<FormControl>
					{/* <TaskImagePicker /> */}
					<TaskImageList
						onAddImage={handleAddImage}
						images={formData.images}
						onAddImage={handleAddImage}
						onRemoveImage={handleRemoveImage}
					/>
				</FormControl>
				{/* Form Actions */}
				<FormControl sx={{ marginTop: "2rem" }}>
					<Stack
						direction='row'
						gap={1}
					>
						<Button
							variant='outlined'
							onClick={onPrevious}
							sx={{ flex: 1 }}
						>
							Back
						</Button>
						<Button
							variant='contained'
							sx={{ flex: 1 }}
							type='submit'
							loading={loading}
						>
							Get Quotes
						</Button>
					</Stack>
				</FormControl>
			</form>
		</Box>
	);
};
Step2.propTypes = {
	onSubmit: PropTypes.func,
	onPrevious: PropTypes.func,
	formData: PropTypes.object.isRequired,
	setFormData: PropTypes.func,
};
export default Step2;
