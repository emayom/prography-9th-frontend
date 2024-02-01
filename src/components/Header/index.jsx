import prographyLogo from "@assets/logos/logo_prography.png";

const Header = () => {
  return (
    <header className="container mx-auto px-8 py-4">
      <a
        className="inline-block w-24 md:w-32 lg:w-40"
        href="/"
        target="_self"
        rel="noreferrer noopener"
      >
        <img src={prographyLogo} alt="Prography logo" />
      </a>
      <div></div>
    </header>
  );
};

export default Header;
