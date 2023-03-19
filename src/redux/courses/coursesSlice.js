import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCourses } from './operations';
import { pendingReducer, rejectedReducer, successReducer } from './reducers';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    isLoading: false,
    isError: null,
    selectedCourse: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCourses.pending, pendingReducer)
      .addCase(fetchAllCourses.fulfilled, successReducer)
      .addCase(fetchAllCourses.rejected, rejectedReducer),
});

export const coursesReducer = coursesSlice.reducer;
