import { Box, Grid, Typography } from "@mui/material";
import ServiceItem from "components/molecules/ServiceItem";
import HouseCleaning from "assets/cleaning-service.svg?react";
import Shopping from "assets/WindowShopping.svg?react";
import OpenSource from "assets/Open-source.svg?react";
import Electrician from "assets/Electrician.svg?react";
import Section from "components/molecules/Section";

const services = [
	{ title: "House Cleaning", image: <HouseCleaning /> },
	{ title: "Personal Shopper", image: <Shopping /> },
	{ title: "Repairs", image: <Electrician /> },
	{ title: "Website development", image: <OpenSource /> },
];

const PopularServices = () => {
	return (
		<Section
			component='section'
			className='popular-services-section'
		>
			<Box component='header'>
				<Typography variant='h6'>Popular Services</Typography>
			</Box>
			<Box>
				<Grid
					container
					spacing={1}
					marginTop='1rem'
				>
					{services.map((service) => {
						return (
							<Grid
								item
								xs={6}
								md={3}
								key={service.title}
							>
								<ServiceItem
									label={service.title}
									image={service.image}
								/>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Section>
	);
};

export default PopularServices;
