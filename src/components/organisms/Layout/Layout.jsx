import { useEffect, useState } from "react";
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
	const [containerHeight, setContainerHeight] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			const headerHeight = document.querySelector(".header")?.clientHeight || 0;
			const footerHeight = document.querySelector(".footer")?.clientHeight || 0;
			const containerHeight = window.innerHeight - headerHeight - footerHeight;
			setContainerHeight(containerHeight);
		};
		// Add event listener to handle window resize
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Box>
			<Header />
			<Container
				sx={{
					padding: 0,
					height: "100%",
					minHeight: containerHeight,
				}}
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
