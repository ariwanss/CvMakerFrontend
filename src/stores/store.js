import { configureStore } from '@reduxjs/toolkit';
import cvItemsReducer from './cvItemsSlice';
import cvSectionsReducer from './cvSectionsSlice'

export default configureStore({
  reducer: {
    cvItems: cvItemsReducer,
    cvSections: cvSectionsReducer
  }
})
