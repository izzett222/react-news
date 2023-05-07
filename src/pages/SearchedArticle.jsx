import { Link, useNavigate, useParams } from "react-router-dom";
import Back from "../components/Back";
import { useGetSearchResultsQuery } from "../features/api/apiSlice";

export default function SearchedArticle() {
  const { articleId, searchQuery } = useParams();
  const navigate = useNavigate();

  const { data: articles } = useGetSearchResultsQuery(searchQuery);
  const article = articles.find((article) => article.id === articleId);
  const regex = /\[.*\]$/g
  return (
    <div className="pt-8 pb-8 text-[#4C4E4D]">
      <Back
        handleClick={() => {
          navigate("..?q=" + searchQuery);
        }}
      />
      <h1 className="font-medium text-[54px] leading-[1.1] mt-9 mb-3">
        {article.title}
      </h1>
      <p>
        <span className="font-medium">By </span>
        {article.author} | {article.publishedAt.slice(0, 10)}
      </p>
      <div className="my-8 gap-5 w-[70%]">
        <p className="w-full">{article.content.replace(regex, "")}</p>
        <Link target="_blank" className="bg-[#FFF200] font-bold text-xl px-4 py-2.5 mt-8 mb-4 inline-block" to={article.url}>Read more</Link>
      </div>

      <div>
        <img
          src={article.urlToImage}
          className="w-[80%] aspect-[4/2] object-cover"
          alt="article"
        />
      </div>
    </div>
  );
}
