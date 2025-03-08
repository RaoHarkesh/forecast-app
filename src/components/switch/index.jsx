"use client";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Custom switch" } };

export default function CustomSwitch() {
  return <Switch {...label} />;
}
