import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './Layout';
import theme from 'themes/theme';

const Home = lazy(() => import('pages/Home/'));
const Course = lazy(() => import('pages/Course'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course/:courseId" element={<Course />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
