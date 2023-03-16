import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'utils/setAndCleanHeaders';

export const fetchAllCourses = createAsyncThunk(
  'courses/fetchAll',
  async (controller, thunkAPI) => {
    try {
      // TODO: Коду із отриманням токена тут бути не повинно,
      // оскільки його ми отримуємо після реєстрації або логіну, просто не хочу змушувати Вас реєструватися
      const {
        data: { token },
      } = await axios.get('/auth/anonymous?platform=subscriptions');
      setAuthHeader(token);

      const response = await axios.get('/core/preview-courses', {
        signal: controller.signal,
      });
      return response.data.courses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
