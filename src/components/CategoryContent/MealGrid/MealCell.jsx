import { useState, useEffect, memo } from "react";

import Text from "@components/Text";

const MealCell = memo(function MealCell({ altText, imageUrl }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoaded(true);
  }, [imageUrl]);

  return (
    <div className="group relative flex flex-col">
      <div className="relative overflow-hidden bg-stone-100 shadow-md rounded-md pb-[100%]">
        {loaded && (
          <img
            src={imageUrl}
            alt={altText}
            className="absolute transition ease-in-out delay-150 overflow-hidden group-hover:scale-110 will-change-transform"
          />
        )}
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
