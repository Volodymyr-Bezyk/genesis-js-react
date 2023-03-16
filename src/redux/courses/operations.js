import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'utils/setAndCleanHeaders';

export const fetchAllCourses = createAsyncThunk(
  'courses/fetchAll',
  async ({ token, controller }, thunkAPI) => {
    try {
      setAuthHeader(token);
      const response = await axios.get('/core/preview-courses', {
        signal: controller.signal,
      });
      return response.data.courses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
