import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

const RestrictedRoute = ({ redirectTo, component: Component }) => {
  const { isLoggedIn } = useSelector(selectAuth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
