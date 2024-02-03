import ArrowTop from "@assets/arrow_top.svg";

const ScrollTopTopButton = ({ behavior = "smooth" }) => {
  const handleClick = () =>
    window.scroll({
      top: 0,
      behavior,
    });

  return (
    <button
      type="button"
      className="fixed right-4 bottom-4 sm:right-8 md:bottom-8 bg-white/75 border shadow-md rounded-full p-3 sm:p-4 hover:bg-stone-100"
      onClick={handleClick}
    >
      <img src={ArrowTop} className="w-4 sm:w-5" alt="arrow top" />
    </button>
  );
};

export default ScrollTopTopButton;
