import { configureStore } from '@reduxjs/toolkit';
import { coursesReducer } from './courses/coursesSlice';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    filter: filterReducer,
  },
});
