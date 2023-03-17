export const saveCoursesProgress = (
  coursesProgress,
  currentCourse,
  setCoursesProgress
) => {
  const idx = coursesProgress.findIndex(
    course => course.courseId === currentCourse.courseId
  );
  if (idx === -1) {
    setCoursesProgress(prevCoursesProgress => [
      ...prevCoursesProgress,
      currentCourse,
    ]);
  } else {
    const updatedCourses = coursesProgress.map(course => {
      if (course.courseId !== currentCourse.courseId) {
        return course;
      }
      return { ...currentCourse };
    });
    setCoursesProgress(updatedCourses);
  }
};
