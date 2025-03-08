"use client";
import * as React from "react";
import Popover from "@mui/material/Popover";

interface Props {
  actionElement: React.ReactNode;
  children: React.ReactNode;
}

export default function CustomPopover({ actionElement, children }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <span
        aria-describedby={id}
        onClick={handleClick}
        className="cursor-pointer"
      >
        {actionElement}
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {children}
      </Popover>
    </div>
  );
}
