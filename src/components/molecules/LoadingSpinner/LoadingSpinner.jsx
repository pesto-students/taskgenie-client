import React from "react";
import { CircularProgress, Box } from "@mui/material";
const LoadingSpinner = () => {
	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
			}}
		>
			<Box sx={{ margin: "auto", maxWidth: "100px" }}>
				<CircularProgress />
			</Box>
		</Box>
	);
};

export default LoadingSpinner;
