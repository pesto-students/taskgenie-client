import { Container, Box } from "@mui/material";
import Header from "components/organisms/Header/Header.jsx";
import { Outlet } from "react-router";
import Footer from "components/organisms/Footer";
// Layout component to get consistent layout experience
const Layout = () => {
  return (
    <Box>
      <Header />
      <Container
        sx={{ padding: 0, height: "100%" }}
        component='section'
        className='page-wrapper'
        maxWidth={"lg"}
      >
        {/* Use outlet to display components in Layout */}
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
