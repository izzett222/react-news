import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Slider from "react-slick";
export default function NewsList({ title, news, search, isTrending }) {
  const filteredNews = news?.filter((el) => el.title.includes(search));
  console.log(news, "+++++++++++++++++++++++++++++++")
  return (
    <div className="">
      <h2 className="text-[30px] tracking-[-2px] after:block after:bg-[#C1BB25] after:h-2.5 after:w-[72px] relative after:absolute after:bottom-2 font-extrabold mb-2">
        <span className="relative z-10 text-[#454541]">{title}</span>
      </h2>
      <div className="w-full flex gap-9 h-full">
          <div className="flex-1 h-full">
            <Carousel articles={news.slice(0,5)} />
            <div className="mt-10 flex flex-col gap-4">
              {
                news.slice(8, 12).map(article => {
                  return <Link to={`/article/${article.id}`} className="flex gap-[30px]" key={article.id}>
                    <div className="w-[200px] h-[120px] relative">
                      <img src={article.urlToImage} className="absolute inset-0 w-full h-full object-cover" alt="" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-3">{article.title}</h4>
                      <p className="text-[#454541] text-sm">{article.description.slice(0, 90) + "..."}</p>
                    </div>
                  </Link>
                })
              }
            </div>
          </div>
        <div className="w-[300px] flex flex-col gap-6">
          {
            news.slice(5,8).map(article => {
              return <div key={article.id} className="w-full">
                <Link to={`/article/${article.id}`} className="w-full block h-[120px] relative">
                  <img src={article.urlToImage} className="h-full w-full absolute inset-0 object-cover" alt="" />
                </Link>
                <div className="mt-3">
                  <h4 className="text-[24px] font-bold leading-[1.15]">{article.title.slice(0,60) + "..."}</h4>
                  <p className="text-[#454541] text-sm mt-3">{article.description.slice(0, 90) + "..."}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
      {/* <div className="grid min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredNews?.length > 0 ? (
          filteredNews?.map((el) => {
            return (
              <Link
                key={el.id}
                to={`${isTrending ? "/" : ""}article/${el.id}`}
                className="group hover:cursor-pointer"
              >
                <div className="aspect-square">
                  <img
                    src={el.urlToImage}
                    alt=""
                    className="w-full h-full block object-cover rounded-md group-hover:brightness-75 duration-200"
                  />
                </div>

                <p className="h-[46px] overflow-hidden text-ellipsis duration-200 block group-hover:underline group-hover:cursor-pointer">
                  {el.title}
                </p>
              </Link>
            );
          })
        ) : (
          <h2 className="text-2xl font-medium">No article found</h2>
        )}
      </div> */}
    </div>
  );
}
