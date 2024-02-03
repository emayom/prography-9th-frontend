import { cn } from "@utils";
import useScrollDirection from "@hooks/useScrollDirection";
import prographyLogo from "@assets/logos/logo_prography.png";

const Header = () => {
  const direction = useScrollDirection();

  return (
    <header
      className={cn(
        "w-full transition-transform ease-in-out delay-150 sticky top-0 z-10 bg-white",
        direction === "Down" && "translate-y-[-100%]"
      )}
    >
      <div className="min-w-[375px] max-w-[750px] mx-auto px-8 py-4">
        <a
          className="inline-block w-28 md:w-32 lg:w-40"
          href="/"
          target="_self"
          rel="noreferrer noopener"
        >
          <img src={prographyLogo} alt="Prography logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
