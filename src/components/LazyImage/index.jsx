import { useState } from "react";
import useIntersection from "@hooks/useIntersection";

const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useIntersection(
    () => {
      if (!loaded) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoaded(true);
        };
      }
    },
    { threshold: 0.2 }
  );
  return (
    <div ref={imageRef}>{loaded && <img src={src} alt={alt} {...props} />}</div>
  );
};

export default LazyImage;
