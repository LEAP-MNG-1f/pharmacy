import ListCard from "./ListCard";

const List = ({ selectedLocation }) => {
  const uniqueCities = Array.from(
    new Set(selectedLocation.map((location) => location.name))
  );
  const cityNames =
    uniqueCities.length === 1 ? uniqueCities[0] : uniqueCities.join(", ");

  console.log(selectedLocation.name);
  return (
    <div className="flex flex-col w-full h-[900px] pr-8 gap-5">
      <div className="flex flex-col gap-3 w-full h-auto overflow-y-auto py-2">
        {selectedLocation.map((data) => {
          return (
            <div key={data._id}>
              <ListCard
                key={data._id}
                imageUrl={data?.image}
                categoryId={data?.categoryId}
                name={data?.name}
                type={data?.recipeType}
                balance={data?.balance}
                location={data?.location}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
