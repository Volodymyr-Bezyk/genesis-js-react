import { useState, useEffect } from 'react';

export const useLocalStorage = (key, currentCourse) => {
  const [courses, setCourses] = useState(() =>
    window.localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : []
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(courses));
    } catch {
      throw new Error();
    }
  }, [key, courses]);

  return [courses, setCourses];
};

export const useLocalStorageOneTime = (key, courseId) => {
  const [lsData] = useState(() =>
    localStorage.getItem(key)
      ? JSON.parse(window.localStorage.getItem(key))
      : []
  );

  const currentProgress = lsData.find(course => course.courseId === courseId);
  if (!currentProgress) {
    return [0, 0];
  }

  return [
    currentProgress.lesson.activeLessonIdx,
    currentProgress.lesson.currentTime,
  ];
};
