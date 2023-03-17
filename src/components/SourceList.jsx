import { useGetArticleFromSourceQuery } from "../features/api/apiSlice";
import Back from "./Back";
import NewsList from "./NewsList";
import { FadeLoader } from "react-spinners";

export default function SourceList({
  search,
  setSelectedArticle,
  selected,
  setSelected,
  viewTrending,
}) {
  const {
    data: articles,
    isLoading,
    isError,
  } = useGetArticleFromSourceQuery(selected);
  if (isError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">There was an error while loading news</h2>
      </div>
    );
  }
  return isLoading ? (
    <div className="flex flex-1 w-full items-center justify-center">
      <FadeLoader color="#6CA4D9" />
    </div>
  ) : (
    <>
      <div className="-ml-2">
        <Back onClick={() => setSelected("trending")} />
      </div>
      <NewsList
        news={articles?.articles}
        search={search}
        setSelectedArticle={setSelectedArticle}
        viewTrending={viewTrending}
        title={selected}
      />
    </>
  );
}
