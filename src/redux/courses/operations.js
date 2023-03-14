import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://api.wisey.app/api/v1/core';
// axios.defaults.baseURL = '{{host}}/{{version}}/core';

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
      setAuthHeader(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxODY3ZDFhYi1mNWRiLTRkYTAtYjVjZC0yNGEwYjMwYmU2NGQiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4MDkzMjksImV4cCI6MTY3OTcwOTMyOX0.mRsBJcuu-BlXOg-dZezxyLwNsSuAIHzBvUgrZ2Fvkqc'
      );
      const response = await axios.get(
        'https://api.wisey.app/api/v1/core/preview-courses'
        // '{{host}}/{{version}}/core/preview-courses'
        // {
        //   signal: controller.signal,
        // }
      );
      console.log('data', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
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
