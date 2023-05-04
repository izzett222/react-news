import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Slider from "react-slick";
export default function NewsList({ title, news, search, isTrending }) {
  const filteredNews = news?.filter((el) => el.title.includes(search));
  console.log(news, "+++++++++++++++++++++++++++++++")
  return (
    <div className="h-40">
      <h2 className="text-[30px] tracking-[-2px] after:block after:bg-[#C1BB25] after:h-2.5 after:w-[72px] relative after:absolute after:bottom-2 font-extrabold mb-2">
        <span className="relative z-10 text-[#454541]">{title}</span>
      </h2>
      <div className="w-full flex gap-9 h-full">
          <div className="flex-1 h-full">
            <Carousel articles={news.slice(0,5)} />
          </div>
        <div className="w-[300px] bg-red-500 h-full"></div>
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
