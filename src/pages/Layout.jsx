import { Link, Outlet } from "react-router-dom";
import search from "../assets/search.svg";
import Source from "../components/Sources";
import { useGetSourcesQuery } from "../features/api/apiSlice";
import SourceSkeleton from "../components/skeletons/SourceSkeleton";

export default function Layout() {
  const { isLoading: sourcesLoading, isError: sourcesError } =
  useGetSourcesQuery();
  return (
    <div className="mx-auto max-w-[1080px] flex flex-col min-h-screen px-4">
      <div className="flex justify-between py-8">
        <div className="relative">
          <div className="absolute right-0 h-14 w-screen bg-[#FFF200]"></div>
          <Link to="/" className="text-[30px] relative z-10 font-extrabold pr-[20px] h-14 text-right flex justify-end items-center bg-[#FFF200] text-[#4C4E4D]">Briefly</Link>
        </div>
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
      <div>
        {sourcesLoading ? <SourceSkeleton /> : <Source openSource={() => {}} />}
      </div>
      <div className="flex-1 relative">
        <Outlet />
      </div>
    </div>
  );
}
