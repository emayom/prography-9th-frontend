import { useState, useEffect, useRef, useMemo } from "react";
import { throttle } from "lodash";

const useScrollDirection = () => {
  const [direction, setDirection] = useState("Down");
  const prevScrollY = useRef(0);
  const handleScroll = useMemo(
    () =>
      /**
       * debounce 대신 throttle를 사용한 이유:
       * 해당 훅은 실시간 스크롤 방향 변화를 제공하기 위한 목적으로 작성되었습니다.
       * 사용자의 스크롤 이벤트의 마지막이 아닌 스크롤 이벤트 시작 방향을 빠르게 전달하여 로직을 처리할 수 있도록 구현되었습니다.
       */
      throttle(() => {
        const current = prevScrollY.current < window.scrollY ? "Down" : "Up";

        if (current !== direction) setDirection(current);

        prevScrollY.current = window.scrollY;
      }, 250),
    [prevScrollY, direction]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return direction;
};

export default useScrollDirection;
