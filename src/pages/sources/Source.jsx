import { useNavigate, useParams } from "react-router-dom";
import { useGetArticleFromSourceQuery } from "../../features/api/apiSlice";
import Back from "../../components/Back";
import NewsList from "../../components/NewsList";
import { FadeLoader } from "react-spinners";

export default function Source() {
    const { sourceId } = useParams();
    const navigate = useNavigate()
  const {
    data: articles,
    isLoading,
    isError,
  } = useGetArticleFromSourceQuery(sourceId);
  console.log(articles, '===================')
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
        <Back handleClick={() => navigate("/")} />
      </div>
      <NewsList
        news={articles}
        search={""}
        setSelectedArticle={{}}
        viewTrending={() => {}}
        title={"source"}
      />
    </>
  );
}
