import { useRef } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {
	Dialog,
	Button,
	InputLabel,
	FormControl,
	TextField,
} from "components/atoms";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment, useTheme } from "@mui/material";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import { useForm, Controller } from "react-hook-form";
function MakeQuoteModal({ open, onDialogClose, budget }) {
	const theme = useTheme();
	// Reference to the hidden submit button
	const hiddenSubmitButtonRef = useRef();

	// Click handler for the visible submit button
	const handleVisibleSubmitClick = () => {
		hiddenSubmitButtonRef.current.click(); // Trigger the hidden submit button click
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			price: budget,
			message: "",
		},
	});
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	const handleSubmitForm = async (formData) => {
		onDialogClose(formData);
		// Reset form
		reset();
	};
	return (
		<Dialog
			onClose={onDialogClose}
			aria-labelledby='customized-dialog-title'
			open={open}
			fullScreen={fullScreen}
			sx={{ padding: "5rem" }}
		>
			<DialogTitle
				sx={{ m: 0, p: 2 }}
				id='customized-dialog-title'
			>
				Make a Quote
			</DialogTitle>
			<IconButton
				aria-label='close'
				onClick={onDialogClose}
				sx={{
					position: "absolute",
					right: 8,
					top: 8,
					color: (theme) => theme.palette.grey[500],
				}}
			>
				<CloseIcon />
			</IconButton>
			<DialogContent dividers>
				<form onSubmit={handleSubmit(handleSubmitForm)}>
					{/* Quote Price */}

					<FormControl>
						<InputLabel>Price</InputLabel>
						<Controller
							name='price'
							control={control}
							rules={{ required: " Price is required" }}
							render={({ field }) => (
								<TextField
									name='price'
									type='number'
									placeholder='Enter your price for  task'
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<CurrencyRupeeOutlinedIcon />
											</InputAdornment>
										),
									}}
									error={Boolean(errors.price)}
									helperText={errors?.price?.message}
									inputProps={{
										min: Math.floor(0.8 * budget),
										max:
											Math.floor(1.2 * budget) <= 99000
												? Math.floor(1.2 * budget)
												: 99000,
									}}
									{...field}
								/>
							)}
						/>
					</FormControl>

					{/* Quote Message */}

					<FormControl sx={{ marginTop: "2rem" }}>
						<InputLabel>Message</InputLabel>
						<Controller
							name='message'
							control={control}
							rules={{ required: "Message is required" }}
							render={({ field }) => (
								<TextField
									name='message'
									multiline={true}
									rows={4}
									fullWidth
									{...field}
									error={Boolean(errors.message)}
									helperText={errors.message?.message}
									inputProps={{
										maxLength: 200,
									}}
									placeholder='Write a personalised message'
								/>
							)}
						/>
					</FormControl>
					{/* Hidden submit button */}
					<button
						ref={hiddenSubmitButtonRef}
						type='submit'
						style={{ display: "none" }}
					/>
				</form>
			</DialogContent>
			<DialogActions sx={{ padding: "1rem" }}>
				<Button onClick={handleVisibleSubmitClick}>Submit Quote</Button>
			</DialogActions>
		</Dialog>
	);
}

MakeQuoteModal.propTypes = {
	open: PropTypes.bool,
	onDialogClose: PropTypes.func,
	budget: PropTypes.number,
};

export default MakeQuoteModal;
