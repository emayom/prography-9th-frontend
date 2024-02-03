import MealCell from "./MealCell";

const MealGrid = ({ data, column }) => {
  const gridVariant = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    4: "grid-cols-4",
  };

  return (
    <>
      <div className={`grid gap-5 mb-5 ${gridVariant[column]}`}>
        {data &&
          data?.pages.map(({ idMeal, strMeal, strMealThumb }) => (
            <MealCell key={idMeal} altText={strMeal} imageUrl={strMealThumb} />
          ))}
      </div>
    </>
  );
};

export default MealGrid;
