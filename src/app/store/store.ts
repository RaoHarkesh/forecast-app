import { configureStore } from "@reduxjs/toolkit";
import { collapseSlice } from "./collapse";
import { sidebarSlice } from "./sidebar";
import { chartDetailSlice } from "./detailsSlice/details";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    collapseData: collapseSlice.reducer,
    sidebarData: sidebarSlice.reducer,
    detailsData: chartDetailSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {matrix: MatrixState}
export type AppDispatch = typeof store.dispatch;
