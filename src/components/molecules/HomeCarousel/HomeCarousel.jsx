import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button, Card, Typography } from "components/atoms";
import { useEffect, useState, useRef } from "react";

// const Item = ({ item }) => {
//   return (
//     <Card sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
//       <Typography variant='h6'>{item.name}</Typography>
//       <Typography variant='subtitle1' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'center', maxWidth: '100%' }}>{item.description}</Typography>

//       <Button
//         className='readMore'
//         sx={{  backgroundColor: theme.palette.primary.light }}
//       >
//         Read More!
//       </Button>
//     </Card>
//   );
// };
const Item = ({ item }) => {
  const descriptionRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if the description text overflows on initial render
  useState(() => {
    const descriptionElement = descriptionRef.current;
    if (descriptionElement) {
      setIsOverflowing(
        descriptionElement.scrollWidth > descriptionElement.clientWidth
      );
    }
  }, [item.description]);

  // Function to handle button click and toggle the expansion
  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      sx={{
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant='h6'>{item.name}</Typography>
      <Typography
        variant='body1'
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: isExpanded ? "normal" : "nowrap", // Set white space to normal when expanded
          textAlign: "center",
          maxWidth: "100%",
          marginBottom: "1rem", // Add some bottom margin for spacing
        }}
        ref={descriptionRef}
      >
        {item.description}
      </Typography>

      {/* Render the button only if the text overflows */}
      {isOverflowing && (
        <Button
          className='readMore'
          sx={{
            backgroundColor: "primary.light",
            color: "white",
            marginTop: "auto",
          }} // Ensure the button is visible with appropriate color and align it to the bottom
          onClick={handleButtonClick} // Toggle expansion on button click
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      )}
    </Card>
  );
};
const testimonials = [
  {
    id: "1",
    name: "Saksham",
    description:
      "I'm thrilled with TaskGenie! The app's user-friendly interface made finding reliable taskers a breeze. The pool of skilled professionals is impressive, and the real-time updates kept me in the loop. TaskMaster has transformed how I tackle tasks—efficient, reliable, and stress-free. Highly recommend! I'm thrilled with TaskGenie! The app's user-friendly interface made finding reliable taskers a breeze. The pool of skilled professionals is impressive, and the real-time updates kept me in the loop. TaskMaster has transformed how I tackle tasks—efficient, reliable, and stress-free. Highly recommend!",
  },
  {
    id: "2",
    name: "Ravi",
    description: "Worked great for me. Helped me earn some good money",
  },
];
const HomeCarousel = () => {
  return (
    <Carousel>
      {testimonials.map((item) => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
