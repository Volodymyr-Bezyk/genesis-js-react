export const getCurrentTimeToVideo = ({ courseId, lessonId, progress }) => {
  const course = progress.find(course => course.id === courseId);
  if (!course) {
    return 0;
  }
  if (!course.lessons[lessonId]) {
    return 0;
  }

  console.log('lessonId', lessonId);
  return course.lessons[lessonId];
};
