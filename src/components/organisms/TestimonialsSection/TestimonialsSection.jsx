import Section from "components/molecules/Section";
import { Stack, Box, Typography } from "components/atoms";
import TestimonialsCarousel from "components/molecules/TestimonialsCarousel";
const testimonials = [
  {
    name: "Sneha Desai",
    testimonial:
      "TaskGenie made finding help for my tasks effortless! I needed assistance with event planning, and TaskGenie connected me with a skilled Genie who executed everything flawlessly.",
  },
  {
    name: "Rajesh Kumar",
    testimonial:
      "Being a Genie on TaskGenie has been an incredible experience! I've completed various tasks, from fixing appliances to painting walls, and every interaction has been positive.",
  },
  {
    name: "Ananya Patel",
    testimonial:
      "TaskGenie is a lifesaver! As a busy professional, I often struggle to find time for household chores. TaskGenie came to my rescue by connecting me with reliable Genies who handle my tasks efficiently.",
  },
  {
    name: "Vivek Sharma",
    testimonial:
      "TaskGenie has opened up a world of opportunities for me! Whether it's fixing a leaky faucet or assembling furniture, TaskGenie has allowed me to utilize my skills and earn extra income.",
  },
  {
    name: "Pooja Gupta",
    testimonial:
      "I can't thank TaskGenie enough for simplifying my life! From grocery shopping to pet sitting, TaskGenie has provided me with reliable assistance whenever I needed it.",
  },
];

const TestimonialsSection = () => {
  return (
    <Section
      component='section'
      className='testimonials-section'
    >
      <Box>
        <Typography variant='h5'>Trusted by users across India</Typography>
      </Box>

      <Box>
        <TestimonialsCarousel testimonials={testimonials} />
      </Box>
    </Section>
  );
};

export default TestimonialsSection;
