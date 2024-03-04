import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const ProtectedRoutes = ({ element }) => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated === undefined) {
    return null;
  }

  return isAuthenticated ? (
    <div>{element}</div>
  ) : (
    <Navigate
      to='/signin'
      replace
      state={{ from: location }}
    />
  );
};

// Prop validation using PropTypes
ProtectedRoutes.propTypes = {
  element: PropTypes.node.isRequired, // Ensure element prop is required and is a node
};

export default ProtectedRoutes;
