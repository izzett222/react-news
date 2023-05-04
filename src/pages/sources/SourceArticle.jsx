import { useNavigate, useParams } from "react-router-dom";
import Back from "../../components/Back";
import { useGetArticleFromSourceQuery } from "../../features/api/apiSlice";

export default function SourceArticle() {
    const { articleId, sourceId } = useParams();
    const navigate = useNavigate()
    console.log(articleId, sourceId);
    const { data:articles } = useGetArticleFromSourceQuery(sourceId);
    console.log(articles, '===================')
    const article = articles.find((article) => article.id === articleId);
  return (
    <div className="pt-8 pb-8">
      <Back handleClick={()=>{ navigate("..")}} />
      <h1 className="font-medium text-[36px] leading-[1.2] my-5">{article.title}</h1>
      <div>
        <img src={article.urlToImage} className="w-full aspect-[5/2] object-cover" alt="article" />
        <div className="flex flex-col sm:flex-row justify-between mt-8 gap-5">
          <p className="w-full sm:w-1/2 md:w-2/3 lg:w-[40%]">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="h-[58px] px-6 w-max text-white font-semibold rounded-md flex items-center text-lg bg-[#6CA4D9]"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
