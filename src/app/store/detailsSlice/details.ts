import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { chartDataArray } from "./mockData";

type TableRow = {
  title: string;
  id: string;
  data1: number | null;
  data2: number | null;
  data3: number | null;
  data4: number | null;
  data5: number | null;
  data6: number | null;
  data7: number | null;
  data8: number | null;
  data9: number | null;
};

interface DetailsState {
  chartData: {
    labels: Array<string>;
    datasets: Array<{
      label: string;
      data: Array<number | null>;
      borderColor: string;
      backgroundColor: string;
      borderWidth: number;
      tension: number;
      borderDash?: Array<number>;
    }>;
  };
  tableData: Array<TableRow>;
  loading: boolean;
  error: string | null;
}

const initialState: DetailsState = {
  chartData: {
    labels: [],
    datasets: [],
  },
  tableData: [],
  loading: false,
  error: null,
};

export const fetchChartData = createAsyncThunk(
  "fetchChartData",
  async (id: number, { rejectWithValue }) => {
    try {
      await new Promise((res) => {
        setTimeout(() => {
          res("resolved");
        }, 1000);
      });
      return chartDataArray[id];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const chartDetailSlice = createSlice({
  name: "chartDetailPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchChartData.fulfilled,
        (state, action: PayloadAction<(typeof chartDataArray)[number]>) => {
          state.chartData = action.payload;
          state.tableData = action.payload.tableData;
          state.loading = false;
        }
      )
      .addCase(fetchChartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default chartDetailSlice.reducer;
