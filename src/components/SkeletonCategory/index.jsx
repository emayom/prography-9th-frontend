import { cn } from "@utils";

const CategorySkeleton = () => {
  const width = ["w-14", "w-16", "w-20", "w-24", "w-28", "w-32"];

  return (
    <>
      <div className="w-full mb-5">
        <div className="flex items-baseline gap-3 mb-5">
          <h3 className="text-xl font-bold">Category</h3>
        </div>
        <ul className="animate-pulse flex flex-wrap gap-2">
          {Array(15)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "relative flex min-h-9 py-2 px-4 rounded-md shadow-sm border bg-stone-100",
                  width[Math.floor(Math.random() * width.length)]
                )}
              />
            ))}
        </ul>
      </div>
    </>
  );
};
export default CategorySkeleton;
