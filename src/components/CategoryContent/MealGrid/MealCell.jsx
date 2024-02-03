import { memo } from "react";

import Text from "@components/Text";
import LazyImage from "@components/LazyImage";

const MealCell = memo(function MealCell({ altText, imageUrl }) {
  return (
    <div className="group relative flex flex-col">
      <div className="relative overflow-hidden bg-stone-100 shadow-md rounded-md pb-[100%]">
        <LazyImage
          src={imageUrl}
          alt={altText}
          className="absolute transition ease-in-out delay-150 overflow-hidden group-hover:scale-110 will-change-transform"
        />
      </div>
      <Text
        component={"span"}
        className="w-full pt-2 text-neutral-500 text-wrap text-[12px] sm:text-[12px] md:text-[12px]"
      >
        {altText}
      </Text>
    </div>
  );
});

export default MealCell;
