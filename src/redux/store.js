import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/coursesSlice';
import { authReducer } from './auth/authSlice';
import { filterReducer } from './filter/filterSlice';
import { lessonProgressReducer } from './lessonProgress/lessonProgressSlice';

const persistAuthConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistLessonProgressConfig = {
  key: 'progress',
  storage,
  // whitelist: ['progress'],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedLessonProgressReducer = persistReducer(
  persistLessonProgressConfig,
  lessonProgressReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    courses: coursesReducer,
    filter: filterReducer,
    progress: persistedLessonProgressReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
