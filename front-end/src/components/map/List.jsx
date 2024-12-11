import ListCard from "./ListCard";

const List = ({ selectedLocation }) => {
  const uniqueCities = Array.from(
    new Set(selectedLocation.map((location) => location.City))
  );
  const cityNames =
    uniqueCities.length === 1 ? uniqueCities[0] : uniqueCities.join(", ");

  return (
    <div className="flex flex-col w-full h-[900px] pr-8 gap-5">
      <div className="flex flex-col gap-3 w-full h-auto overflow-y-auto py-2">
        {selectedLocation.map((data) => {
          return (
            <ListCard
              key={data.cityNames}
              imageUrl={data?.imageUrl}
              title={data?.title}
              star={data?.star}
              type={data?.type}
              bedrooms={data?.bedrooms}
              bathrooms={data?.bathrooms}
              amenities={data?.amenities}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
