export default function NewsList({ title, news, search, setSelectedArticle }) {
  const filteredNews = news?.filter((el) => el.title.includes(search));
  return (
    <div>
      <h2 className="text-[30px] tracking-[-2px] font-medium mb-2">{title}</h2>
      <div className="grid min-[450px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredNews?.length > 0 ? (
          filteredNews?.map((el, i) => {
            return (
              <div
                key={i}
                className="group hover:cursor-pointer"
                onClick={() => setSelectedArticle(el)}
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
              </div>
            );
          })
        ) : (
          <h2 className="text-2xl font-medium">No article found</h2>
        )}
      </div>
    </div>
  );
}
