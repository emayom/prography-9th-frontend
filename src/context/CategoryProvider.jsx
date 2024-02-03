import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { fetchMealByCategory } from "@api/category";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [searchParams] = useSearchParams();

  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [content, setContent] = useState([]);

  const update = (current = 0, total = 0, content = []) => {
    setCurrent(current);
    setTotal(total);
    setContent(content);
  };

  const rearrange = (data, order) => {
    const table = {
      asc: () => data.sort((a, b) => a?.strMeal.localeCompare(b?.strMeal)),
      desc: () => data.sort((a, b) => b?.strMeal.localeCompare(a?.strMeal)),
      new: () => data.sort((a, b) => parseInt(b?.idMeal) - parseInt(a?.idMeal)),
    };

    if (Object.keys(table).includes(order)) {
      return table[order]();
    }
  };

  const getContent = (page, per_page) => {
    const LIMIT = page * per_page;

    setCurrent(LIMIT > content.length ? content.length : LIMIT);

    return content.slice((page - 1) * 20, LIMIT);
  };

  useEffect(() => {
    if (!searchParams.has("category")) {
      update();
    } else {
      const category = searchParams.get("category")?.split(",");
      const filter = searchParams.get("filter");

      (async () => {
        await Promise.all(
          category.map((category) => fetchMealByCategory(category))
        )
          .then((data) => data.flat())
          .then((data) => {
            if (filter) rearrange(data, filter);
            update(0, data.length, data);
          });
      })();
    }
  }, [searchParams]);

  return (
    <CategoryContext.Provider value={{ current, total, content, getContent }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(CategoryContext);
