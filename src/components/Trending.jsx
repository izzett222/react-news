import { useGetFeaturedQuery } from "../features/api/apiSlice";
import NewsList from "./NewsList";
import Source from "./Sources";


export default function Trending({
  search,
  setSelectedArticle,
  selected,
  setSelected,
  viewTrending,
}) {
  const { data:news, isError } = useGetFeaturedQuery();
  if (isError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">There was an error while loading news</h2>
      </div>
    );
  }
  return (
    <div>
      <NewsList
        news={news}
        search={search}
        setSelectedArticle={setSelectedArticle}
        title={selected}
      />
      <div>
        <Source openSource={setSelected} />
      </div>
    </div>
  );
}
