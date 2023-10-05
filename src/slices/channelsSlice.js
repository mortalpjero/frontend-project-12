import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannel: (state, action) => {
      const newChannel = {
        id: action.payload.id,
        name: action.payload.name,
        removable: action.payload.removable,
      };

      state.channels = [...state.channels, newChannel];
    },
  },
});

export const { addChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
