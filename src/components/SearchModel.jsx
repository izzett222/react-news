import { Dialog } from "@reach/dialog";
import { useEffect, useState } from "react";
import search from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import close from "../assets/close.svg";

export default function SearchModel({ open, updateOpen }) {
  // const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (event) => {

      if (event.key === "k" && event.ctrlKey) {
        event.preventDefault();
        updateOpen()
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [updateOpen]);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateOpen(false);
    navigate(`/search?q=${searchValue}`);
    };
  return (
    open && (
      <Dialog style={{ padding: "0px", marginTop: "160px", zIndex: 100 }}>
        <div className="h-[120px] rounded-sm py-7 px-4 relative">
          <button onClick={() => updateOpen(false)} className="absolute bg-white w-10 h-10 flex items-center justify-center left-[45%] -top-12 rounded-full"><img src={close} className="w-8 h-8" alt="" /></button>
          <form className="w-full max-w-[682px] bg-[#F5F5EE] h-14 flex  items-center pl-6" onSubmit={handleSubmit}>
            <div className="flex gap-2 items-center">
              <img src={search} alt="search" width={20} height={20} />
            </div>
            <input type="text" value={searchValue} onChange={(event)=> setSearchValue(event.target.value)} className="pl-2 bg-transparent inline-block text-[#72716A] text-xs flex-1 h-full outline-none" placeholder="search" />
            <button className="bg-[#FFF200] text-xl text-[#4C4E4D] font-semibold h-full px-[18px]">Search</button>
          </form>
        </div>
      </Dialog>
    )
  );
}
