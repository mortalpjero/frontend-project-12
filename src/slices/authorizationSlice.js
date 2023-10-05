import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    authorize: (state, action) => {
      state.username = action.payload.username;
    },
  },
});

export const { authorize } = authorizationSlice.actions;

export default authorizationSlice.reducer;
