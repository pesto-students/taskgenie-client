import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import {
	Box,
	Card,
	Stack,
	FormControl,
	InputLabel,
	TextField,
	Typography,
	Container,
	Button,
	Link,
} from "components/atoms/index.js";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import {
	useSignInMutation,
	useGetProfileStatusQuery,
} from "../../store/apiSlice.jsx";
import LoadingSpinner from "components/molecules/LoadingSpinner/LoadingSpinner.jsx";
import { setTokens, updateProfileStatus } from "../../store/authSlice.jsx";

const SignIn = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const userId = useSelector((state) => state.auth.userId);
	const navigate = useNavigate();
	const location = useLocation();
	const [signIn, { isLoading }] = useSignInMutation();
	const { enqueueSnackbar } = useSnackbar();
	const { data: isProfileComplete, isLoading: isProfileStatusLoading } =
		useGetProfileStatusQuery({ userId });
	// State to manage password visibility
	const [showPassword, setShowPassword] = useState(false);
	const notificationPosition = { vertical: "top", horizontal: "center" };
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { redirect } = queryString.parse(location.search);
	const redirectTo = redirect || "/";
	const onSubmit = async (formData) => {
		const response = await signIn(formData);
		if (response.error) {
			const error = response.error;
			const { data } = error;
			enqueueSnackbar(data.message, {
				variant: "error",
				anchorOrigin: notificationPosition,
			});
		} else {
			dispatch(
				setTokens({
					accessToken: response.data.accessToken,
					refreshToken: response.data.refreshToken,
					user: response.data.user,
				})
			);
			const profileStatus = JSON.parse(response.data.user.isProfileComplete);
			dispatch(updateProfileStatus(profileStatus));
			enqueueSnackbar("Logged In Successfully", {
				variant: "success",
				anchorOrigin: notificationPosition,
			});
			// TODO navigate from here
			navigate(redirectTo, { replace: true });
		}
	};
	if (isProfileStatusLoading) {
		return <LoadingSpinner />;
	} else if (isAuthenticated && isProfileComplete) {
		navigate(redirectTo, { replace: true });
	} else if (isAuthenticated) {
		navigate("/setup-profile");
	}
	return (
		<>
			<Container maxWidth='sm'>
				<Box sx={{ padding: "2rem 0" }}>
					<Link href='/'>
						<Typography
							variant='h5'
							sx={{ fontWeight: "bold", color: "#8659d3" }}
						>
							TaskGenie
						</Typography>
					</Link>
				</Box>
				<Box component={"section"}>
					<Card sx={{ padding: "2rem 1rem" }}>
						<Box component='header'>
							<Typography variant='h4'>Hello.</Typography>
							<Typography variant='subtitle2'>Welcome Back</Typography>
						</Box>
						<Box sx={{ mt: "1rem" }}>
							<form onSubmit={handleSubmit(onSubmit)}>
								<Stack
									gap={"1rem"}
									alignItems={"center"}
								>
									{/* Email */}
									<FormControl>
										<InputLabel>Email</InputLabel>
										<Controller
											name={"email"}
											control={control}
											rules={{ required: "Email is required." }}
											render={({ field }) => (
												<TextField
													{...field}
													type={"email"}
													placeholder='Enter Email'
													autoComplete={"username"}
													fullWidth
													InputProps={{
														startAdornment: (
															<InputAdornment position='start'>
																<EmailOutlinedIcon />
															</InputAdornment>
														),
													}}
													error={Boolean(errors.email)}
													helperText={errors?.email?.message}
												/>
											)}
										/>
									</FormControl>
									{/* Password */}
									<FormControl>
										<InputLabel>Password</InputLabel>
										<Controller
											name={"password"}
											control={control}
											rules={{ required: "Password is required." }}
											render={({ field }) => (
												<TextField
													{...field}
													type={showPassword ? "text" : "password"} // Toggle between text and password
													placeholder='Enter Password'
													inputProps={{
														maxLength: 32,
													}}
													autoComplete={"new-password"}
													InputProps={{
														startAdornment: (
															<InputAdornment position='start'>
																<LockOutlinedIcon />
															</InputAdornment>
														),
														endAdornment: (
															<InputAdornment position='end'>
																<IconButton
																	onClick={() => setShowPassword(!showPassword)}
																	edge='end'
																>
																	{showPassword ? (
																		<VisibilityIcon />
																	) : (
																		<VisibilityOffIcon />
																	)}
																</IconButton>
															</InputAdornment>
														),
													}}
													sx={{
														width: "100%",
													}}
													error={Boolean(errors.password)}
													helperText={errors?.password?.message}
												/>
											)}
										/>
									</FormControl>
									{/* Submit */}
									<FormControl sx={{ marginTop: "2rem" }}>
										<Button
											variant='contained'
											type='submit'
											sx={{
												width: "100%",
											}}
											loading={isLoading}
										>
											Sign In
										</Button>
									</FormControl>
									<Typography>Or</Typography>
									<Typography>
										Don&apos;t have an account?{" "}
										<Link href='/signUp'>Sign Up</Link>
									</Typography>
								</Stack>
							</form>
						</Box>
					</Card>
				</Box>
			</Container>
		</>
	);
};

export default SignIn;
