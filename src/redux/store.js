import { configureStore } from '@reduxjs/toolkit';
import HolidayReducer from './Holiday/HolidaySlice';
import InfoCountryReducer from './InfoCountry/InfoCountrySlice';

const store = configureStore({
  reducer: {
    allHolidays: HolidayReducer,
    countryDetails: InfoCountryReducer,

  },
});
export default store;
