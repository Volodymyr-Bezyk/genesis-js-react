import { createSlice } from '@reduxjs/toolkit';

const lessonProgressSlice = createSlice({
  name: 'progress',
  initialState: { progress: [] },

  reducers: {
    updateProgress(state, action) {
      const idx = state.progress.findIndex(
        ({ courseId }) => courseId === action.payload.courseId
      );
      if (idx === -1) {
        state.progress.push(action.payload);
      } else {
        const updatedCourse = {
          courseId: state.progress[idx].courseId,
          lessons: {
            ...state.progress[idx].lessons,
            ...action.payload.lessons,
          },
        };
        state.progress.splice(idx, 1, updatedCourse);
      }
    },
  },
});

export const lessonProgressReducer = lessonProgressSlice.reducer;
export const { updateProgress } = lessonProgressSlice.actions;
