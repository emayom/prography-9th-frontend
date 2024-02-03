import { memo } from "react";

import Text from "@components/Text";

const MealCell = memo(function MealCell({ name, imageUrl }) {
  return (
    <div className="group relative flex flex-col">
      <div className="relative overflow-hidden bg-stone-100 shadow rounded-md pb-[100%]">
        <img
          src={imageUrl}
          alt={name}
          className="absolute transition ease-in-out delay-150 overflow-hidden group-hover:scale-110"
        />
      </div>
      <Text
        component={"span"}
        className="w-full pt-2 text-neutral-500 text-wrap text-[12px] sm:text-[12px] md:text-[12px]"
      >
        {name}
      </Text>
    </div>
  );
});

export default MealCell;
