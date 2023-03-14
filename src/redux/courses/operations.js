import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/core/preview-courses';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YTMyNDBmOC05NGYzLTQ4ODQtOGRkNy1jYTMzNjQ2NzUwYWIiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MTE1MTQsImV4cCI6MTY3OTcxMTUxNH0.TuNH5nyTnNMjwZ1yQVKiBkBCoaWA-GuRzhsXBqpra8U';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const fetchAllCourses = createAsyncThunk(
  'courses/fetchAll',
  async (controller, thunkAPI) => {
    try {
      setAuthHeader(token);
      const response = await axios.get('/', {
        signal: controller.signal,
      });
      return response.data.courses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCourseById = createAsyncThunk(
  'course/fetchOneById',
  async ({ path, controller }, thunkAPI) => {
    try {
      const response = await axios.get(path, {
        signal: controller.abort,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
