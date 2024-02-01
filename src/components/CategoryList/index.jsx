import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Text from "@components/Text";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ resource, filter }) => {
  const category = resource.category.read();

  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(filter);

  const handleChange = useCallback((name) => {
    setActive((state) =>
      state.includes(name)
        ? state.filter((value) => value !== name)
        : [...state, name]
    );
  }, []);

  useEffect(() => {
    active.length
      ? searchParams.set("category", active)
      : searchParams.delete("category");

    setSearchParams(searchParams, { replace: true });
  }, [active, searchParams, setSearchParams]);

  return (
    <div className="mb-5">
      <div className="flex items-baseline gap-3 select-none mb-5">
        <h3 className="text-xl font-bold">Category</h3>
        <button type="button" onClick={() => active.length && setActive([])}>
          <Text className="text-gray-400 hover:underline">초기화</Text>
        </button>
      </div>
      <ul className="flex flex-wrap gap-2">
        {category &&
          category.map(({ idCategory, strCategory }) => (
            <CategoryItem
              key={idCategory}
              category={strCategory}
              isActive={active.includes(strCategory)}
              onChange={handleChange}
            />
          ))}
      </ul>
    </div>
  );
};

export default CategoryList;
