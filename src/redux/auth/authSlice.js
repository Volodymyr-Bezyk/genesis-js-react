import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout } from './operations';
import {
  pendingReducer,
  rejectedReducer,
  succesLoginReducer,
  logoutReducer,
  refreshUserDataReducer,
} from './reducers';

const extraActions = [register, login, logout];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  reducers: {
    refreshUserData: refreshUserDataReducer,
  },

  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, succesLoginReducer)
      .addCase(login.fulfilled, succesLoginReducer)
      .addCase(logout.fulfilled, logoutReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer),
});

export const authReducer = authSlice.reducer;
export const { refreshUserData } = authSlice.actions;
