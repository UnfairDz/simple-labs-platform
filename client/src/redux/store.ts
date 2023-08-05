import { configureStore } from '@reduxjs/toolkit';
import labReducer from './features/labSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    lab: labReducer,
    user: userReducer,
  },
});
