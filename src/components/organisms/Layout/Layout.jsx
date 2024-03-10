import { Container } from "@mui/material";
import Header from "components/organisms/Header/Header.jsx";
import { Outlet } from "react-router";

// Layout component to get consistent layout experience
const Layout = () => {
  return (
    <>
      <Header />
      <Container
        sx={{ padding: 0, height: "100%" }}
        component='section'
        className='page-wrapper'
        maxWidth={"md"}
      >
        {/* Use outlet to display components in Layout */}
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
