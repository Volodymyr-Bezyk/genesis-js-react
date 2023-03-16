export const pendingReducer = state => {
  state.isLoading = true;
};

export const rejectedReducer = state => {
  state.isLoading = false;
};

export const succesLoginReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const logoutReducer = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};

export const refreshUserDataReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
};
