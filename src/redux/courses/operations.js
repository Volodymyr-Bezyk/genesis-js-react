import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/core/preview-courses';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjA4OTVmNi04ZmEzLTQ4MDYtYmYzMi0xZTIyZmEwMDQ1ZWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4NjI0NzUsImV4cCI6MTY3OTc2MjQ3NX0.UI6H3t04-0_tZj3eh9n74-K-qsu2MQ08vCWfYOGf7ig';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
setAuthHeader(token);
// Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const fetchAllCourses = createAsyncThunk(
  'courses/fetchAll',
  async (controller, thunkAPI) => {
    try {
      // TODO: Delete header token
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
  'courses/fetchOneById',
  async ({ controller, courseId }, thunkAPI) => {
    try {
      // TODO: Delete header token
      setAuthHeader(token);
      const response = await axios.get(`/${courseId}`, {
        signal: controller.signal,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
