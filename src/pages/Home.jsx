import Trending from "../components/Trending";
import {
  useGetFeaturedQuery,
  useGetSourcesQuery,
} from "../features/api/apiSlice";

export default function Home() {
  const { isLoading, isError, data } = useGetFeaturedQuery();
  const { isLoading: sourcesLoading, isError: sourcesError } =
    useGetSourcesQuery();
  return (
    <Trending
      search={""}
      setSearch={() => ""}
      selectedArticle={{}}
      setSelectedArticle={() => {}}
      selected={"trending"}
      setSelected={() => {}}
    />
  );
}
