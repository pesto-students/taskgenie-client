import HomeCarousel from "components/molecules/HomeCarousel";
import Section from "components/molecules/Section";
import { Box, Typography, Stack } from "components/atoms";
const TestimonialsSection = () => {
  return (
    <Section
      component='section'
      className='testimonials-section'
      sx={
        {
          // height: "4rem",
        }
      }
    >
      <Box>
        <Typography variant='h5'>Testimonials</Typography>
      </Box>
      <Box>
        <Stack
          sx={{ marginTop: "1rem" }}
          direction='column'
          gap={1}
        >
          <HomeCarousel />
        </Stack>
      </Box>
    </Section>
  );
};

export default TestimonialsSection;
