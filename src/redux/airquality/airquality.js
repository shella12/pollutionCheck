import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getQuality from '../../API/AirQualityAPI';
import getGeoLocation from '../../API/GeoLocationAPI';

const GET_AQI = 'POLLUTIONCHECK/airquality/GET_AQI';
const initialState = null;
export const getAqi = createAsyncThunk(GET_AQI, async (location) => {
  const response = await getGeoLocation(location)
    .then((response) => getQuality(response[0].lat, response[0].lon));
  return response;
});

const AqiSlice = createSlice({
  name: 'AQI',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAqi.fulfilled, (state, action) => (action.payload))
      .addCase(getAqi.rejected, (state, action) => action.error);
  },

});

export default AqiSlice.reducer;
