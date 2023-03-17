import { createSelector } from '@reduxjs/toolkit';

export const selectCourses = state => state.courses.courses;
export const selectCourseById = state => state.courses.selectedCourse;
export const selectFilter = state => state.filter;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFilteredCourses = createSelector(
  [selectCourses, selectFilter],
  (courses, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return courses.filter(({ title }) =>
      title.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectAuth = createSelector(
  [selectIsLoggedIn, selectUser, selectIsRefreshing],
  (isLoggedIn, user, isRefreshing) => ({ isLoggedIn, user, isRefreshing })
);
