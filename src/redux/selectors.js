import { createSelector } from '@reduxjs/toolkit';

export const selectCourses = state => state.courses.courses;
export const selectCourseById = state => state.courses.selectedCourse;
export const selectCoursesError = state => state.courses.isError;
export const selectFilter = state => state.filter;
export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoadingAuth = state => state.auth.isLoading;

// export const selectSortedCourses = createSelector([selectCourses], courses => {
//   const sortedCourses = courses.sort(
//     (firstCourse, secondCourse) =>
//       Date.parse(secondCourse?.launchDate ?? 0) -
//       Date.parse(firstCourse?.launchDate ?? 0)
//   );
// });

export const selectFilteredCourses = createSelector(
  [selectCourses, selectFilter],
  (courses, filter) => {
    const normalizedFilter = filter.toLowerCase();

    // courses.map(course => console.log(Date.parse(course.launchDate)));
    // courses.sort(
    //   (firstCourse, secondCourse) =>
    //     Date.parse(secondCourse.launchDate) - Date.parse(firstCourse.launchDate)
    // );

    // console.log('sorted', courses);

    return courses.filter(({ title }) =>
      title.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const selectAuth = createSelector(
  [selectIsLoggedIn, selectUser, selectIsRefreshing],
  (isLoggedIn, user, isRefreshing) => ({ isLoggedIn, user, isRefreshing })
);
