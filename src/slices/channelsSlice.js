import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  currChannel: {
    id: 1,
    name: 'general',
  },
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
    changeCurrChannel: (state, action) => {
      state.currChannel.id = action.payload.id;
      state.currChannel.name = action.payload.name;
    },
  },
});

export const { addChannel, changeCurrChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
