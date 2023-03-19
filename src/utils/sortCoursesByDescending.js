export const sortCoursesByDescending = courses =>
  courses.sort(
    (firstCourse, secondCourse) =>
      Date.parse(secondCourse.launchDate) - Date.parse(firstCourse.launchDate)
  );
