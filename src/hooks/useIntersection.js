import { useCallback, useEffect, useRef } from "react";

const useIntersection = (onIntersect, options) => {
  const ref = useRef(null);
  const callback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    //cleanup
    return () => observer?.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersection;
