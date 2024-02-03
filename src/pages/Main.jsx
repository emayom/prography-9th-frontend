import Header from "@components/Header";
import CategoryList from "@components/CategoryList";
import CategoryContent from "@components/CategoryContent";

const Main = () => {
  return (
    <>
      <div className="container min-w-[375px] max-w-[750px] mx-auto">
        <Header />
        <main className="w-full px-8 py-2">
          <CategoryList />
          <CategoryContent />
        </main>
      </div>
    </>
  );
};

export default Main;
