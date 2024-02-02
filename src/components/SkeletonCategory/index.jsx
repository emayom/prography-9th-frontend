import { cn } from "@utils";

const SkeletonCategory = () => {
  const width = ["w-14", "w-16", "w-20", "w-24", "w-28", "w-32"];

  return (
    <>
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
    </>
  );
};
export default SkeletonCategory;
