import ListCard from "./ListCard";

const List = ({ selectedLocation }) => {
  console.log(selectedLocation);

  // const uniqueCities = Array.from(
  //   new Set(selectedLocation.map((location) => location.name))
  // );
  // const cityNames =
  //   uniqueCities.length === 1 ? uniqueCities[0] : uniqueCities.join(", ");

  console.log(selectedLocation.name);
  return (
    <div className="flex flex-col w-full h-full items-stretch">
      <div key={selectedLocation._id}>
        <ListCard
          key={selectedLocation._id}
          imageUrl={selectedLocation?.image}
          categoryId={selectedLocation?.categoryId}
          name={selectedLocation?.name}
          type={selectedLocation?.recipeType}
          balance={selectedLocation?.balance}
          location={selectedLocation?.location}
        />
      </div>
    </div>
  );
};

export default List;
