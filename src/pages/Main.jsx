import Header from "@components/Header";
import CategoryList from "@components/CategoryList";
import CategoryContent from "@components/CategoryContent";

const Main = () => {
  return (
    <>
      <Header />
      <main className="container min-w-[375px] mx-auto px-8 py-2">
        <CategoryList />
        <CategoryContent />
      </main>
    </>
  );
};

export default Main;
