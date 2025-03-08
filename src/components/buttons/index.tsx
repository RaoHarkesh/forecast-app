"use client";
import React from "react";
import { Button as MuiButton } from "@mui/material";

interface props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  children?: React.ReactNode;
  customStyles: string;
}

export default function Button({
  onClick = () => {},
  title = "",
  children = <></>,
  customStyles = "",
}: props) {
  return (
    <MuiButton className={`${customStyles}`} variant="contained">
      {title}
      {children}
    </MuiButton>
  );
}
