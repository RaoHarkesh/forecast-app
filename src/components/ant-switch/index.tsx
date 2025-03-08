"use client";
import { styled, Switch } from "@mui/material";
import { useState } from "react";

interface AntSwitchProps {
  element?: React.ReactNode;
}

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  alignItems: "center",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& .MuiSwitch-thumb": {
        backgroundColor: "#0D1419",
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1890ff",
        border: "2px solid #999C9E",
        ...theme.applyStyles?.("dark", {
          backgroundColor: "#177ddc",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: "#999C9E",
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: "rgba(0,0,0,.25)",
    border: "2px solid #999C9E",
    boxSizing: "border-box",
    ...theme.applyStyles?.("dark", {
      backgroundColor: "rgba(255,255,255,.35)",
    }),
  },
}));

const AntSwitch: React.FC<AntSwitchProps> = ({ element }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => setActive(!active)}
    >
      <StyledSwitch checked={active} />
      {element && <div>{element}</div>}
    </div>
  );
};

export default AntSwitch;
