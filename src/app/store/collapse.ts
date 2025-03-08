import { createSlice } from "@reduxjs/toolkit";

interface CollapseState {
  collapse: boolean;
}

const initialState: CollapseState = {
  collapse: false,
};

export const collapseSlice = createSlice({
  name: "collapse",
  initialState,
  reducers: {
    toggleCollapse: (state) => {
      state.collapse = !state.collapse;
    },
  },
});

export const { toggleCollapse } = collapseSlice.actions;

export default collapseSlice.reducer;
