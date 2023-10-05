import { configureStore } from '@reduxjs/toolkit';
import authorizationSlice from './authorizationSlice';
import channelsSlice from './channelsSlice';
import messagesSlice from './messagesSlice';

export default configureStore({
  reducer: {
    authorizationInfo: authorizationSlice,
    channelsInfo: channelsSlice,
    messagesInfo: messagesSlice,
  },
});
