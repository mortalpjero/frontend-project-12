import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: 'hidden',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { changeModal } = modalSlice.actions;

export default modalSlice.reducer;
