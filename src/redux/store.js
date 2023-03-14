import { configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/coursesSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
  },
});
