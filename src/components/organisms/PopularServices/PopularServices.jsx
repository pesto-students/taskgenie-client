import { Box, Grid, Typography } from "@mui/material";
import ServiceItem from "components/molecules/ServiceItem";
import HouseCleaning from "assets/cleaning-service.svg?react";
import Shopping from "assets/WindowShopping.svg?react";
import OpenSource from "assets/Open-source.svg?react";
import Electrician from "assets/Electrician.svg?react";
import Section from "components/molecules/Section";

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
          <Grid
            item
            xs={6}
            md={3}
          >
            <ServiceItem
              label={"House Cleaning"}
              image={<HouseCleaning />}
            ></ServiceItem>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
          >
            <ServiceItem
              label={"Personal Shopper"}
              image={<Shopping />}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
          >
            <ServiceItem
              label={"Repairs"}
              image={<Electrician />}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
          >
            <ServiceItem
              label={"Website"}
              image={<OpenSource />}
            />
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
};

export default PopularServices;
