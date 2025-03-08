"use client";
import { motion } from "framer-motion";
import React from "react";
import CarouselDots from "../carousel-dots";
import Tabs from "../tabs";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import SideMenuItem from "./menuItem";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/app/store/hooks";
import { toggleCollapse } from "@/app/store/collapse";
import Link from "next/link";

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
  const collapse = useAppSelector((state) => state.collapseData.collapse);
  const dispatch = useDispatch();
  return (
    <div
      className={`h-screen xl:h-[calc(100vh-50px)] transition-all duration-300  sticky top-[50px] ${
        collapse ? "xl:w-[100px]" : "xl:w-[320px]"
      } `}
    >
      <div className="h-full w-full relative bg-dashboardBlue pt-5 px-4">
        <div
          className="py-2 hidden xl:flex rounded-sm bg-primary absolute top-10 right-0  z-[10] cursor-pointer"
          onClick={() => dispatch(toggleCollapse())}
        >
          <Image
            src={"/icons/collapse.png"}
            className={`${collapse ? "rotate-180" : ""}`}
            alt=""
            width={10}
            height={10}
          />
        </div>
        <Link href={"/"}>
          <Image
            src={"/icons/left-arrow.png"}
            className="mb-2"
            alt=""
            width={20}
            height={20}
          />
        </Link>
        <section>
          <div className="mb-2">
            <CarouselDots />
          </div>
          <span className="text-white text-base mb-3">Sample Stack</span>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: collapse ? 0.2 : 2 }}
            className={`flex flex-col gap-2 mb-4  ${
              collapse ? "hidden" : "block"
            }`}
          >
            <Tabs data={tabData} />
          </motion.div>
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
          {SidebarData.map((item, idx) => (
            <div key={uuidv4()}>
              <SideMenuItem item={{ ...item, collapse }} />
              <div className="h-[2px] w-full bg-seperator opacity-40" />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
