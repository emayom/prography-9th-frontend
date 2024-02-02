import { cn } from "@utils";

const SkeletonMeal = () => {
  return (
    <>
      {Array(16)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className={cn(
              "relative flex aspect-square w-full py-2 px-4 rounded-md shadow-sm bg-stone-100"
            )}
          ></div>
        ))}
    </>
  );
};

export default SkeletonMeal;
