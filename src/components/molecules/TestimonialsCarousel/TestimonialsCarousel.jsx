import { Box } from "components/atoms";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "components/molecules/TestimonialCard";
import { styled } from "@mui/material";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const StyledCarousel = styled(Carousel)(({ theme }) => {
  return {
    "& .react-multi-carousel-item": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
const TestimonialsCarousel = ({ testimonials = [] }) => {
  return (
    <Box>
      <StyledCarousel
        autoPlay={true}
        infinite={true}
        arrows={false}
        partialVisbile={false}
        responsive={responsive}
      >
        {testimonials.map((item, i) => (
          <TestimonialCard
            key={i}
            testimonial={item.testimonial}
            name={item.name}
          />
        ))}
      </StyledCarousel>
    </Box>
  );
};

export default TestimonialsCarousel;
