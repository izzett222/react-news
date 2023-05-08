import { useSearchParams } from "react-router-dom";
import SearchResults from "../components/SearchResults";

export default function Search() {
  const [searchParam] = useSearchParams();
  const searchValue = searchParam.get("q");

  if (!searchValue) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">Please provide a search value</h2>
      </div>
    );
  }
  return <SearchResults searchValue={searchValue} />;
}
