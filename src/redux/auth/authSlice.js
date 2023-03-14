import { createSlice } from '@reduxjs/toolkit';
// import { register, login, logout, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  extraReducers: builder => builder,
  //   .addCase(register.fulfilled, authReducers.registerSuccessReducer)
  //   .addCase(login.fulfilled, authReducers.loginSuccessReducer)
  //   .addCase(logout.fulfilled, authReducers.logoutSuccessReducer)
  //   .addCase(refreshUser.pending, authReducers.refreshUserPendingReducer)
  //   .addCase(refreshUser.rejected, authReducers.refreshUserFailReducer)
  //   .addCase(refreshUser.fulfilled, authReducers.refreshUserSuccessReducer),
});

export const authReducer = authSlice.reducer;
