import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from "uuid";

const dataArray = [
  {
    id: uuidv4(),
    cityName: "City 1",
    forecastCount: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    foreCastPercentage: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
  },
  {
    id: uuidv4(),
    cityName: "City 2",
    forecastCount: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    foreCastPercentage: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
  },
  {
    id: uuidv4(),
    cityName: "City 3",
    forecastCount: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    foreCastPercentage: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
  },
  {
    id: uuidv4(),
    cityName: "City 4",
    forecastCount: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    foreCastPercentage: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
  },
  {
    id: uuidv4(),
    cityName: "City 5",
    forecastCount: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    foreCastPercentage: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
  },
  {
    id: uuidv4(),
    cityName: "City 6",
    forecastCount: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    foreCastPercentage: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
  },
  {
    id: uuidv4(),
    cityName: "City 7",
    forecastCount: Math.floor(Math.random() * (200 - 50 + 1)) + 50,
    foreCastPercentage: Math.floor(Math.random() * (90 - 10 + 1)) + 10,
  },
];

interface WidgetState {
  loading: boolean;
  data: Array<{
    id: string;
    forecastCount: number;
    foreCastPercentage: number;
    cityName: string;
  }>;
}

const initialState: WidgetState = {
  data: [],
  loading: false,
};
export const fetchWidgetData = createAsyncThunk(
  "widgets",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

      return dataArray;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

export const widgetSlice = createSlice({
  name: "chartDetailPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWidgetData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWidgetData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchWidgetData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default widgetSlice.reducer;
