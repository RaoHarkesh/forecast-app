import { configureStore } from "@reduxjs/toolkit";
import { collapseSlice } from "./collapse";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    collapseData: collapseSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {matrix: MatrixState}
export type AppDispatch = typeof store.dispatch;
