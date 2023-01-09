import { createSlice } from "@reduxjs/toolkit";

const cvSectionsSlice = createSlice({
  name: 'cvSections',
  initialState: {
    entities: ['coursework']
  },
  reducers: {
    sectionAdded: (state, action) => {
      state.push(action.payload);
    }
  }
});

export default cvSectionsSlice.reducer;

export const selectSections = (state) => (state.cvSections.entities);