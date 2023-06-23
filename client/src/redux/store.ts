import { configureStore } from '@reduxjs/toolkit';
import labReducer from './features/labSlice';

export const store = configureStore({
  reducer: {
    lab: labReducer,
  },
});
