import { useEffect } from "react";
import { Container, Box } from "@mui/material";
import Header from "components/organisms/Header/Header.jsx";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "components/organisms/Footer";
import {
	selectIsAuthenticated,
	selectIsProfileComplete,
} from "src/store/authSlice";
// Layout component to get consistent layout experience
const Layout = () => {
	const navigate = useNavigate();
	const isAuthenticated = useSelector(selectIsAuthenticated);
	const isProfileComplete = useSelector(selectIsProfileComplete);
	// Redirect to setup profile, if user is authenticated but profile is not complete
	useEffect(() => {
		if (isAuthenticated && !isProfileComplete) {
			// Redirect to setup profile
			navigate("/setup-profile");
		}
	}, [navigate]);

	console.log("layout rendered");
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
