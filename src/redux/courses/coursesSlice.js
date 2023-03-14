import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    courses: [],
    isLoading: false,
    error: null,
    selectedCourse: null,
  },
  // extraReducers: builder => builder.addCase(),
});

export const coursesReducer = coursesSlice.reducer;
