import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  AllHolidays: [],
  isLoading: false,
};

const url = 'https://date.nager.at/api/v3/AvailableCountries';

export const HolidayFetcher = createAsyncThunk('fetch/Holidays', async () => {
  try {
    const response = await axios(url);
    const resp = response.data;
    return resp;
  } catch (error) {
    throw new Error(error);
  }
});

const HolidaySlice = createSlice({
  name: 'HolidaySlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(HolidayFetcher.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(HolidayFetcher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.AllHolidays = action.payload;
        // console.log(action.payload);
      })
      .addCase(HolidayFetcher.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default HolidaySlice.reducer;
