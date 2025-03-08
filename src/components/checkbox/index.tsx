import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CustomCheckbox() {
  return (
    <div>
      <Checkbox
        sx={{
          paddingY: 0,
          color: "#8E979B", // Default border color
        }}
        {...label}
      />
    </div>
  );
}
