export const pendingReducer = state => {
  state.isLoading = true;
};

export const rejectedReducer = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

export const successReducer = (state, action) => {
  state.courses = action.payload;
  state.error = null;
  state.selectedCourse = null;
  state.isLoading = false;
};
