import { useNavigate, useParams } from "react-router-dom";
import { useGetArticleFromSourceQuery, useGetSourcesQuery } from "../../features/api/apiSlice";
import Back from "../../components/Back";
import NewsList from "../../components/NewsList";

export default function Source() {
    const { sourceId } = useParams();
    const navigate = useNavigate()
  const {
    data: articles,
    isLoading,
    isError,
  } = useGetArticleFromSourceQuery(sourceId);
  const { data, isLoading:sourcesLoading } = useGetSourcesQuery(undefined)
  const source = data?.find((source) => source.id === sourceId);
  if (isError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">There was an error while loading news</h2>
      </div>
    );
  }
  return (
    <>
      <div className="-ml-2">
        <Back handleClick={() => navigate("/")} />
      </div>
      <NewsList
        news={articles || [0,1,2,3,4,5,6,7,8,9]}
        isLoading={isLoading || sourcesLoading}
        title={source?.name}
        to={`/source/${sourceId}/article`}
      />
    </>
  );
}
