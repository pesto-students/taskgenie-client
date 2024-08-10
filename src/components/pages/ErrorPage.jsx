import React from "react";
import { Box, Stack } from "@mui/material";
import NotFound from "assets/404Error.svg?react";
import { Typography } from "../atoms";
import { Link } from "react-router-dom";

const CenteredContent = () => {
	return (
		<>
			<Stack
				sx={{
					height: "100vh",
					overflow: "hidden",
					textAlign: "center",
					padding: "2rem",
				}}
			>
				<Typography>
					Go to <Link style={{ textDecoration: "none" }}>Home</Link>
				</Typography>
				<NotFound style={{ height: "inherit" }} />
			</Stack>
		</>
	);
};
export default CenteredContent;
