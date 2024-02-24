import { Box } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router";

// Layout component to get consistent layout experience
const Layout = () => {
  return (
    <>
      <Header />
      <Box component='section' className='page-wrapper' >
        {/* Use outlet to display components in Layout */}
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
