import Skeleton from "react-loading-skeleton";

export default function SourceSkeleton() {
  return (
    <div className="w-full flex gap-5">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
        <Skeleton key={index} className="min-w-[100px] h-[35px] mb-4" />
      ))}
    </div>
  );
}
