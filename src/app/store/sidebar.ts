import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SidebarData = [
  {
    id: "0",
    fCast: {
      title: "fcast stab.",
      up: true,
    },
    facc: {
      title: "fcast acc.",
      up: true,
    },
  },
  {
    id: "1",
    fCast: {
      title: "fcast stab.",
      up: true,
    },
    facc: {
      title: "fcast acc.",
      up: true,
    },
  },
  {
    id: "2",
    fCast: {
      title: "fcast stab.",
      up: true,
    },
    facc: {
      title: "fcast acc.",
      up: true,
    },
  },
  {
    id: "3",
    fCast: {
      title: "fcast stab.",
      up: true,
    },
    facc: {
      title: "fcast acc.",
      up: true,
    },
  },
];

interface SidebarItem {
  id: string;
  fCast: {
    title: string;
    up: boolean;
  };
  facc: {
    title: string;
    up: boolean;
  };
}

interface SidebarState {
  active: string;
  data: SidebarItem[];
}

const initialState: SidebarState = {
  active: "0",
  data: SidebarData,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActiveSidebar: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.active = id;
    },
  },
});

export const { setActiveSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
