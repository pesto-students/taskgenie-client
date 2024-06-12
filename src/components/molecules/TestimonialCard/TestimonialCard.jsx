import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  useTheme,
  Stack,
  Divider,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function TestimonialCard({ testimonial, name, ...props }) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        margin: "1rem 0",
        height: "20rem",
        width: "15rem",
      }}
      {...props}
    >
      <CardContent>
        <Stack
          alignItems={"center"}
          sx={{ padding: "1rem 0" }}
          gap={1}
        >
          <Typography variant='h6'>{name}</Typography>
        </Stack>
        <Divider />
        <Box sx={{ padding: "1rem 0", textAlign: "center" }}>
          <Typography variant='body2'>
            <FormatQuoteIcon sx={{ color: theme.palette.primary.main }} />
            {testimonial}
            <FormatQuoteIcon sx={{ color: theme.palette.primary.main }} />
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

TestimonialCard.propTypes = {};

export default TestimonialCard;
