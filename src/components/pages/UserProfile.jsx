import React, { useState, useEffect } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import GradeIcon from "@mui/icons-material/Grade";

import {
	Card,
	CardContent,
	Box,
	Avatar,
	Typography,
	Stack,
	Tabs,
	Chip,
} from "components/atoms";

function UserProfile() {
	const userTypes = [
		{ value: "as-poster", label: "As Poster" },
		{ value: "as-taskGenie", label: "As TaskGenie" },
	];

	const [ratingsType, setRatingsType] = useState("as-poster");
	const [reviewsType, setReviewsType] = useState("as-taskGenie");
	const [reviews, setReviews] = useState([]);

	const handleRatingsTypeChange = (newValue) => {
		setRatingsType(newValue);
	};
	const handleReviewsTypeChange = (newValue) => {
		setReviewsType(newValue);
	};

	// Fetch reviews based on user selection
	const fetchReviews = () => {
		// Example fetch code (replace with your actual fetch logic)

		if (reviewsType === "as-poster") {
			// Fetch reviews for Poster
			const posterReviews = [
				{ id: 1, text: "Great service as a poster!", author: "User1" },
				{ id: 2, text: "Highly recommended for posters.", author: "User2" },
				{ id: 3, text: "Excellent work for posters!", author: "User3" },
			];
			setReviews(posterReviews);
		} else if (reviewsType === "as-taskGenie") {
			// Fetch reviews for TaskGenie
			const taskGenieReviews = [
				{ id: 1, text: "Great service as a TaskGenie!", author: "User1" },
				{ id: 2, text: "Highly recommended for TaskGenies.", author: "User2" },
				{ id: 3, text: "Excellent work for TaskGenies!", author: "User3" },
			];
			setReviews(taskGenieReviews);
		}
	};

	// Call fetch function when reviewsType changes
	useEffect(() => {
		fetchReviews();
	}, [reviewsType]);

	return (
		<>
			{/* Name/Place */}
			<Card sx={{ width: "70%", margin: "auto", height: "10rem" }}>
				<Box sx={{ mt: "1rem" }}>
					<Stack
						direction='column'
						alignItems='center'
						justifyContent='center'
						spacing={2}
					>
						<Avatar>h</Avatar>
						<Typography variant='h5'>Saksham</Typography>

						<Box sx={{ display: "flex", justifyContent: "space-between" }}>
							<FmdGoodOutlinedIcon />
							<Typography variant='subtitle1'>Delhi</Typography>
						</Box>
					</Stack>
				</Box>
			</Card>

			{/* Rating*/}
			<Card
				sx={{
					width: "80%",
					margin: "1rem auto",
					padding: "1rem",
					height: "10rem",
				}}
			>
				<Tabs
					value={ratingsType}
					label={userTypes.label}
					//  defaultValue={tab}
					options={userTypes}
					onChange={handleRatingsTypeChange}
					sx={{ justifyContent: "center", mt: "1rem" }}
				/>

				<Box
					sx={{ mt: "1rem", display: "flex", justifyContent: "space-around" }}
				>
					<Box
						sx={{ mt: "1rem", display: "flex", justifyContent: "space-around" }}
					>
						<Typography variant='subtitle2'>Rating</Typography>
						<Chip
							label='4.2'
							sx={{ ml: "0.5rem" }}
							icon={<GradeIcon />}
						/>
					</Box>

					<Box
						sx={{ mt: "1rem", display: "flex", justifyContent: "space-around" }}
					>
						<Typography variant='subtitle2'>Completion Rate</Typography>
						<Chip
							label='92 %'
							sx={{ ml: "0.5rem" }}
						/>
					</Box>
				</Box>
			</Card>

			{/* Reviews*/}

			<Card sx={{ width: "90%", margin: "auto", padding: "1rem" }}>
				<Typography variant='h5'>Reviews</Typography>
				<Tabs
					value={reviewsType}
					label={userTypes.label}
					//  defaultValue={tab}
					options={userTypes}
					onChange={handleReviewsTypeChange}
					sx={{ justifyContent: "center", mt: "1rem" }}
				/>

				<Card sx={{ mt: "1rem", display: "flex", flexDirection: "column" }}>
					{reviews.map((review) => (
						<CardContent
							key={review.id}
							sx={{
								mt: "1rem",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around",
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
								}}
							>
								<Avatar>h</Avatar>
								<Typography
									variant='subtitle2'
									sx={{ paddingLeft: "1rem" }}
								>
									{review.author}
								</Typography>
							</Box>

							<Typography variant='body1'>{review.text}</Typography>
						</CardContent>
					))}
				</Card>
			</Card>
		</>
	);
}

export default UserProfile;
