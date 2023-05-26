import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountryDetails = createAsyncThunk('fetch/Countries Holidays', async ({ url }) => {
  const response = await axios(url);
  return response.data;
});
const initialState = {
  country: [],
  isLoading: false,
};
const InfoCountry = createSlice({
  name: 'InfoCountry',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCountryDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.country = action.payload;
      })
      .addCase(fetchCountryDetails.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default InfoCountry.reducer;
