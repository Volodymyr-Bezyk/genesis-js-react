import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1/core/preview-courses';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOGQ1NWJjMy0yNmFhLTQ4YzAtOGExZS1kMjEyMzI2ZGY3ZDgiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4ODI4NDEsImV4cCI6MTY3OTc4Mjg0MX0.-V_omC-Vb0OMYcRT9X5uEc-95mDg8V-ikvkUoUSJlxQ';

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
