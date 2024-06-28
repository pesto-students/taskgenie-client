import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PlaceAutocomplete from "components/molecules/PlaceAutocomplete";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
	Box,
	Typography,
	Container,
	Stack,
	Button,
	InputLabel,
	Card,
	FormControl,
	TextField,
	ToggleButtonGroup,
} from "components/atoms";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import {
	useGetProfileStatusQuery,
	useSetupProfileMutation,
} from "../../store/apiSlice.jsx";
import { logout } from "../../store/authSlice.jsx";
import LoadingSpinner from "../molecules/LoadingSpinner/LoadingSpinner.jsx";

const choiceTypes = [
	{ value: "post-task", label: "Post Task" },
	{ value: "find-task", label: "Find Task" },
];
const SetUpProfile = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const { data: profileStatus, isLoading: profileStatusLoading } =
		useGetProfileStatusQuery();
	console.log("profileStatus", profileStatus);
	const navigate = useNavigate();
	const [setupProfile, { isLoading: setupProfileLoading }] =
		useSetupProfileMutation();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
		},
	});
	const [choice, setChoice] = useState("post-task");
	const [city, setCity] = useState(null);
	// UseEffect

	const handleChoiceTypeChange = (newChoice) => {
		setChoice(newChoice);
	};

	const handleOnSelectPlace = (place) => {
		setCity(place.label);
	};

	const handleClose = () => {
		dispatch(logout());
		navigate("/");
	};

	const onSubmit = async (formData) => {
		try {
			const combinedData = {
				...formData,
				city,
				isProfileComplete: true,
			};
			await setupProfile(combinedData);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	if (!isAuthenticated) {
		return navigate("/");
	} else if (profileStatusLoading) {
		return <LoadingSpinner />;
	} else if (profileStatus) {
		navigate("/");
	}
	return (
		<>
			<Container>
				<Box sx={{ padding: "2rem 0" }}>
					{/* Header */}
					<Typography
						variant='h5'
						sx={{ fontWeight: "bold", color: "#8659d3" }}
					>
						TaskGenie
					</Typography>
				</Box>
				<Box component={"section"}>
					<Card sx={{ padding: "2rem 1rem", position: "relative" }}>
						<CloseOutlinedIcon
							sx={{
								position: "absolute",
								top: "5px",
								right: "5px",
								cursor: "pointer",
							}}
							onClick={handleClose}
						/>
						<Box component='header'>
							<Typography variant='h5'>Setup your account</Typography>
						</Box>
						<Box sx={{ mt: "1rem" }}>
							{/* Form1 */}

							<form onSubmit={handleSubmit(onSubmit)}>
								<Stack
									gap={"1rem"}
									alignItems={"center"}
								>
									{/* First Name */}
									<FormControl>
										<InputLabel>First Name</InputLabel>
										<Controller
											name={"firstName"}
											control={control}
											rules={{
												required: "First Name is required.",
											}}
											render={({ field }) => (
												<TextField
													{...field}
													type={"text"}
													placeholder='Eg. Syntax'
													sx={{
														width: "100%",
													}}
													inputProps={{
														maxLength: 20,
													}}
													error={Boolean(errors.firstName)}
													helperText={errors?.firstName?.message}
												/>
											)}
										/>
									</FormControl>

									{/* Last Name */}
									<FormControl>
										<InputLabel>Last Name</InputLabel>
										<Controller
											name={"lastName"}
											control={control}
											rules={{
												required: "Last Name is required.",
											}}
											render={({ field }) => (
												<TextField
													{...field}
													type={"text"}
													inputProps={{
														maxLength: 20,
													}}
													placeholder='Eg. Sculptors'
													sx={{
														width: "100%",
													}}
													error={Boolean(errors.lastName)}
													helperText={errors?.lastName?.message}
												/>
											)}
										/>
									</FormControl>

									{/* City */}
									<FormControl>
										<InputLabel>City</InputLabel>
										<PlaceAutocomplete
											locationType={["locality"]}
											onSelectPlace={handleOnSelectPlace}
										/>
									</FormControl>

									{/* Post/Find Task */}
									<FormControl sx={{ marginTop: "2rem" }}>
										<InputLabel
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											You want to?
										</InputLabel>
										<ToggleButtonGroup
											name='choice'
											value={choice}
											defaultValue={choice}
											options={choiceTypes}
											onChange={handleChoiceTypeChange}
											sx={{
												justifyContent: "center",
												mt: "1rem",
											}}
										></ToggleButtonGroup>
									</FormControl>

									{/* Finish Setting up */}
									<FormControl sx={{ marginTop: "2rem" }}>
										<Button
											variant='contained'
											sx={{ width: "100%" }}
											type='submit'
											loading={setupProfileLoading}
										>
											Finish setting up!
										</Button>
									</FormControl>
								</Stack>
							</form>
						</Box>
					</Card>
				</Box>
			</Container>
		</>
	);
};

export default SetUpProfile;
