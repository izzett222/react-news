import { Link, useSearchParams } from "react-router-dom";
import { useGetSearchResultsQuery } from "../features/api/apiSlice";
import Skeleton from "react-loading-skeleton";

export default function Search() {
  const [searchParam] = useSearchParams();
  const { data, isLoading } = useGetSearchResultsQuery(
    encodeURI(searchParam.get("q"))
  );
  const searchValue = searchParam.get("q");
  const articles = data || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <h2 className="text-[30px] tracking-[-2px] after:block after:bg-[#C1BB25] after:h-2.5 after:w-[72px] relative after:absolute after:bottom-2 font-extrabold mb-2">
        <span className="relative z-10 text-[#454541]">
          Search results: {searchValue}
        </span>{" "}
      </h2>
      {articles.length === 0 ? (
        <p>No Articles were found.</p>
      ) : (
        <div className="flex flex-col gap-7">
          {articles.map((article) => {
            if (isLoading) {
              return (
                <div key={article} className="flex gap-4 w-full max-w-[700px]">
                  <Skeleton className="w-[200px] h-[120px]" />
                  <div>
                    <Skeleton className="w-[400px] h-[40px]" />
                    <Skeleton className="w-[400px] h-[20px]" />
                  </div>
                </div>
              );
            }
            return (
              <Link
                to={`/search/${searchValue}/article/${article.id}`}
                key={article.id}
                className="flex flex-col sm:flex-row gap-4 max-w-[700px]"
              >
                <div className="sm:w-[200px] h-[120px] relative">
                  <img
                    src={article.urlToImage}
                    className="w-full absolute top-0 bottom-0 right-0 left-0 object-cover h-full"
                    alt="article"
                  />
                </div>

                <div className="flex-1 ">
                  <h3 className="text-xl leading-[1.15] font-bold text-[#4C4E4D]">
                    {article.title}
                  </h3>
                  <p className="text-[#727674] text-sm mt-1">
                    {article?.source?.name} | {article.publishedAt.slice(0, 10)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
