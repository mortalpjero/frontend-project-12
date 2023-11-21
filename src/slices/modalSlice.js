import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: 'hidden',
  channelToRemove: null,
  channelToRename: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModal: (state, action) => {
      state.modal = action.payload;
    },
    setChannelToRemove: (state, action) => {
      state.channelToRemove = action.payload;
    },
    setChannelToRename: (state, action) => {
      state.channelToRemove = action.payload;
    },
  },
});

export const {
  changeModal,
  setChannelToRemove,
  setChannelToRename,
} = modalSlice.actions;

export default modalSlice.reducer;
