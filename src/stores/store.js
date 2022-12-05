import { configureStore } from '@reduxjs/toolkit';
import sectionReducer from './sectionSlice';
import newItemReducer from './newItemSlice';

export default configureStore({
  reducer: {
    sections: sectionReducer,
  }
})
