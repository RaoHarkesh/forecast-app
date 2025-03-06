"use client";
import React from "react";

interface props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  children?: React.ReactNode;
}

export default function Button({
  onClick = () => {},
  title = "",
  children = <></>,
}: props) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md text-base flex justify-start items-center bg-primary"
    >
      {title}
      {children}
    </button>
  );
}
