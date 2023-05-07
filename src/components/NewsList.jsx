import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Skeleton from "react-loading-skeleton";
export default function NewsList({ title, news, isLoading, isTrending, to }) {
  return (
    <div className="">
      {!title && isLoading ? (
        <div className="w-36">
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <h2 className="text-[30px] tracking-[-2px] after:block after:bg-[#C1BB25] after:h-2.5 after:w-[72px] relative after:absolute after:bottom-2 font-extrabold mb-2">
          <span className="relative z-10 text-[#454541]">{title}</span>{" "}
        </h2>
      )}

      <div className="w-full flex gap-9 h-full">
        <div className="flex-1 h-full">
          {isLoading ? (
            <Skeleton className="w-full h-[453px]" />
          ) : (
            <Carousel isTrending={isTrending} to={to} articles={news?.slice(0, 5)} />
          )}

          <div className="mt-10 flex flex-col gap-4">
            {news?.slice(8, 12).map((article) => {
              if (isLoading) {
                return (
                  <div className="flex gap-[30px]">
                    <Skeleton className="min-w-[200px] h-[120px]" />
                    <div className="flex-1">
                      <Skeleton className="w-full h-[36px] mb-3" />
                      <Skeleton className="w-full h-[24px]" />
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  to={`${to}/${article.id}`}
                  className="flex gap-[30px]"
                  key={article.id}
                >
                  <div className="w-[200px] h-[120px] relative">
                    <img
                      src={article.urlToImage}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3">{article.title}</h4>
                    <p className="text-[#454541] text-sm">
                      {article.description?.slice(0, 90) + "..."}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[300px] flex flex-col gap-6">
          {news?.slice(5, 8).map((article) => {
            if (isLoading) {
              return (
                <div>
                  <Skeleton className="w-full h-[120px] mb-2" />
                  <Skeleton className="w-full h-[43px] mb-2" />
                  <Skeleton className="w-full h-[20px]" />
                </div>
              );
            }

            return (
              <div key={article.id} className="w-full">
                <Link
                  to={`${to}/${article.id}`}
                  className="w-full block h-[120px] relative"

                >
                  <img
                    src={article.urlToImage}
                    className="h-full w-full absolute inset-0 object-cover"
                    alt=""
                  />
                </Link>
                <div className="mt-3">
                  <h4 className="text-[24px] font-bold leading-[1.15]">
                    {article.title?.slice(0, 60) + "..."}
                  </h4>
                  <p className="text-[#454541] text-sm mt-3">
                    {article.description?.slice(0, 90) + "..."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
