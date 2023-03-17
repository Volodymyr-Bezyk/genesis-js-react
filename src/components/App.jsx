import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import theme from 'themes/theme';
import PrivateRoute from 'routes/PrivateRoute';
import RestrictedRoute from 'routes/RestrictedRoure';

const Home = lazy(() => import('pages/Home/'));
const Course = lazy(() => import('pages/Course'));
const DashBoard = lazy(() => import('pages/DashBoard'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/login" component={<Home />} />}
          />
          <Route path="dashboard" element={<DashBoard />} />
          {/* <Route path="course/:courseId" element={<Course />} /> */}
          <Route
            path="course/:courseId"
            element={
              <PrivateRoute redirectTo="/login" component={<Course />} />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute redirectTo="/" component={<Register />} />
            }
          />
          <Route
            path="login"
            element={<RestrictedRoute redirectTo="/" component={<Login />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
