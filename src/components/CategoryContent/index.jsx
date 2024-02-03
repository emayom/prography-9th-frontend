import { useState, useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import useIntersection from "@hooks/useIntersection";
import useDeviceDetection from "@hooks/useDeviceDetection";
import { useCategoryContext } from "@context/CategoryProvider";

import Text from "@components/Text";
import ScrollTopTopButton from "@components/ScrollToTopButton";

import Filters from "./Filters";
import MealGrid from "./MealGrid";

const PER_PAGE = 20;
const INIT_GRID_COLUMN = 2;

const CategoryContent = () => {
  const device = useDeviceDetection();
  const { current, total, content, getContent } = useCategoryContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const [column, setColumn] = useState(INIT_GRID_COLUMN);
  const [queryKey, setQueryKey] = useState(`category-${Date.now()}`);

  const filter = searchParams.get("filter");
  const category = searchParams.get("category");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const _table = {
      filter: (value) => {
        searchParams.set("filter", value);
        setSearchParams(searchParams);
      },
      column: (column) => setColumn(column),
    }[name](value);
  };

  const { data, error, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({ pageParam = 1 }) => getContent(pageParam, PER_PAGE),
    getNextPageParam: (lastPage, allPages) =>
      lastPage?.length >= PER_PAGE ? allPages.length + 1 : null,
    select: ({ pages, pageParams }) => ({
      pages: pages?.flat(),
      pageParams: pageParams,
    }),
    staletime: 10 * 60 * 1000,
    cachetime: 30 * 60 * 1000,
  });

  const observeRef = useIntersection(() => hasNextPage && fetchNextPage(), {
    threshold: 0.5,
  });

  useEffect(() => {
    setQueryKey(`category-${Date.now()}`);
  }, [content]);

  return (
    <section className="relative">
      <div className="flex align-center justify-between text-gray-900 my-10">
        <Text className="text-gray-500">
          <span className="text-gray-800 font-bold">{current}</span>/
          <span>{total}</span>개 조회
        </Text>
        <Filters device={device} filter={filter} onChange={handleChange} />
      </div>
      <MealGrid data={data} column={device !== "mobile" ? column : 1} />
      {category?.length && <div ref={observeRef}></div>}
      {!category?.length && (
        <div className="text-center">
          <div className="text-2xl mb-1">😅</div>
          <Text className="text-gray-800 text-center">
            앗! 표시할 카테고리 데이터가 없어요.
            <br />
            카테고리를 선택해 주시면 더 많은 정보를 확인하실 수 있어요.
          </Text>
        </div>
      )}
      {error && (
        <Text className="text-red-400">
          문제가 발생했어요! :( <br />
          {error?.message}
        </Text>
      )}
      <ScrollTopTopButton />
    </section>
  );
};

export default CategoryContent;
