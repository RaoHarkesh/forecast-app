"use client";

import React, { useState } from "react";

export default function Sidebar() {
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <div
      className={`h-[calc(100vh-50px)] transition-all duration-300 ${
        collapse ? "w-[100px]" : "w-[280px]"
      } `}
    >
      <div className="h-full w-full relative bg-secondary">
        <span
          className="absolute top-10 right-0 translate-x-1/2"
          onClick={() => setCollapse(!collapse)}
        >
          {"<--"}
        </span>
      </div>
    </div>
  );
}
