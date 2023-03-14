import { createSelector } from '@reduxjs/toolkit';

export const selectCourses = state => state.courses.courses;
export const selectFilter = state => state.filter;

export const selectFilteredCourses = createSelector(
  [selectCourses, selectFilter],
  (courses, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return courses.filter(({ title }) =>
      title.toLowerCase().includes(normalizedFilter)
    );
  }
);
