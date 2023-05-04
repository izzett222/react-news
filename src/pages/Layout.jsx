import { Outlet } from "react-router-dom";
import search from "../assets/search.svg";

export default function Layout() {
  return (
    <div className="mx-auto max-w-[1080px] flex flex-col min-h-screen px-4">
      <div className="flex justify-center py-8">
        <button className="w-full max-w-[682px] bg-[#F5F5EE] h-14 flex justify-between items-center px-6">
          <div className="flex gap-2 items-center">
            <img src={search} alt="search" width={20} height={20} />
            <span className="text-[#72716A] text-xs">Search</span>
          </div>
          <div className="text-xs text-[#72716A] flex gap-0.5">
            <p className="bg-white px-1 rounded-s w-fit">ctrl</p>
            <p className="bg-white px-1 rounded-s w-fit">k</p>
          </div>
        </button>
      </div>
      <div className="flex-1 relative">
        <Outlet />
      </div>
    </div>
  );
}
