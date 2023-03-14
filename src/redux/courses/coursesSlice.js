import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCourses } from './operations';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    isLoading: false,
    error: null,
    selectedCourse: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCourses.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const coursesReducer = coursesSlice.reducer;
