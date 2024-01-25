import { Container } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router";

// Layout component to get consistent layout experience
const Layout = () => {
  return (
    <>
      <Header />
      <Container component='section' className='page-wrapper'>
        {/* Use outlet to display components in Layout */}
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
