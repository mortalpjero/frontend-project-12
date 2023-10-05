import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const newMessage = {
        id: action.payload.id,
        body: action.payload.body,
        username: action.payload.username,
        channelId: action.payload.channelId,
      };

      state.messages = [...state.messages, newMessage];
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
