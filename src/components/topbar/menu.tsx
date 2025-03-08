"use client";

import { toggleCollapse } from "@/app/store/collapse";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import Image from "next/image";

export default function MenuToggle() {
  const dispatch = useAppDispatch();
  const collapse = useAppSelector((state) => state.collapseData.collapse);
  return (
    <Image
      onClick={() => dispatch(toggleCollapse())}
      src={"/icons/menu-icon.png"}
      className={`${
        collapse ? "rotate-180" : "rotate-0"
      } transition-all duration-200 block xl:hidden`}
      height={30}
      width={30}
      alt="menu"
    />
  );
}
