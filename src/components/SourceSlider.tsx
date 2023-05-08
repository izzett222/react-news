import { Link } from "react-router-dom";
import { useGetSourcesQuery } from "../features/api/apiSlice";
import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";
import { useState } from "react";
import { Source } from "../features/api/types";

export default function SourceSlider() {
  const { data, isError } = useGetSourcesQuery(undefined);
  const [viewed, setViewed] = useState<number>(0);
  const goForward = () => {
    if (typeof data === "undefined") return;
    if (viewed < data.length - 1) {
      setViewed(viewed + 1);
    }
  };
  const goBack = () => {
    if (viewed > 0) {
      setViewed(viewed - 1);
    }
  };
  if (isError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">No article found</h2>
      </div>
    );
  }
  return (
    <div className="border-b-[0.6px] border-b-[#C9C8B2] gap-2 grid grid-cols-sources pb-2.5 mb-4">
      <button onClick={goBack}>
        <img src={arrow} alt="" className="rotate-180 -ml-2-" />
      </button>
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${viewed * 100}%` }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="h-[20px] flex gap-5"
        >
          {data?.map((source:Source) => (
            <div key={source.id}>
              <Link
                to={`/source/${source.id}`}
                className="hover:underline w-max inline-block"
              >
                {source.name}
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
      <button onClick={goForward}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}
