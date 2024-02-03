import useIntersection from "@hooks/useIntersection";

const LazyImage = ({ src, alt, ...props }) => {
  const imageRef = useIntersection(
    () => {
      imageRef.current.src = src;
    },
    { threshold: 0.2 }
  );
  return <img ref={imageRef} alt={alt} {...props} />;
};

export default LazyImage;
