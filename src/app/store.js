import { configureStore } from '@reduxjs/toolkit';
import LVSliceReducer from '../features/LV/LVSlice';
import RVSliceReducer from '../features/RV/RVSlice';
import ChecklistSliceReducer from '../features/Checklist/ChecklistSlice';

export const store = configureStore({
  reducer: {
    LV: LVSliceReducer,
    RV: RVSliceReducer,
    Checklist: ChecklistSliceReducer
  },
});
