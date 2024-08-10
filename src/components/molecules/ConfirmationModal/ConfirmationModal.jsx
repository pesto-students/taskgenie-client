import React from "react";
import PropTypes from "prop-types";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
const ConfirmationModal = ({
	title,
	message,
	open,
	handleClose,
	isLoading,
}) => {
	const handleCancel = () => {
		handleClose(false);
	};
	const handleConfirm = () => {
		handleClose(true);
	};
	return (
		<Box>
			<Dialog open={open}>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{message}</DialogContentText>
				</DialogContent>
				<DialogActions>
					{/* Cancel Action */}
					<Button
						color='error'
						onClick={handleCancel}
					>
						Cancel
					</Button>
					{/* Confirm Action */}
					<Button
						autoFocus
						color='success'
						onClick={handleConfirm}
						loading={isLoading}
					>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

ConfirmationModal.propTypes = {
	title: PropTypes.string.isRequired,
	message: PropTypes.string,
	open: PropTypes.bool,
	handleClose: PropTypes.func,
};

export default ConfirmationModal;
