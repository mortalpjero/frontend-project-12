import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  token: '',
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
});

export const { authorize } = authorizationSlice.actions;

export default authorizationSlice.reducer;
