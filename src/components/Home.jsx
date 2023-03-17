import {
  useGetSourcesQuery,
  useGetFeaturedQuery
} from "../features/api/apiSlice";
import { useState } from "react";
import Trending from "./Trending";
import Article from "./Article";
import Search from "./Search";
import SourceList from "./SourceList";
import { FadeLoader } from "react-spinners";

export default function Home() {
  const [selected, setSelected] = useState("trending");
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { isLoading, isError } = useGetFeaturedQuery();
  const { isLoading: sourcesLoading, isError: sourcesError } = useGetSourcesQuery();
  const viewTrending = () => {
    setSelected(selected);
    setSelectedArticle(null);
  };
  if (isError || sourcesError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">There was an error while loading news</h2>
      </div>
    );
  }
  if (isLoading && sourcesLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <FadeLoader color="#6CA4D9" />
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      {!selectedArticle && (
        <div className="flex flex-col pt-4 min-[460px]:pt-0 min-[460px]:flex-row min-[460px]:items-end mb-[44px]">
          <h1 className="text-[40px] text-center min-[460px]:text-left font-extrabold leading-[54px] tracking-[-0.15em]">
            NEWS
          </h1>
          <Search value={search} setSearch={setSearch} />
        </div>
      )}
      {!selectedArticle && selected === "trending" && (
        <Trending
          search={search}
          setSearch={setSearch}
          selectedArticle={selectedArticle}
          setSelectedArticle={setSelectedArticle}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      {selectedArticle && (
        <Article
          title={selectedArticle.title}
          viewTrending={viewTrending}
          description={selectedArticle.description}
          link={selectedArticle.url}
          src={selectedArticle.urlToImage}
          onClick={() => {}}
        />
      )}
      {selected.length > 0 && !selectedArticle && selected !== "trending" && (
        <SourceList
          setSelectedArticle={setSelectedArticle}
          selected={selected}
          setSelected={setSelected}
          search={search}
        />
      )}
    </div>
  );
}
