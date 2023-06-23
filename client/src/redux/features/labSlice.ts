import { createSlice } from '@reduxjs/toolkit';

const initialState: any[] = [];


export const labSlice = createSlice({
  name: 'lab',
  initialState,
  reducers: {
    setLabs: (state, action) => {
      return action.payload;
    },
    createLab: (state, action) => {
      return [...state, action.payload];
    },
    deleteLab: (state, action) => {
      state.splice(action.payload, 1);
    }  
  },

});

export const { setLabs, createLab, deleteLab } = labSlice.actions;


export const selectLabs = (state:any) => state.lab;

export default labSlice.reducer;
