import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { selectAuth } from 'redux/selectors';

const PrivateRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn, isRefreshing } = useSelector(selectAuth);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;

// PrivateRoute.propTypes = {
//   redirectTo: PropTypes.string.isRequired,
//   component: PropTypes.object.isRequired,
// };

// && !user.email;
