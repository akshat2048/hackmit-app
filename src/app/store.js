import { configureStore } from '@reduxjs/toolkit';
import LVSliceReducer from '../features/LV/LVSlice';
import RVSliceReducer from '../features/RV/RVSlice';

export const store = configureStore({
  reducer: {
    LV: LVSliceReducer,
    RV: RVSliceReducer,
  },
});
