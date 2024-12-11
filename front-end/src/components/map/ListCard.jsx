import { StarIcon } from "../svg/Star";

const ListCard = ({ imageUrl, name, ObjectId, type, balance, location }) => {
  return (
    <div className="flex flex-col w-full h-auto bg-white rounded-2xl p-3 gap-5">
      <div className="flex w-auto h-[215px] rounded-2xl shadow-md p-3">
        <div
          className="w-[248px] h-auto"
          style={{
            backgroundImage: `url(${imageUrl || ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "16px",
          }}
        ></div>
        <div className="flex flex-col w-[248px] h-full pl-4 gap-5">
          <h3 className="text-[#3E4958] text-xl">{name || "No title"}</h3>
          <div className="flex gap-5">
            <div className="flex gap-1 items-center">
              <StarIcon /> <h1 className="text-[#3E4958]">{ObjectId || 0}</h1>
            </div>
            <div className="text-black">{balance || "No amenitie"}</div>
          </div>
          <div className="flex gap-2">
            <h1 className="text-[#3E4958]">{location || 0 + " bedroom"}</h1> |
          </div>
          <div className="text-[#3E4958]">{type || "No Type"}</div>
        </div>
      </div>
    </div>
  );
};
export default ListCard;
