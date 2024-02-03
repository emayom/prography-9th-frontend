import { useState, useEffect, useRef, useMemo } from "react";
import { throttle } from "lodash";

const useScrollDirection = () => {
  const [direction, setDirection] = useState("Down");
  const prevScrollY = useRef(0);
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        setDirection(prevScrollY.current < window.scrollY ? "Down" : "Up");

        prevScrollY.current = window.scrollY;
      }, 250),
    [prevScrollY]
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
