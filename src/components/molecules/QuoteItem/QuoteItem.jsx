import React from "react";
import { Box, Stack, Avatar, Typography } from "components/atoms";
import { Paper } from "@mui/material";
import { useTheme, Skeleton } from "@mui/material";
import { useGetUserNameByIdQuery } from "store/apiSlice";
import { formatAmount } from "src/utils/formatUtils";
const QuoteItem = ({ quote, onClick, isAssigned }) => {
	const { data: genieName, isLoading } = useGetUserNameByIdQuery(quote.userId);
	const theme = useTheme();
	return (
		<Box>
			{isLoading ? (
				<Skeleton height={"80px"} />
			) : (
				<Paper
					sx={{
						padding: "1rem",
						margin: "8px",
						cursor: "pointer",
					}}
					onClick={() => onClick(genieName)}
				>
					<Stack
						direction={{ xs: "column", md: "row" }}
						alignItems='center'
					>
						{/* User Profile Icon */}
						<Stack
							direction='column'
							justifyContent='center'
							alignItems='center'
							sx={{ minWidth: "60px" }}
						>
							<Avatar
								sx={{
									backgroundColor: theme.palette.primary.light,
									height: "30px",
									width: "30px",
								}}
							>
								{genieName?.charAt(0)}
							</Avatar>

							<Typography
								sx={{ flex: 1 }}
								variant='caption'
							>
								{genieName}
							</Typography>
						</Stack>
						{/* Message */}
						<Box sx={{ flex: 1, padding: "8px", textAlign: "justify" }}>
							<Typography variant='body2'>{quote.message}</Typography>
						</Box>
						{/* Price */}
						<Box sx={{ textAlign: "center" }}>
							<Typography
								variant='caption'
								sx={{ color: theme.palette.textLight.main }}
							>
								Budget
							</Typography>
							<Typography
								variant='h6'
								sx={{ flex: 1 }}
							>
								{formatAmount(quote.price)}
							</Typography>
						</Box>
					</Stack>
				</Paper>
			)}
		</Box>
	);
};

export default QuoteItem;
