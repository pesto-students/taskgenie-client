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
		isAuthenticated && useGetProfileStatusQuery();
	const navigate = useNavigate();
	// if user is authenticated and profile is not complete redirect to setup profile
	if (profileStatusLoading) {
		return <LoadingSpinner />;
	} else if (isAuthenticated && !profileStatus) {
		navigate("/setup-profile");
	}
	return <Container {...props}>{children}</Container>;
};

PageWrapper.propTypes = {
	children: PropTypes.node,
};

export default PageWrapper;
