"use client";

import React, { useState } from "react";
import CarouselDots from "../carousel-dots";
import Tabs from "../tabs";
import Image from "next/image";
import SideMenuItem from "./menuItem";

const tabData = [
  { label: "backlog", id: "0", count: 238 },
  { label: "pending", id: "1", count: 0 },
  { label: "final signoff", id: "2", count: 0 },
];

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
  {
    id: "4",
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

export default function Sidebar() {
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <div
      className={`h-[calc(100vh-50px)] transition-all duration-300  ${
        collapse ? "w-[100px]" : "w-[320px]"
      } `}
    >
      <div className="h-full w-full relative bg-dashboardBlue pt-5 px-4">
        <div
          className="py-2 rounded-sm bg-primary absolute top-10 -right-[4px] translate-x-1 z-10 cursor-pointer"
          onClick={() => setCollapse(!collapse)}
        >
          <Image
            src={"/icons/collapse.png"}
            className={`${collapse ? "rotate-180" : ""}`}
            alt=""
            width={10}
            height={10}
          />
        </div>
        <Image
          onClick={() => setCollapse(!collapse)}
          src={"/icons/left-arrow.png"}
          className="mb-2"
          alt=""
          width={20}
          height={20}
        />
        <section>
          <div className="mb-2">
            <CarouselDots />
          </div>
          <span className="text-white text-base mb-3">Sample Stack</span>

          <div className="mb-4">
            <Tabs data={tabData} />
          </div>
          <div className="mb-4 flex gap-1 items-center cursor-pointer">
            <span className="text-primary text-[12px] font-bold">Filter</span>
            <div className="flex flex-col items-center">
              <div className="h-[3px] w-4 rounded-md bg-primary mb-[1px]" />
              <div className="h-[3px] w-2 rounded-md bg-primary mb-[1px]" />
              <div className="h-[3px] w-1 rounded-md bg-primary mb-[1px]" />
            </div>
          </div>
        </section>
        <section className="h-[calc(100%-180px)] overflow-auto no-scrollbar">
          {SidebarData.map((item) => (
            <>
              <SideMenuItem key={item.id} item={item} />
              <div className="h-[2px] w-full bg-seperator opacity-40" />
            </>
          ))}
        </section>
      </div>
    </div>
  );
}
