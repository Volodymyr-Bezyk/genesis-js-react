import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../../firebase/config';
import { refreshUserData } from './authSlice';
import { setAuthHeader, clearAuthHeader } from 'utils/setAndCleanHeaders';

axios.defaults.baseURL = 'https://api.wisey.app/api/v1';

export const register = createAsyncThunk(
  'user/register',

  async ({ email: userEmail, password, name }, thunkApi) => {
    try {
      await createUserWithEmailAndPassword(auth, userEmail, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const {
        data: { token },
      } = await axios.get('/auth/anonymous?platform=subscriptions');
      setAuthHeader(token);

      const { displayName, email } = auth.currentUser;
      return { user: { name: displayName, email }, token };
    } catch (error) {
      //   toast.error(`${e.message}. Please check your credentials and try again.`);
      return thunkApi.rejectWithValue(error.code, error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async ({ email: userEmail, password }, thunkApi) => {
    try {
      await signInWithEmailAndPassword(auth, userEmail, password);

      const {
        data: { token },
      } = await axios.get('/auth/anonymous?platform=subscriptions');
      setAuthHeader(token);

      const { displayName, email } = auth.currentUser;
      return { user: { name: displayName, email }, token };
    } catch (error) {
      //   toast.error(`${e.message}. Please check your credentials and try again.`);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('user/logout', async (_, thunkApi) => {
  try {
    await auth.signOut();
    clearAuthHeader();
    return;
  } catch (error) {
    console.log(error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});

export const changeUserStateTracker = () => async dispatch => {
  onAuthStateChanged(auth, async user => {
    if (user) {
      const { displayName, email } = user;
      const {
        data: { token },
      } = await axios.get('/auth/anonymous?platform=subscriptions');
      setAuthHeader(token);

      dispatch(
        refreshUserData({
          user: { name: displayName, email },
          token,
          isLoggedIn: true,
          isRefreshing: false,
        })
      );
    } else {
      dispatch(
        refreshUserData({
          user: { name: null, email: null },
          token: null,
          isLoggedIn: false,
          isRefreshing: false,
        })
      );
    }
  });
};
