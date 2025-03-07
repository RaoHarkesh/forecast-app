export default function Topbar() {
  return (
    <div className="w-full h-[50px] sticky top-0 bg-secondary px-10 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-white text-base">WebApp</span>
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
