import Link from "next/link";
import MenuToggle from "./menu";

export default function Topbar() {
  return (
    <div className="w-full h-[50px] sticky top-0 bg-secondary px-10 py-4 flex justify-between items-center z-10">
      <div className="flex items-center gap-2">
        <MenuToggle />
        <Link href={"/"}>
          <span className="hidden lg:block text-white text-base">WebApp</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div></div>
        <div>
          <span className="text-white text-sm">User</span>
        </div>
      </div>
    </div>
  );
}
