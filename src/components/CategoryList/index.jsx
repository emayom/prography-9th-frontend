import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

import { api } from "@api/Category";

import Text from "@components/Text";
import SkeletonCategory from "@components/SkeletonCategory";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const { isLoading, error, data } = useQuery("category", () =>
    api.get("/categories.php").then(({ data }) => data.categories)
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const handleChange = useCallback((name) => {
    setActive((state) =>
      state.includes(name)
        ? state.filter((value) => value !== name)
        : [...state, name]
    );
  }, []);

  useEffect(() => {
    if (active.length) {
      searchParams.set("category", active);
    } else {
      searchParams.delete("filter");
      searchParams.delete("category");
    }

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
        {data &&
          data.map(({ idCategory, strCategory }) => (
            <CategoryItem
              key={idCategory}
              category={strCategory}
              isActive={active.includes(strCategory)}
              onChange={handleChange}
            />
          ))}
        {isLoading && <SkeletonCategory />}
        {error && <div> 에러: {error.message} </div>}
      </ul>
    </div>
  );
};

export default CategoryList;
