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
    removeChannel: (state, action) => {
      state.channels = [...state.channels.filter(
        (singleChannel) => singleChannel.id !== action.payload.id,
      )];
    },
    renameChannel: (state, action) => {
      const { id, name } = action.payload;
      state.channels = state.channels.map((channel) => {
        if (channel.id === id) {
          return { ...channel, name };
        }
        return channel;
      });
    },
  },
});

export const {
  addChannel,
  changeCurrChannel,
  removeChannel,
  renameChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;
