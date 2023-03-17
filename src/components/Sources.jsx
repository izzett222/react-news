import { useGetSourcesQuery } from "../features/api/apiSlice"

export default function Source({ openSource }) {
    const { data, isError } = useGetSourcesQuery()
    if (isError) {
    return (
      <div className="flex flex-1 w-full items-center justify-center">
        <h2 className="text-2xl font-medium">No article found</h2>
      </div>
    );
  }
    return <div className="pt-[54px]">
        <h2 className="text-[26px] mb-2 leading-[1.3]">Sources</h2>
        <ol className="list-decimal grid md:grid-cols-2 lg:grid-cols-3 text-[#434343] font-medium text-[22px] pl-8">
            {data?.sources.map(el => <li key={el.id}><button className="hover:underline" onClick={() => openSource(el.id)}>{el.name}</button></li>)}
        </ol>
    </div>
}