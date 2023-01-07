import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGeoLocationReverse } from '../../API/GeoLocationAPI';

const GET_LOCATION = 'POLLUTIONCHECK/getLocation/GET_LOCATION';
const initialState = null;
export const getLocation = createAsyncThunk(GET_LOCATION, async (arr) => {
  const response = await getGeoLocationReverse(arr[0], arr[1]);
  return response;
});

const LocationSlice = createSlice({
  name: 'LOCATION',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocation.fulfilled, (state, action) => (action.payload))
      .addCase(getLocation.rejected, (state, action) => action.error);
  },

});

export default LocationSlice.reducer;
