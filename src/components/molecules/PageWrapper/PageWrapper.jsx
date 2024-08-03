import React from "react";
import PropTypes from "prop-types";
import { Container } from "src/components/atoms";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetProfileStatusQuery } from "src/store/apiSlice";
import LoadingSpinner from "../LoadingSpinner";

const PageWrapper = ({ children, ...props }) => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const { data: profileStatus, isLoading: profileStatusLoading } =
		useGetProfileStatusQuery();
	const navigate = useNavigate();

	// Handle redirection or loading state based on profile status and authentication
	if (profileStatusLoading) {
		return <LoadingSpinner />;
	} else if (isAuthenticated && !profileStatus) {
		navigate("/setup-profile");
		return <LoadingSpinner />; // or any loading indicator while navigating
	}

	// If everything is loaded and conditions are met, render children
	return <Container {...props}>{children}</Container>;
};

PageWrapper.propTypes = {
	children: PropTypes.node,
};

export default PageWrapper;
