import axios from 'axios';
import { setAuthHeader } from './setAndCleanHeaders';

export const getOneCourseById = async ({ token, controller }, courseId) => {
  try {
    setAuthHeader(token);
    const { data } = await axios.get(`/core/preview-courses/${courseId}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    return;
  }
};
