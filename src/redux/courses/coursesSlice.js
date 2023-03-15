import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCourses, fetchCourseById } from './operations';

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
        state.selectedCourse = null;
        state.isLoading = false;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCourseById.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.selectedCourse = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const coursesReducer = coursesSlice.reducer;
