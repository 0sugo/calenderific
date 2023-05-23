import { configureStore } from '@reduxjs/toolkit';
import HolidayReducer from './Holiday/HolidaySlice';

const store = configureStore({
  reducer: {
    allHolidays: HolidayReducer,

  },
});
export default store;
