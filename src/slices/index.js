import { configureStore } from '@reduxjs/toolkit';
import authorizationSlice from './authorizationSlice';

export default configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    authorizationInfo: authorizationSlice,
  },
});
