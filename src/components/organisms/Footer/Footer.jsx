import { useTheme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Section from "components/molecules/Section";
import { Box, Stack, Typography, Container } from "components/atoms";
const Footer = () => {
  const theme = useTheme();
  return (
    <Section
      component='footer'
      className='footer'
      sx={{
        backgroundColor: theme.palette.grey[200],
      }}
    >
      <Container maxWidth='md'>
        <Box>
          <Stack direction='column'>
            <Typography variant='subtitle'>Terms and Conditions</Typography>
            <Typography variant='subtitle'>FAQ</Typography>
            <Typography variant='subtitle'>Community Guidelines</Typography>
            <Typography variant='subtitle'>Contact Us</Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant='h5'>TaskGenie</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{ marginTop: "1rem" }}
            direction='row'
          >
            <GitHubIcon sx={{ marginRight: "0.5rem" }} />
            <InstagramIcon sx={{ marginRight: "0.5rem" }} />
            <TwitterIcon />
          </Stack>
        </Box>
      </Container>
    </Section>
  );
};

export default Footer;
