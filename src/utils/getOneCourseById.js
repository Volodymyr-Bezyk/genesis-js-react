import axios from 'axios';

export const getOneCourseById = async (controller, courseId) => {
  try {
    const { data } = await axios.get(`/${courseId}`, {
      signal: controller.signal,
    });
    return data;
  } catch (error) {
    return;
  }
};
