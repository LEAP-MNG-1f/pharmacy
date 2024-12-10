export const PropertyList = ({ property }) => {
  return (
    <div className="flex flex-col w-full h-auto bg-white rounded-2xl p-3 gap-5">
      <div className="flex w-auto h-[215px] rounded-2xl shadow-md p-3">
        <div
          className="w-[248px] h-auto"
          style={{
            backgroundImage: `url(${property.imageUrl || ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px",
          }}
        ></div>
        <div className="flex flex-col w-[248px] h-full pl-4 gap-5">
          <h3 className="text-[#3E4958] text-xl">
            {property.title || "No title"}
          </h3>
          <div className="flex gap-5">
            <div className="flex gap-1 items-center">
              <h1 className="text-[#3E4958]">{property.star || 0}</h1>
            </div>
            <div className="text-black">
              {property.amenities || "No amenitie"}
            </div>
          </div>
          <div className="flex gap-2">
            <h1 className="text-[#3E4958]">
              {property.bedrooms || 0 + " bedroom"}
            </h1>{" "}
            |
            <h1 className="text-[#3E4958]">
              {property.bathrooms || 0 + " bathroom"}
            </h1>
          </div>
          <div className="text-[#3E4958]">{property.type || "No Type"}</div>
        </div>
      </div>
    </div>
  );
};
