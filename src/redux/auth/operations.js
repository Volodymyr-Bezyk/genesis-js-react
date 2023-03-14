// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', credentials);
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (e) {
//     //   toast.error(`${e.message}. Please check your credentials and try again.`);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   });

//   export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/login', credentials);
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (e) {
//     //   toast.error(`${e.message}. Please check your credentials and try again.`);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   });

//   export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//     try {
//       await axios.post('/users/logout');
//       clearAuthHeader();
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   });

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
