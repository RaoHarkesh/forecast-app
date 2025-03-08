"use client";

interface Dotprops {
  id: string;
}

interface props {
  dots: Array<Dotprops>;
}

import { useState } from "react";

export default function CarouselDots({ dots }: props) {
  const [active, setActive] = useState("2");
  return (
    <div className="flex gap-2 w-full">
      {dots.map((dot) => (
        <div
          className={`${
            active === dot.id ? "w-[20px]" : "w-[10px]"
          } h-[10px] transition-all duration-200 rounded-lg bg-primary cursor-pointer`}
          key={dot.id}
          onClick={() => setActive(dot.id)}
        />
      ))}
    </div>
  );
}
