"use client";
import { useAppSelector } from "@/app/store/hooks";
import Sidebar from "@/components/sidebar";

interface props {
  children: React.ReactNode;
}

const DetailsLayout = ({ children }: props) => {
  const collape = useAppSelector((state) => state.collapseData.collapse);
  return (
    <div className="flex">
      <div
        className={`w-[100vw] md:w-[30vw] transition-all duration-300 left-0 z-[100] ${
          collape ? "-translate-x-[100%]" : "translate-x-0"
        } -translate-x-1/2 xl:translate-x-0 xl:w-fit fixed xl:sticky`}
      >
        <Sidebar />
      </div>
      <div className="flex-1 bg-secondary">{children}</div>
    </div>
  );
};

export default DetailsLayout;
