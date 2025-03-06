import React from "react";

interface props {
  children: React.ReactNode;
}

export default function MaxWidthWrapper({ children }: props) {
  return (
    <div className="flex w-full py-10">
      <div className="w-[90%] max-w-[1500px] mx-auto">{children}</div>
    </div>
  );
}
