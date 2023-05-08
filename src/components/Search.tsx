interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}
export default function Search({ search, setSearch }:SearchProps) {
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div className="pt-4 min-[460px]:pt-[48px] min-[460px]:pl-7 md:px-7 flex-1">
      <input
        placeholder={"Search any article"}
        className={`border-[#E7E4EF] border-[1.5px] rounded-xl w-full md:w-[450px] h-[54px] text-lg indent-6 bg-[#FAFAFA]`}
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}
