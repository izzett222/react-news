import NewsList from "../components/NewsList";
import Source from "../components/Sources";
import Trending from "../components/Trending";
import {
  useGetFeaturedQuery,
  useGetSourcesQuery,
} from "../features/api/apiSlice";
import { FadeLoader } from "react-spinners";

export default function Home() {
  const { isLoading, isError, data: news } = useGetFeaturedQuery();
  console.log(news, '===================')
  const { isLoading: sourcesLoading, isError: sourcesError } =
    useGetSourcesQuery();
//   if (isError) {
//     return (
//       <div className="flex flex-1 w-full items-center justify-center">
//         <h2 className="text-2xl font-medium">
//           There was an error while loading news
//         </h2>
//       </div>
//     );
//   }
  if (isError || sourcesError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">There was an error while loading news</h2>
      </div>
    );
  }
  if (isLoading && sourcesLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <FadeLoader color="#6CA4D9" />
      </div>
    );
}
  return (
    <div className="h-full">
      <div>
        <Source openSource={() => {}} />
      </div>
      <div className="h-full">
        <NewsList
          news={news}
          search={""}
          setSelectedArticle={() => {}}
          title={"Trending"}
        />
      </div>
    </div>
  );
}
