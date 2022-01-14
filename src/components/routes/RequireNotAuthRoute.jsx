import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import authSelectors from "../../redux/auth/authSelectors";

const RequireNotAuthRoute = ({ children, redirectTo }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Redirect to={redirectTo} /> : children;
};

RequireNotAuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RequireNotAuthRoute;
