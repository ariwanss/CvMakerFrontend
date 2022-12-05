import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: 'Title',
  timeStart: '2022-08',
  timeEnd: '2022-10',
  link: 'Link',
  description: []
};

const newItemSlice = createSlice({
  name: 'newItem',
  initialState,
  reducers: {
    editField: (state, action) => {
      state[action.payload.field] = action.payload.value; 
    },
    addDescription: (state, action) => {
      state.description.push(action.payload);
    },
    editDescription: (state, action) => {
      state.description[action.payload.index] = action.payload.value;
    }
  }
});

export default newItemSlice.reducer;

export const {editField, addDescription, editDescription} = newItemSlice.actions;