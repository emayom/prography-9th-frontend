import { memo } from "react";

import { cn } from "@utils";
import Text from "@components/Text";

const CategoryItem = memo(function CategoryItem({
  category,
  isActive,
  onChange,
  ...props
}) {
  return (
    <li
      className={cn(
        "relative flex py-2 px-4 rounded-md shadow-sm border",
        "bg-stone-100 hover:bg-stone-200",
        "has-[:checked]:bg-white text-neutral-800"
      )}
      {...props}
    >
      <input
        type="checkbox"
        className="w-full h-full absolute left-0 bottom-0 opacity-0"
        checked={isActive}
        onChange={() => onChange(category)}
      />
      <Text component="span">{category}</Text>
    </li>
  );
});

export default CategoryItem;
